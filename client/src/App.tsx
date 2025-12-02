import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";
import EcoImpactPage from "@/pages/EcoImpactPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";

import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import { rewriteDomAssetReferences } from "@/lib/assets";

// Policy Pages
import TermsConditionsPage from "@/pages/policies/TermsConditionsPage";
import ReturnPolicyPage from "@/pages/policies/ReturnPolicyPage";
import DeliveryPolicyPage from "@/pages/policies/DeliveryPolicyPage";
import RentalPolicyPage from "@/pages/policies/RentalPolicyPage";
import StoragePolicyPage from "@/pages/policies/StoragePolicyPage";
import PublishingPolicyPage from "@/pages/policies/PublishingPolicyPage";
import FeedbackPolicyPage from "@/pages/policies/FeedbackPolicyPage";
import CorrectionsPolicyPage from "@/pages/policies/CorrectionsPolicyPage";
import DiversityPolicyPage from "@/pages/policies/DiversityPolicyPage";
import EthicsPolicyPage from "@/pages/policies/EthicsPolicyPage";
import StaffingReportPage from "@/pages/policies/StaffingReportPage";

// Chesapeake Location Pages (37 Total)
import {
  GreatBridgePage, GreenbrierPage, WesternBranchPage, DeepCreekPage, SouthNorfolkPage,
  HickoryPage, GrassfieldPage, IndianRiverPage, PleasantGrovePage, PortlockPage,
  BowersHillPage, CamelotPage, WallacetonPage, CrestwoodPage, SunnysidePage,
  AlbemarleAcresPage, NorfolkHighlandsPage, SunrayPage, ButtsStationPage, OakGrovePage,
  NorfolkPage, VirginiaBeachPage, PortsmouthPage, SuffolkPage, HamptonPage, NewportNewsPage,
  KempsvillePage, GhentPage, OceanViewPage, PrincessAnnePage, ChurchlandPage, DriverPage,
  MoyockPage, CurrituckPage, SouthMillsPage, CamdenPage, ElizabethCityPage
} from "@/pages/towns/ChesapeakeLocationPages";

// Chesapeake Rental Pages (37 Total)
import {
  GreatBridgeRentalsPage, GreenbrierRentalsPage, WesternBranchRentalsPage, DeepCreekRentalsPage, SouthNorfolkRentalsPage,
  HickoryRentalsPage, GrassfieldRentalsPage, IndianRiverRentalsPage, PleasantGroveRentalsPage, PortlockRentalsPage,
  BowersHillRentalsPage, CamelotRentalsPage, WallacetonRentalsPage, CrestwoodRentalsPage, SunnysideRentalsPage,
  AlbemarleAcresRentalsPage, NorfolkHighlandsRentalsPage, SunrayRentalsPage, ButtsStationRentalsPage, OakGroveRentalsPage,
  NorfolkRentalsPage, VirginiaBeachRentalsPage, PortsmouthRentalsPage, SuffolkRentalsPage, HamptonRentalsPage, NewportNewsRentalsPage,
  KempsvilleRentalsPage, GhentRentalsPage, OceanViewRentalsPage, PrincessAnneRentalsPage, ChurchlandRentalsPage, DriverRentalsPage,
  MoyockRentalsPage, CurrituckRentalsPage, SouthMillsRentalsPage, CamdenRentalsPage, ElizabethCityRentalsPage
} from "@/pages/rentals/ChesapeakeLocationRentals";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

queryClient.setQueryDefaults(['get'], { queryFn: ({ queryKey }) => fetcher(queryKey[0] as string) });

export default function App() {
  useScrollToTop();

  useEffect(() => {
    rewriteDomAssetReferences();
  }, []);

  return (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />
            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/vehicles/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/eco-impact" component={EcoImpactPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/blog/:slug" component={BlogPostPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />

            {/* Policy Pages */}
            <Route path="/policies/terms-conditions" component={TermsConditionsPage} />
            <Route path="/policies/return-policy" component={ReturnPolicyPage} />
            <Route path="/policies/delivery-policy" component={DeliveryPolicyPage} />
            <Route path="/policies/rental-policy" component={RentalPolicyPage} />
            <Route path="/policies/storage-policy" component={StoragePolicyPage} />
            <Route path="/policies/publishing-policy" component={PublishingPolicyPage} />
            <Route path="/policies/feedback-policy" component={FeedbackPolicyPage} />
            <Route path="/policies/corrections-policy" component={CorrectionsPolicyPage} />
            <Route path="/policies/diversity-policy" component={DiversityPolicyPage} />
            <Route path="/policies/ethics-policy" component={EthicsPolicyPage} />
            <Route path="/policies/staffing-report" component={StaffingReportPage} />

            {/* Chesapeake Neighborhoods (20) - SEO-friendly URLs */}
            <Route path="/great-bridge-golf-carts" component={GreatBridgePage} />
            <Route path="/greenbrier-golf-carts" component={GreenbrierPage} />
            <Route path="/western-branch-golf-carts" component={WesternBranchPage} />
            <Route path="/deep-creek-golf-carts" component={DeepCreekPage} />
            <Route path="/south-norfolk-golf-carts" component={SouthNorfolkPage} />
            <Route path="/hickory-golf-carts" component={HickoryPage} />
            <Route path="/grassfield-golf-carts" component={GrassfieldPage} />
            <Route path="/indian-river-golf-carts" component={IndianRiverPage} />
            <Route path="/pleasant-grove-golf-carts" component={PleasantGrovePage} />
            <Route path="/portlock-golf-carts" component={PortlockPage} />
            <Route path="/bowers-hill-golf-carts" component={BowersHillPage} />
            <Route path="/camelot-golf-carts" component={CamelotPage} />
            <Route path="/wallaceton-golf-carts" component={WallacetonPage} />
            <Route path="/crestwood-golf-carts" component={CrestwoodPage} />
            <Route path="/sunnyside-golf-carts" component={SunnysidePage} />
            <Route path="/albemarle-acres-golf-carts" component={AlbemarleAcresPage} />
            <Route path="/norfolk-highlands-golf-carts" component={NorfolkHighlandsPage} />
            <Route path="/sunray-golf-carts" component={SunrayPage} />
            <Route path="/butts-station-golf-carts" component={ButtsStationPage} />
            <Route path="/oak-grove-golf-carts" component={OakGrovePage} />

            {/* Hampton Roads Cities (6) - SEO-friendly URLs */}
            <Route path="/norfolk-golf-carts" component={NorfolkPage} />
            <Route path="/virginia-beach-golf-carts" component={VirginiaBeachPage} />
            <Route path="/portsmouth-golf-carts" component={PortsmouthPage} />
            <Route path="/suffolk-golf-carts" component={SuffolkPage} />
            <Route path="/hampton-golf-carts" component={HamptonPage} />
            <Route path="/newport-news-golf-carts" component={NewportNewsPage} />

            {/* Hampton Roads Neighborhoods (6) - SEO-friendly URLs */}
            <Route path="/kempsville-golf-carts" component={KempsvillePage} />
            <Route path="/ghent-golf-carts" component={GhentPage} />
            <Route path="/ocean-view-golf-carts" component={OceanViewPage} />
            <Route path="/princess-anne-golf-carts" component={PrincessAnnePage} />
            <Route path="/churchland-golf-carts" component={ChurchlandPage} />
            <Route path="/driver-golf-carts" component={DriverPage} />

            {/* Northeastern North Carolina (5) - SEO-friendly URLs */}
            <Route path="/moyock-golf-carts" component={MoyockPage} />
            <Route path="/currituck-golf-carts" component={CurrituckPage} />
            <Route path="/south-mills-golf-carts" component={SouthMillsPage} />
            <Route path="/camden-golf-carts" component={CamdenPage} />
            <Route path="/elizabeth-city-golf-carts" component={ElizabethCityPage} />

            {/* Chesapeake Neighborhoods Rental Pages (20) */}
            <Route path="/rentals/great-bridge" component={GreatBridgeRentalsPage} />
            <Route path="/rentals/greenbrier" component={GreenbrierRentalsPage} />
            <Route path="/rentals/western-branch" component={WesternBranchRentalsPage} />
            <Route path="/rentals/deep-creek" component={DeepCreekRentalsPage} />
            <Route path="/rentals/south-norfolk" component={SouthNorfolkRentalsPage} />
            <Route path="/rentals/hickory" component={HickoryRentalsPage} />
            <Route path="/rentals/grassfield" component={GrassfieldRentalsPage} />
            <Route path="/rentals/indian-river" component={IndianRiverRentalsPage} />
            <Route path="/rentals/pleasant-grove" component={PleasantGroveRentalsPage} />
            <Route path="/rentals/portlock" component={PortlockRentalsPage} />
            <Route path="/rentals/bowers-hill" component={BowersHillRentalsPage} />
            <Route path="/rentals/camelot" component={CamelotRentalsPage} />
            <Route path="/rentals/wallaceton" component={WallacetonRentalsPage} />
            <Route path="/rentals/crestwood" component={CrestwoodRentalsPage} />
            <Route path="/rentals/sunnyside" component={SunnysideRentalsPage} />
            <Route path="/rentals/albemarle-acres" component={AlbemarleAcresRentalsPage} />
            <Route path="/rentals/norfolk-highlands" component={NorfolkHighlandsRentalsPage} />
            <Route path="/rentals/sunray" component={SunrayRentalsPage} />
            <Route path="/rentals/butts-station" component={ButtsStationRentalsPage} />
            <Route path="/rentals/oak-grove" component={OakGroveRentalsPage} />

            {/* Hampton Roads Cities Rental Pages (6) */}
            <Route path="/rentals/norfolk" component={NorfolkRentalsPage} />
            <Route path="/rentals/virginia-beach" component={VirginiaBeachRentalsPage} />
            <Route path="/rentals/portsmouth" component={PortsmouthRentalsPage} />
            <Route path="/rentals/suffolk" component={SuffolkRentalsPage} />
            <Route path="/rentals/hampton" component={HamptonRentalsPage} />
            <Route path="/rentals/newport-news" component={NewportNewsRentalsPage} />

            {/* Hampton Roads Neighborhoods Rental Pages (6) */}
            <Route path="/rentals/kempsville" component={KempsvilleRentalsPage} />
            <Route path="/rentals/ghent" component={GhentRentalsPage} />
            <Route path="/rentals/ocean-view" component={OceanViewRentalsPage} />
            <Route path="/rentals/princess-anne" component={PrincessAnneRentalsPage} />
            <Route path="/rentals/churchland" component={ChurchlandRentalsPage} />
            <Route path="/rentals/driver" component={DriverRentalsPage} />

            {/* Northeastern North Carolina Rental Pages (5) */}
            <Route path="/rentals/moyock" component={MoyockRentalsPage} />
            <Route path="/rentals/currituck" component={CurrituckRentalsPage} />
            <Route path="/rentals/south-mills" component={SouthMillsRentalsPage} />
            <Route path="/rentals/camden" component={CamdenRentalsPage} />
            <Route path="/rentals/elizabeth-city" component={ElizabethCityRentalsPage} />

            {/* 404 Page */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  </HelmetProvider>
  );
}
