// Copied verbatim from infinidraft's src/lib/leagueGroups.ts - zero
// infinidraft-specific coupling. api.leagues.listLinkedSeasons returns one
// row per season, but the app's league picker / dashboard both present one
// entry per real-world league - group the flat list by leagueId and surface
// each group's most recent season so prior-year rows don't show up as
// separate leagues. Also doubles as infinileague's answer to "which season
// is the current one for this league" - there's no other such helper.
export interface LeagueGroup<T> {
  latest: T;
  seasons: T[];
}

export function groupSeasonsByLeague<
  T extends { leagueId: string; year: string },
>(seasons: readonly T[]): LeagueGroup<T>[] {
  const byLeague = new Map<string, T[]>();
  for (const season of seasons) {
    const group = byLeague.get(season.leagueId);
    if (group) group.push(season);
    else byLeague.set(season.leagueId, [season]);
  }
  return Array.from(byLeague.values()).map((group) => ({
    latest: group.reduce((a, b) => (b.year > a.year ? b : a)),
    seasons: group,
  }));
}
