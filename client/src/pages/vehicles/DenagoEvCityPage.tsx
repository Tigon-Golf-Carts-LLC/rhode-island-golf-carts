import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvCityImage from "@assets/DENAGONEVCITY_1751893047472_1753135231313.jpg";

export default function DenagoEvCityPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV CITY"
      brand="DENAGO"
      series="EV CITY"
      price="$15,000"
      image={denagoEvCityImage}
      seoTitle="DENAGO EV CITY"
      seoDescription="Discover the DENAGO EV CITY electric golf cart featuring street legal ready urban mobility with sleek design and efficient performance in Rhode Island, VA. Call 804-792-0234."
      seoKeywords="DENAGO EV CITY, urban electric golf cart, street legal golf cart, Rhode Island, Virginia, electric vehicle"
      canonicalUrl="https://rhodeislandgolfcarts.com/vehicles/denago-ev-city"
      seats="2"
      range="40 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Street Legal Ready",
        "LED Lighting Package",
        "Premium Interior Design",
        "Urban Mobility Optimized",
        "Efficient Battery System",
        "Sleek Modern Styling",
        "Digital Display",
        "Comfortable Seating"
      ]}
      description="Urban mobility redefined with sleek design and efficient performance. The DENAGO EV CITY is built for street legal operation with premium features perfect for Rhode Island's urban environments."
      tigoUrl="https://rhodeislandgolfcarts.com/denago-ev/city/"
    />
  );
}