// Minimal shape infinileague actually reads off api.leagues.listLinkedSeasons
// - the generated src/convexApi.ts's return type is untyped (`any`), since
// none of infinidraft's Convex functions declare an explicit `returns`
// validator (see that file's own header comment) - this is the "define a
// local interface for the shape you actually consume" case it points to.
// leagueId/year drive groupSeasonsByLeague; the rest is what the dashboard
// card / header picker / league page display.
export interface LinkedSeason {
  _id: string;
  leagueId: string;
  year: string;
  name: string;
  teamCount: number;
  scoring: "STD" | "HALF" | "PPR";
}
