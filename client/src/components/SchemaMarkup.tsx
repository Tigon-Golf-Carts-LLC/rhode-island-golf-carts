interface SchemaMarkupProps {
  schema: object;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema generators for different page types
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gloucester Golf Carts",
  "alternateName": "GGC",
  "description": "Premier golf cart dealer in Gloucester, Virginia specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals.",
  "url": "https://gloucestergolfcarts.com",
  "logo": "https://gloucestergolfcarts.com/attached_assets/Pike%20County%20Golf%20Carts%20(2)_1756138898367.png",
  "image": [
    "https://gloucestergolfcarts.com/attached_assets/Pike%20County%20Golf%20Carts%20(2)_1756138898367.png",
    "https://gloucestergolfcarts.com/attached_assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png"
  ],
  "telephone": "804-210-6567",
  "email": "sales@tigongolfcarts.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6109 George Washington Memorial Hwy",
    "addressLocality": "Gloucester",
    "addressRegion": "VA",
    "postalCode": "23061",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Virginia"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 37.4093,
      "longitude": -76.5275
    },
    "geoRadius": "50000"
  },
  "foundingDate": "2008",
  "numberOfEmployees": "15-25",
  "slogan": "Professional golf cart services delivered to your community",
  "brand": ["DENAGO", "EVOLUTION"],
  "sameAs": [
    "https://www.facebook.com/TigonGolfCartsGloucesterPoint/",
    "https://www.youtube.com/@TIGONGolfCartsGloucesterPoint",
    "https://www.pinterest.com/tigongolfcarts/gloucester-point-virginia/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Sales and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Electric Golf Carts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair"
        }
      }
    ]
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gloucestergolfcarts.com/#localbusiness",
  "name": "Gloucester Golf Carts",
  "description": "Premier golf cart dealer serving Gloucester Virginia and surrounding areas with electric vehicle sales, service, and rentals.",
  "url": "https://gloucestergolfcarts.com",
  "telephone": "804-210-6567",
  "email": "sales@tigongolfcarts.com",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "openingHours": [
    "Mo-Fr 09:00-17:00",
    "Sa 09:00-17:00"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6109 George Washington Memorial Hwy",
    "addressLocality": "Gloucester",
    "addressRegion": "VA",
    "postalCode": "23061",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.4093,
    "longitude": -76.5275
  },
  "areaServed": [
    "Gloucester", "Gloucester Point", "Gloucester Courthouse", "Yorktown", "Hayes", "Seaford",
    "Ordinary", "Ware Neck", "Wicomico", "Achilles", "Mathews", "Williamsburg",
    "Poquoson", "Hampton", "Newport News", "York County"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Products and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "DENAGO Electric Golf Carts",
          "brand": "DENAGO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EVOLUTION Golf Carts",
          "brand": "EVOLUTION"
        }
      }
    ]
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://gloucestergolfcarts.com/#website",
  "name": "Gloucester Golf Carts",
  "description": "Official website for Gloucester Golf Carts - Virginia's premier electric golf cart dealer",
  "url": "https://gloucestergolfcarts.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://gloucestergolfcarts.com/inventory?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Gloucester Golf Carts"
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateProductSchema = (vehicle: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `https://gloucestergolfcarts.com/vehicles/${vehicle.id}#product`,
  "name": vehicle.name,
  "description": vehicle.description,
  "brand": {
    "@type": "Brand",
    "name": vehicle.brand
  },
  "category": vehicle.category,
  "image": vehicle.images?.map((img: string) => `https://gloucestergolfcarts.com${img}`) || [],
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Gloucester Golf Carts",
      "telephone": "804-210-6567",
      "email": "sales@tigongolfcarts.com"
    },
    "url": `https://gloucestergolfcarts.com/vehicles/${vehicle.id}`
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "23",
    "bestRating": "5",
    "worstRating": "1"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Top Speed",
      "value": vehicle.specifications?.topSpeed
    },
    {
      "@type": "PropertyValue", 
      "name": "Range",
      "value": vehicle.specifications?.range
    },
    {
      "@type": "PropertyValue",
      "name": "Seating Capacity",
      "value": vehicle.specifications?.seatingCapacity
    },
    {
      "@type": "PropertyValue",
      "name": "Battery Type",
      "value": vehicle.specifications?.batteryType
    }
  ],
  "manufacturer": {
    "@type": "Organization",
    "name": vehicle.brand
  }
});

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Golf Cart Services",
  "description": "Comprehensive golf cart sales, service, repair, and rental services in Gloucester, Virginia",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Gloucester Golf Carts"
  },
  "areaServed": {
    "@type": "State",
    "name": "Virginia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Sales",
          "description": "New and used electric golf cart sales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Golf Cart Rentals",
          "description": "Daily, weekly, and monthly golf cart rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair",
          "description": "Professional maintenance and repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Parts",
          "description": "Genuine parts and accessories"
        }
      }
    ]
  }
});

export const generateOfferCatalogSchema = (vehicles: any[]) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Golf Cart Inventory",
  "description": "Complete inventory of electric golf carts available for sale",
  "itemListElement": vehicles.map(vehicle => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": vehicle.name,
      "brand": vehicle.brand,
      "image": vehicle.images?.[0] ? `https://gloucestergolfcarts.com${vehicle.images[0]}` : undefined
    },
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": `https://gloucestergolfcarts.com/vehicles/${vehicle.id}`
  }))
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Gloucester Golf Carts",
  "description": "Get in touch with Gloucester Golf Carts for sales, service, rentals, and support",
  "url": "https://gloucestergolfcarts.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Gloucester Golf Carts",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "804-210-6567",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "sales@tigongolfcarts.com",
        "contactType": "sales",
        "areaServed": "US"
      }
    ]
  }
});

export const generateTownPageSchema = (townName: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Golf Carts in ${townName}`,
  "description": `Professional golf cart sales, service, and rentals delivered to ${townName}, Gloucester, Virginia`,
  "url": `https://gloucestergolfcarts.com/towns/${townName.toLowerCase().replace(/\s+/g, '-')}`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Gloucester Golf Carts",
    "areaServed": {
      "@type": "City",
      "name": townName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Gloucester County",
        "containedInPlace": {
          "@type": "State",
          "name": "Virginia"
        }
      }
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gloucestergolfcarts.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": `${townName} Golf Carts`,
        "item": `https://gloucestergolfcarts.com/towns/${townName.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  }
});