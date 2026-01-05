import { Route } from "wouter";
import TownPage from "@/components/TownPage";
import { RHODE_ISLAND_MUNICIPALITIES } from "@/data/rhodeIslandMunicipalities";

/**
 * Rhode Island Location Pages - All 39 municipalities
 * Auto-generates location-specific pages for all Rhode Island towns and cities
 */
export default function RhodeIslandLocationPages() {
  return (
    <>
      {RHODE_ISLAND_MUNICIPALITIES.map((municipality) => (
        <Route
          key={municipality.slug}
          path={municipality.url}
        >
          <TownPage
            townName={municipality.name}
            townType={municipality.type}
            county={municipality.county}
            state="Rhode Island"
            stateAbbr="RI"
            region="Rhode Island"
          />
        </Route>
      ))}
    </>
  );
}
