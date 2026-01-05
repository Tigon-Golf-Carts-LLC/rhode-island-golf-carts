import { Route } from "wouter";
import MunicipalityRentalPage from "@/components/MunicipalityRentalPage";
import { RHODE_ISLAND_MUNICIPALITIES } from "@/data/rhodeIslandMunicipalities";

/**
 * Rhode Island Rental Pages - All 39 municipalities
 * Auto-generates rental-specific pages for all Rhode Island towns and cities
 */
export default function RhodeIslandLocationRentals() {
  return (
    <>
      {RHODE_ISLAND_MUNICIPALITIES.map((municipality) => (
        <Route
          key={`rental-${municipality.slug}`}
          path={`/rentals/${municipality.slug}`}
        >
          <MunicipalityRentalPage
            municipalityName={municipality.name}
            municipalityType={municipality.type}
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
