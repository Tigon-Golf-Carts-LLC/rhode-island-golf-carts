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
  "name": "Rhode Island Golf Carts",
  "alternateName": "CGC",
  "description": "Premier golf cart dealer in Rhode Island, Virginia specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals.",
  "url": "https://rhodeislandgolfcarts.com",
  "logo": "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png",
  "image": [
    "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png",
    "https://rhodeislandgolfcarts.com/attached_assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png"
  ],
  "telephone": "804-792-0234",
  "email": "sales@rhodeislandgolfcarts.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2810 George Washington Memorial Hwy",
    "addressLocality": "Gloucester Point",
    "addressRegion": "VA",
    "postalCode": "23072",
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
      "latitude": 37.2850625,
      "longitude": -76.5074161
    },
    "geoRadius": "50000"
  },
  "foundingDate": "2008",
  "numberOfEmployees": "15-25",
  "slogan": "Professional golf cart services delivered to your community",
  "brand": ["DENAGO", "EVOLUTION"],
  "sameAs": [
    "https://www.facebook.com/Rhode IslandGolfCarts/",
    "https://www.youtube.com/@Rhode IslandGolfCarts",
    "https://www.pinterest.com/chesapeakegolfcarts/"
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
  "@id": "https://rhodeislandgolfcarts.com/#localbusiness",
  "name": "Rhode Island Golf Carts",
  "description": "Premier golf cart dealer serving Rhode Island Virginia and surrounding areas with electric vehicle sales, service, and rentals.",
  "url": "https://rhodeislandgolfcarts.com",
  "telephone": "804-792-0234",
  "email": "sales@rhodeislandgolfcarts.com",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "openingHours": [
    "Mo-Fr 09:00-17:00",
    "Sa 09:00-17:00"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2810 George Washington Memorial Hwy",
    "addressLocality": "Gloucester Point",
    "addressRegion": "VA",
    "postalCode": "23072",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.2850625,
    "longitude": -76.5074161
  },
  "areaServed": [
    "Rhode Island", "Norfolk", "Rhode Island", "Portsmouth", "Suffolk",
    "Hampton", "Newport News", "Rhode Island", "Great Bridge", "Deep Creek",
    "Greenbrier", "Western Branch", "South Norfolk", "Hickory", "Indian River"
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
  "@id": "https://rhodeislandgolfcarts.com/#website",
  "name": "Rhode Island Golf Carts",
  "description": "Official website for Rhode Island Golf Carts - Virginia's premier electric golf cart dealer",
  "url": "https://rhodeislandgolfcarts.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rhodeislandgolfcarts.com/inventory?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rhode Island Golf Carts"
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
  "@id": `https://rhodeislandgolfcarts.com/vehicles/${vehicle.id}#product`,
  "name": vehicle.name,
  "description": vehicle.description,
  "brand": {
    "@type": "Brand",
    "name": vehicle.brand
  },
  "category": vehicle.category,
  "image": vehicle.images?.map((img: string) => `https://rhodeislandgolfcarts.com${img}`) || [],
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Rhode Island Golf Carts",
      "telephone": "804-792-0234",
      "email": "sales@rhodeislandgolfcarts.com"
    },
    "url": `https://rhodeislandgolfcarts.com/vehicles/${vehicle.id}`
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
  "description": "Comprehensive golf cart sales, service, repair, and rental services in Rhode Island, Virginia",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Rhode Island Golf Carts"
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
      "image": vehicle.images?.[0] ? `https://rhodeislandgolfcarts.com${vehicle.images[0]}` : undefined
    },
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": `https://rhodeislandgolfcarts.com/vehicles/${vehicle.id}`
  }))
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Rhode Island Golf Carts",
  "description": "Get in touch with Rhode Island Golf Carts for sales, service, rentals, and support",
  "url": "https://rhodeislandgolfcarts.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Rhode Island Golf Carts",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "804-792-0234",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "sales@rhodeislandgolfcarts.com",
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
  "description": `Professional golf cart sales, service, and rentals delivered to ${townName}, Rhode Island, Virginia`,
  "url": `https://rhodeislandgolfcarts.com/towns/${townName.toLowerCase().replace(/\s+/g, '-')}`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Rhode Island Golf Carts",
    "areaServed": {
      "@type": "City",
      "name": townName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "City of Rhode Island",
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
        "item": "https://rhodeislandgolfcarts.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": `${townName} Golf Carts`,
        "item": `https://rhodeislandgolfcarts.com/towns/${townName.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  }
});
