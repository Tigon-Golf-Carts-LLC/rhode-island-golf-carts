import { type ContactForm, type Vehicle } from "@shared/schema";
import { vehicles } from "@/data/vehicles";
import { applyAssetBaseToVehicles } from "@/lib/assets";

interface VehicleFilters {
  brand?: string;
  category?: string;
}

export async function fetchVehicles(filters: VehicleFilters = {}): Promise<Vehicle[]> {
  const { brand, category } = filters;
  let results = applyAssetBaseToVehicles(vehicles);

  if (brand) {
    results = results.filter((vehicle) => vehicle.brand.toLowerCase() === brand.toLowerCase());
  }

  if (category) {
    results = results.filter((vehicle) => vehicle.category.toLowerCase() === category.toLowerCase());
  }

  return results;
}

export async function fetchVehicleById(id: string): Promise<Vehicle | null> {
  const normalized = applyAssetBaseToVehicles(vehicles);
  return normalized.find((vehicle) => vehicle.id === id) ?? null;
}

export async function fetchVehiclesByBrand(brand: string): Promise<Vehicle[]> {
  return applyAssetBaseToVehicles(
    vehicles.filter((vehicle) => vehicle.brand.toLowerCase() === brand.toLowerCase()),
  );
}

export async function fetchFeaturedVehicles(count = 6): Promise<Vehicle[]> {
  return applyAssetBaseToVehicles(vehicles.slice(0, count));
}

export async function submitContactForm(_form: ContactForm): Promise<{ success: boolean; message: string }>
{
  // GitHub Pages hosting is static-only, so we simply resolve the submission locally
  return {
    success: true,
    message: "Thanks for reaching out! We'll contact you soon.",
  };
}
