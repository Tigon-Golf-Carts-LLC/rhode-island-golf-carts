import VehicleDetailPage from "@/components/VehicleDetailPage";
import evolutionD5Ranger6PlusImage from "@assets/EVOLUTIOND5RANGER6PLUS_1751893159004_1753135350619.jpg";

export default function EvolutionD5Ranger6PlusPage() {
  return (
    <VehicleDetailPage
      vehicleName="EVOLUTION D5 RANGER 6 PLUS"
      brand="EVOLUTION"
      series="D5 RANGER"
      price="$11,595"
      image={evolutionD5Ranger6PlusImage}
      seoTitle="EVOLUTION D5 RANGER 6 PLUS - Premium 6-Seat Golf Cart | Rhode Island Golf Carts"
      seoDescription="Experience the EVOLUTION D5 RANGER 6 PLUS electric golf cart in Atlantic County, PA. Extended 6-passenger seating with premium comfort and enhanced features."
      seoKeywords="EVOLUTION D5 RANGER 6 PLUS, 6-seat golf cart, extended seating, ARhode Island Golf Carts"
      canonicalUrl="https://rhodeislandgolfcarts.com/vehicles/evolution-d5-ranger-6-plus"
      seats="6"
      range="40 miles"
      topSpeed="25 mph"
      driveType="Rear-Wheel Drive"
      features={[
        "Extended 6-Passenger Seating",
        "Premium Comfort Features",
        "Enhanced Performance",
        "Superior Build Quality",
        "Advanced Electrical System",
        "Comfortable Interior",
        "Reliable Operation",
        "Quality Craftsmanship"
      ]}
      description="Extended 6-passenger seating with premium comfort and enhanced features. The EVOLUTION D5 RANGER 6 PLUS provides spacious family transportation with reliable performance for Rhode Island adventures."
      tigoUrl="https://rhodeislandgolfcarts.com/evolution/d5-ranger/6-plus/"
    />
  );
}
