// GENERATED - do not hand-edit. This is infinileague's copy of infinidraft's
// public Convex API surface (infinileague has no convex/ of its own - see
// infinidraft/INFINILEAGUE.md for why both apps share one deployment).
//
// Regenerate from infinidraft's repo root, against the dev deployment
// (or --prod for prod), then copy the output over this file:
//   npx convex-helpers ts-api-spec --output-file /tmp/infinileague-api.ts
//   cp /tmp/infinileague-api.ts ../infinileague/src/convexApi.ts
//
// Most return types come through as `any` (Convex only infers a precise
// return type from a function's own explicit `returns` validator, which
// infinidraft's functions mostly don't declare) - callers that need real
// typing on a query's result should define a local interface for the shape
// they actually consume rather than relying on this file for it.
import { type FunctionReference, anyApi } from "convex/server";
import { type GenericId as Id } from "convex/values";

export const api: PublicApiType = anyApi as unknown as PublicApiType;
export const internal: InternalApiType = anyApi as unknown as InternalApiType;

export type PublicApiType = {
  projections: {
    getProjections: FunctionReference<
      "query",
      "public",
      { position: "QB" | "RB" | "WR" | "TE" | "DST" | "K"; week: string },
      any
    >;
    getAllProjections: FunctionReference<
      "query",
      "public",
      { week: string },
      any
    >;
    upsertProjections: FunctionReference<
      "mutation",
      "public",
      {
        position: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
        rows: Array<{
          fpid: number;
          name: string;
          pointsHalf: number;
          pointsPpr: number;
          pointsStd: number;
          stats: Record<string, number>;
          team: string | null;
        }>;
        season: string;
        week: string;
      },
      any
    >;
  };
  auth: {
    isAuthenticated: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
    signIn: FunctionReference<
      "action",
      "public",
      {
        calledBy?: string;
        params?: any;
        provider?: string;
        refreshToken?: string;
        verifier?: string;
      },
      any
    >;
    signOut: FunctionReference<"action", "public", Record<string, never>, any>;
  };
  users: {
    getCurrentUser: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
    ensureCurrentUser: FunctionReference<
      "mutation",
      "public",
      { allowlistedEmails?: Array<string> },
      any
    >;
    getCurrentUserForDataFetch: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
    promoteCurrentUserToSuperAdmin: FunctionReference<
      "mutation",
      "public",
      { allowlistedEmails?: Array<string> },
      any
    >;
  };
  injuries: {
    getInjuries: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
    upsertInjuries: FunctionReference<
      "mutation",
      "public",
      {
        rows: Array<{
          comment: string;
          fpid: number;
          injuryType: string;
          irWeeks: Array<number>;
          practice1: string | null;
          practice2: string | null;
          practice3: string | null;
          practiceReportInjuryType: string | null;
          probabilityOfPlaying: number | null;
          status: string;
          statusShort: string;
          updatedAt: number;
        }>;
      },
      any
    >;
  };
  playerPoints: {
    getPlayerPoints: FunctionReference<
      "query",
      "public",
      { position: "QB" | "RB" | "WR" | "TE" | "DST" | "K"; week: string },
      any
    >;
    getPlayerGameLog: FunctionReference<
      "query",
      "public",
      { fpid: number; scoring: "STD" | "HALF" | "PPR"; season: string },
      any
    >;
    getPlayerSeasonStatsHistory: FunctionReference<
      "query",
      "public",
      {
        fpid: number;
        scoringConfig: {
          scoring: "STD" | "HALF" | "PPR";
          sixPointPassTds: boolean;
          teScoring: "NONE" | "HALF" | "FULL";
        };
        seasons: Array<string>;
      },
      any
    >;
    getAllSeasonStats: FunctionReference<
      "query",
      "public",
      {
        position?: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
        scoringConfig: {
          scoring: "STD" | "HALF" | "PPR";
          sixPointPassTds: boolean;
          teScoring: "NONE" | "HALF" | "FULL";
        };
        season: string;
      },
      any
    >;
    upsertPlayerPoints: FunctionReference<
      "mutation",
      "public",
      {
        rows: Array<{
          fpid: number;
          points: number;
          position: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
          stats: Record<string, number>;
          week: string;
        }>;
        scoring: "STD" | "HALF" | "PPR";
        season: string;
      },
      any
    >;
  };
  players: {
    getPlayer: FunctionReference<"query", "public", { fpid: number }, any>;
    upsertPlayers: FunctionReference<
      "mutation",
      "public",
      {
        rows: Array<{
          fpid: number;
          name: string;
          position: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
          team: string | null;
          yearsExp?: number;
        }>;
      },
      any
    >;
    getRookieFpids: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
  };
  rankings: {
    getRankings: FunctionReference<
      "query",
      "public",
      { position: "QB" | "RB" | "WR" | "TE" | "DST" | "K"; week: string },
      any
    >;
    getAllRankings: FunctionReference<"query", "public", { week: string }, any>;
    upsertRankings: FunctionReference<
      "mutation",
      "public",
      {
        position: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
        rows: Array<{
          adpHalf: number;
          adpPpr: number;
          adpStd: number;
          fpid: number;
        }>;
        season: string;
        week: string;
      },
      any
    >;
  };
  draftValues: {
    getDraftValues: FunctionReference<
      "query",
      "public",
      {
        position?: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
        scoringConfig: {
          scoring: "STD" | "HALF" | "PPR";
          sixPointPassTds: boolean;
          teScoring: "NONE" | "HALF" | "FULL";
        };
        seasonId: Id<"seasons">;
        week: string;
      },
      any
    >;
    getDraftValuesPublic: FunctionReference<
      "query",
      "public",
      {
        scoringConfig: {
          scoring: "STD" | "HALF" | "PPR";
          sixPointPassTds: boolean;
          teScoring: "NONE" | "HALF" | "FULL";
        };
        seasonId: Id<"seasons">;
        week: string;
      },
      any
    >;
  };
  sleeper: {
    projections: {
      fetchProjections: FunctionReference<
        "action",
        "public",
        { season?: string; week: string },
        any
      >;
    };
    playerPoints: {
      fetchAllPlayerPoints: FunctionReference<
        "action",
        "public",
        { year?: string },
        any
      >;
    };
    league: {
      fetchSleeperLeagueTeams: FunctionReference<
        "action",
        "public",
        { sleeperLeagueId: string },
        any
      >;
      listSleeperKeeperSuggestions: FunctionReference<
        "action",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      listSleeperLeaguesForUsername: FunctionReference<
        "action",
        "public",
        { username: string },
        any
      >;
      previewSleeperImport: FunctionReference<
        "action",
        "public",
        { sleeperLeagueId: string },
        any
      >;
      syncLeagueRoster: FunctionReference<
        "action",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
    };
    playerLinks: {
      fetchSleeperPlayerLinks: FunctionReference<
        "action",
        "public",
        Record<string, never>,
        any
      >;
    };
    draftSync: {
      fetchSleeperDraftSchedule: FunctionReference<
        "action",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      linkSleeperDraft: FunctionReference<
        "action",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      disableLiveSync: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getSyncStatus: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
    };
  };
  fetchAllData: {
    fetchAll: FunctionReference<
      "action",
      "public",
      { season?: string; week?: string },
      any
    >;
    refreshCaches: FunctionReference<
      "action",
      "public",
      { season?: string; week?: string },
      any
    >;
  };
  draft: {
    picks: {
      listDraftPicks: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getActiveNomination: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      listDraftPicksPublic: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getActiveNominationPublic: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      nominate: FunctionReference<
        "mutation",
        "public",
        {
          fpid: number;
          nominatingTeamId?: Id<"seasonTeams">;
          openingBid?: number;
          seasonId: Id<"seasons">;
        },
        any
      >;
      bumpNominationBid: FunctionReference<
        "mutation",
        "public",
        { delta: number; seasonId: Id<"seasons"> },
        any
      >;
      setNominationBid: FunctionReference<
        "mutation",
        "public",
        { amount: number; seasonId: Id<"seasons"> },
        any
      >;
      passNomination: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      undoNomination: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      resolvePick: FunctionReference<
        "mutation",
        "public",
        {
          fpid: number;
          planSlotKey?: string;
          price: number;
          seasonId: Id<"seasons">;
          teamId: Id<"seasonTeams">;
        },
        any
      >;
      draftPick: FunctionReference<
        "mutation",
        "public",
        { fpid: number; seasonId: Id<"seasons">; teamId: Id<"seasonTeams"> },
        any
      >;
      addKeeper: FunctionReference<
        "mutation",
        "public",
        {
          fpid: number;
          planSlotKey?: string;
          price?: number;
          round?: number;
          seasonId: Id<"seasons">;
          teamId: Id<"seasonTeams">;
        },
        any
      >;
      removeKeeper: FunctionReference<
        "mutation",
        "public",
        { pickId: Id<"draftPicks"> },
        any
      >;
      setKeeperStreak: FunctionReference<
        "mutation",
        "public",
        { pickId: Id<"draftPicks">; streak: number },
        any
      >;
      setKeeperPrice: FunctionReference<
        "mutation",
        "public",
        { pickId: Id<"draftPicks">; price: number },
        any
      >;
      setKeeperRound: FunctionReference<
        "mutation",
        "public",
        { pickId: Id<"draftPicks">; round: number },
        any
      >;
      setKeeperTeam: FunctionReference<
        "mutation",
        "public",
        { pickId: Id<"draftPicks">; teamId: Id<"seasonTeams"> },
        any
      >;
      removePick: FunctionReference<
        "mutation",
        "public",
        { pickId: Id<"draftPicks"> },
        any
      >;
      undoLastPick: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
    };
    teams: {
      addSeasonTeam: FunctionReference<
        "mutation",
        "public",
        { name: string; seasonId: Id<"seasons"> },
        any
      >;
      initializeSeasonTeams: FunctionReference<
        "mutation",
        "public",
        {
          opponentNames: Array<string>;
          opponentSleeperLinks?: Array<{
            sleeperOwnerId: string;
            sleeperRosterId: string;
          } | null>;
          opponentYahooTeamKeys?: Array<string | null>;
          seasonId: Id<"seasons">;
          selfName: string;
          selfSleeperLink?: { sleeperOwnerId: string; sleeperRosterId: string };
          selfYahooTeamKey?: string;
        },
        any
      >;
      listSeasonTeams: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      listSeasonTeamsPublic: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      removeSeasonTeam: FunctionReference<
        "mutation",
        "public",
        { teamId: Id<"seasonTeams"> },
        any
      >;
      renameSeasonTeam: FunctionReference<
        "mutation",
        "public",
        { name: string; teamId: Id<"seasonTeams"> },
        any
      >;
      setTeamFaabBudget: FunctionReference<
        "mutation",
        "public",
        { faabBudget: number | null; teamId: Id<"seasonTeams"> },
        any
      >;
      setTeamSalaryCap: FunctionReference<
        "mutation",
        "public",
        { salaryCap: number | null; teamId: Id<"seasonTeams"> },
        any
      >;
      setTeamSleeperLink: FunctionReference<
        "mutation",
        "public",
        {
          sleeperOwnerId: string | null;
          sleeperRosterId: string | null;
          teamId: Id<"seasonTeams">;
        },
        any
      >;
      setTeamYahooLink: FunctionReference<
        "mutation",
        "public",
        { teamId: Id<"seasonTeams">; yahooTeamKey: string | null },
        any
      >;
    };
    plan: {
      getBudgetPlan: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getLiveBudgetPlan: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      upsertBudgetPlan: FunctionReference<
        "mutation",
        "public",
        {
          amounts: Record<string, number>;
          overspendBehavior: "bench" | "spread" | "ask";
          seasonId: Id<"seasons">;
        },
        any
      >;
      upsertLiveBudgetOverrides: FunctionReference<
        "mutation",
        "public",
        {
          overrides: Record<string, number>;
          overspendBehavior?: "bench" | "spread" | "ask";
          seasonId: Id<"seasons">;
        },
        any
      >;
      resetLiveBudgetPlan: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
    };
    board: {
      getDraftBoard: FunctionReference<
        "query",
        "public",
        {
          position?: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
          scoringConfig: {
            scoring: "STD" | "HALF" | "PPR";
            sixPointPassTds: boolean;
            teScoring: "NONE" | "HALF" | "FULL";
          };
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
    };
    tags: {
      listPlayerTags: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      cyclePlayerTag: FunctionReference<
        "mutation",
        "public",
        { fpid: number; seasonId: Id<"seasons"> },
        any
      >;
      setPlayerTag: FunctionReference<
        "mutation",
        "public",
        { fpid: number; seasonId: Id<"seasons">; tag: "target" | "avoid" },
        any
      >;
      clearPlayerTag: FunctionReference<
        "mutation",
        "public",
        { fpid: number; seasonId: Id<"seasons"> },
        any
      >;
      reorderShortlist: FunctionReference<
        "mutation",
        "public",
        { fpids: Array<number>; seasonId: Id<"seasons"> },
        any
      >;
    };
    history: {
      createNextSeason: FunctionReference<
        "mutation",
        "public",
        { id: Id<"seasons">; name: string; season: string },
        any
      >;
      getPlayerPriceHistory: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      listSeasonLineage: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
    };
    playerDetail: {
      getPlayerDetail: FunctionReference<
        "query",
        "public",
        { fpid: number; seasonId?: Id<"seasons">; week: string },
        any
      >;
    };
    nominationOrder: {
      clearNominationOrder: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getCurrentNominator: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getCurrentNominatorPublic: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getNominationConfig: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getNominationConfigPublic: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      setCurrentNominator: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons">; teamId: Id<"seasonTeams"> | null },
        any
      >;
      setNominationOrder: FunctionReference<
        "mutation",
        "public",
        {
          mode: "linear" | "snake";
          seasonId: Id<"seasons">;
          teamIds: Array<Id<"seasonTeams">>;
        },
        any
      >;
    };
    keeperRules: {
      setKeeperRules: FunctionReference<
        "mutation",
        "public",
        {
          keeperRules: {
            costMode?: "dollar" | "round";
            defaultFormula: {
              flatAdd: number;
              minimumCost?: number;
              multiplier: number;
              undraftedCost?: number;
            };
            defaultRoundFormula?: {
              minimumRound?: number;
              roundsEarlier: number;
              undraftedRound?: number;
            };
            maxConsecutiveYears?: number;
            maxKeepersPerTeam?: number;
            roundConflictResolution?: "earlier" | "later";
            tiers: Array<{
              formula: {
                flatAdd: number;
                minimumCost?: number;
                multiplier: number;
              };
              fpids: Array<number>;
              id: string;
              maxSize?: number;
              name: string;
              positions?: Array<"QB" | "RB" | "WR" | "TE" | "DST" | "K">;
              roundFormula?: {
                minimumRound?: number;
                roundsEarlier: number;
                undraftedRound?: number;
              };
            }>;
          };
          seasonId: Id<"seasons">;
        },
        any
      >;
      setKeeperTierPlayers: FunctionReference<
        "mutation",
        "public",
        { fpids: Array<number>; seasonId: Id<"seasons">; tierId: string },
        any
      >;
    };
    reportCard: {
      ensureReportCardSnapshotted: FunctionReference<
        "mutation",
        "public",
        {
          scoringConfig: {
            scoring: "STD" | "HALF" | "PPR";
            sixPointPassTds: boolean;
            teScoring: "NONE" | "HALF" | "FULL";
          };
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
      getDraftReportCardPublic: FunctionReference<
        "query",
        "public",
        {
          scoringConfig: {
            scoring: "STD" | "HALF" | "PPR";
            sixPointPassTds: boolean;
            teScoring: "NONE" | "HALF" | "FULL";
          };
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
      ensureReportSummaryGenerated: FunctionReference<
        "mutation",
        "public",
        {
          scoringConfig: {
            scoring: "STD" | "HALF" | "PPR";
            sixPointPassTds: boolean;
            teScoring: "NONE" | "HALF" | "FULL";
          };
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
      regenerateReportSummary: FunctionReference<
        "mutation",
        "public",
        {
          scoringConfig: {
            scoring: "STD" | "HALF" | "PPR";
            sixPointPassTds: boolean;
            teScoring: "NONE" | "HALF" | "FULL";
          };
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
    };
    lifecycle: {
      startDraft: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      reopenPreDraft: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
    };
    manualHistory: {
      getManualPreviousSeasonEntry: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons">; year: string },
        any
      >;
      setManualPreviousSeasonResults: FunctionReference<
        "mutation",
        "public",
        {
          seasonId: Id<"seasons">;
          teams: Array<{
            isSelf: boolean;
            name: string;
            players: Array<{ fpid: number; price?: number; round?: number }>;
          }>;
          year: string;
        },
        any
      >;
    };
    customPlayers: {
      addCustomPlayer: FunctionReference<
        "mutation",
        "public",
        {
          name: string;
          position: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
    };
    insights: {
      getPreDraftInsights: FunctionReference<
        "query",
        "public",
        {
          scoringConfig: {
            scoring: "STD" | "HALF" | "PPR";
            sixPointPassTds: boolean;
            teScoring: "NONE" | "HALF" | "FULL";
          };
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
      ensureInsightsGenerated: FunctionReference<
        "mutation",
        "public",
        {
          scoringConfig: {
            scoring: "STD" | "HALF" | "PPR";
            sixPointPassTds: boolean;
            teScoring: "NONE" | "HALF" | "FULL";
          };
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
      regenerateInsights: FunctionReference<
        "mutation",
        "public",
        {
          scoringConfig: {
            scoring: "STD" | "HALF" | "PPR";
            sixPointPassTds: boolean;
            teScoring: "NONE" | "HALF" | "FULL";
          };
          seasonId: Id<"seasons">;
          week: string;
        },
        any
      >;
    };
    draftOrder: {
      getDraftOrderConfig: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      getDraftOrderConfigPublic: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      setReversalRounds: FunctionReference<
        "mutation",
        "public",
        { reversalRounds: Array<number>; seasonId: Id<"seasons"> },
        any
      >;
      setDraftOrder: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons">; teamIds: Array<Id<"seasonTeams">> },
        any
      >;
      randomizeDraftOrder: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      clearDraftOrder: FunctionReference<
        "mutation",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
    };
    pickSlots: {
      forfeitPickSlot: FunctionReference<
        "mutation",
        "public",
        {
          note?: string;
          originalTeamId: Id<"seasonTeams">;
          round: number;
          seasonId: Id<"seasons">;
        },
        any
      >;
      getSnakeBoardPublic: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      listPickSlots: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      restorePickSlot: FunctionReference<
        "mutation",
        "public",
        {
          originalTeamId: Id<"seasonTeams">;
          round: number;
          seasonId: Id<"seasons">;
        },
        any
      >;
      tradePickSlot: FunctionReference<
        "mutation",
        "public",
        {
          newTeamId: Id<"seasonTeams">;
          note?: string;
          originalTeamId: Id<"seasonTeams">;
          round: number;
          seasonId: Id<"seasons">;
        },
        any
      >;
    };
  };
  valueGaps: {
    getAllValueGaps: FunctionReference<
      "query",
      "public",
      {
        lastSeason: string;
        scoringConfig: {
          scoring: "STD" | "HALF" | "PPR";
          sixPointPassTds: boolean;
          teScoring: "NONE" | "HALF" | "FULL";
        };
        week: string;
      },
      any
    >;
  };
  injurySnapshots: {
    recordSnapshots: FunctionReference<
      "mutation",
      "public",
      {
        rows: Array<{
          comment: string;
          fpid: number;
          injuryType: string;
          status: string;
          statusShort: string;
        }>;
        season: string;
        week: string;
      },
      any
    >;
    getSeasonSnapshots: FunctionReference<
      "query",
      "public",
      { fpid: number; season: string },
      any
    >;
  };
  leagues: {
    listSeasons: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
    listLinkedSeasons: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
    getSeasonPublic: FunctionReference<
      "query",
      "public",
      { seasonId: Id<"seasons"> },
      any
    >;
    createLeague: FunctionReference<
      "mutation",
      "public",
      {
        draftType?: "auction" | "snake" | "linear";
        flexPositions: Array<"QB" | "RB" | "WR" | "TE" | "DST" | "K">;
        name: string;
        rosterSlots: {
          BENCH: number;
          DST: number;
          FLEX: number;
          K: number;
          QB: number;
          RB: number;
          SUPERFLEX: number;
          TE: number;
          WR: number;
        };
        salaryCap: number;
        scoring: "STD" | "HALF" | "PPR";
        sixPointPassTds: boolean;
        sleeperLeagueId?: string;
        superflexPositions: Array<"QB" | "RB" | "WR" | "TE" | "DST" | "K">;
        teScoring: "NONE" | "HALF" | "FULL";
        teamCount: number;
        useKeepers?: boolean;
        yahooLeagueKey?: string;
      },
      any
    >;
    updateSeason: FunctionReference<
      "mutation",
      "public",
      {
        flexPositions: Array<"QB" | "RB" | "WR" | "TE" | "DST" | "K">;
        id: Id<"seasons">;
        name: string;
        rosterSlots: {
          BENCH: number;
          DST: number;
          FLEX: number;
          K: number;
          QB: number;
          RB: number;
          SUPERFLEX: number;
          TE: number;
          WR: number;
        };
        salaryCap: number;
        scoring: "STD" | "HALF" | "PPR";
        sixPointPassTds: boolean;
        superflexPositions: Array<"QB" | "RB" | "WR" | "TE" | "DST" | "K">;
        teScoring: "NONE" | "HALF" | "FULL";
        teamCount: number;
      },
      any
    >;
    importPreviousSeasonHistory: FunctionReference<
      "mutation",
      "public",
      {
        newSeasonId: Id<"seasons">;
        previousDraftType?: "auction" | "snake" | "linear";
        season: string;
        selfOwnerId?: string;
        sleeperLeagueId?: string;
        teams: Array<{
          ownerId: string;
          players: Array<{ fpid: number; price?: number; round?: number }>;
          teamName: string;
        }>;
        yahooLeagueKey?: string;
      },
      any
    >;
    setUseKeepers: FunctionReference<
      "mutation",
      "public",
      { id: Id<"seasons">; useKeepers: boolean },
      any
    >;
    setDraftType: FunctionReference<
      "mutation",
      "public",
      { draftType: "auction" | "snake" | "linear"; id: Id<"seasons"> },
      any
    >;
    setSleeperLeagueId: FunctionReference<
      "mutation",
      "public",
      { id: Id<"seasons">; sleeperLeagueId: string | null },
      any
    >;
    setYahooLeagueKey: FunctionReference<
      "mutation",
      "public",
      { id: Id<"seasons">; yahooLeagueKey: string | null },
      any
    >;
    setFaabBudget: FunctionReference<
      "mutation",
      "public",
      { faabBudget: number | null; id: Id<"seasons"> },
      any
    >;
    deleteLeague: FunctionReference<
      "mutation",
      "public",
      { id: Id<"seasons"> },
      any
    >;
  };
  nflState: {
    getNflState: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
  };
  season: {
    faabValues: {
      getFaabSuggestions: FunctionReference<
        "query",
        "public",
        {
          position?: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
          seasonId: Id<"seasons">;
          teamId?: Id<"seasonTeams">;
        },
        any
      >;
    };
    rosterPlayers: {
      getRosterSyncStatus: FunctionReference<
        "query",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
    };
  };
  yahoo: {
    league: {
      listMyYahooLeagues: FunctionReference<
        "action",
        "public",
        Record<string, never>,
        any
      >;
      fetchYahooLeagueTeams: FunctionReference<
        "action",
        "public",
        { leagueKey: string },
        any
      >;
      syncYahooLeagueRoster: FunctionReference<
        "action",
        "public",
        { seasonId: Id<"seasons"> },
        any
      >;
      previewYahooImport: FunctionReference<
        "action",
        "public",
        { leagueKey: string },
        any
      >;
    };
    oauth: {
      getConnectionStatus: FunctionReference<
        "query",
        "public",
        Record<string, never>,
        any
      >;
      startYahooAuth: FunctionReference<
        "action",
        "public",
        { seasonId?: Id<"seasons"> },
        any
      >;
    };
  };
  billing: {
    actions: {
      startCheckout: FunctionReference<
        "action",
        "public",
        { cancelPath: string; successPath: string },
        any
      >;
      openBillingPortal: FunctionReference<
        "action",
        "public",
        { returnPath: string },
        any
      >;
      reconcileCheckoutSession: FunctionReference<
        "action",
        "public",
        { sessionId: string },
        any
      >;
    };
    mutations: {
      setCompAccess: FunctionReference<
        "mutation",
        "public",
        { comped: boolean; note?: string; targetUserId: Id<"users"> },
        any
      >;
    };
    queries: {
      getMyEntitlement: FunctionReference<
        "query",
        "public",
        Record<string, never>,
        any
      >;
      findUserForComp: FunctionReference<
        "query",
        "public",
        { email: string },
        any
      >;
      getMySubscription: FunctionReference<
        "query",
        "public",
        Record<string, never>,
        any
      >;
    };
    pricing: {
      getProPricing: FunctionReference<
        "query",
        "public",
        Record<string, never>,
        any
      >;
      ensureProPricingCached: FunctionReference<
        "mutation",
        "public",
        Record<string, never>,
        any
      >;
    };
  };
  espn: {
    rankings: {
      fetchEspnRankings: FunctionReference<
        "action",
        "public",
        { season?: string; week?: string },
        any
      >;
    };
  };
  standardValues: {
    getStandardValues: FunctionReference<
      "query",
      "public",
      { season: string },
      any
    >;
  };
  providerProjections: {
    upsertProviderProjections: FunctionReference<
      "mutation",
      "public",
      {
        position: "QB" | "RB" | "WR" | "TE" | "DST" | "K";
        provider: "sleeper" | "espn";
        rows: Array<{ fpid: number; stats: Record<string, number> }>;
        season: string;
        week: string;
      },
      any
    >;
  };
  projectionBlending: {
    blendAllProjections: FunctionReference<
      "action",
      "public",
      { season?: string; week: string },
      any
    >;
  };
};
export type InternalApiType = {};
