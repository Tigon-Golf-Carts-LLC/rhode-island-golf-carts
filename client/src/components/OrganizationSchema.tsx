import { useEffect } from "react";

interface OrganizationSchemaProps {
  pageType?: "home" | "about" | "contact" | "services";
}

export default function OrganizationSchema({ pageType = "home" }: OrganizationSchemaProps) {
  useEffect(() => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gloucester Golf Carts",
      "description": "Premier golf cart dealership in Gloucester, Virginia specializing in electric golf carts, sales, service, rentals, and financing.",
      "url": "https://gloucestergolfcarts.com",
      "logo": "https://gloucestergolfcarts.com/attached_assets/Pike County Golf Carts (2)_1756138898367.png",
      "image": "https://gloucestergolfcarts.com/attached_assets/Pike County Golf Carts (2)_1756138898367.png",
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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.4093",
        "longitude": "-76.5275"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-17:00"
      ],
      "serviceArea": {
        "@type": "AdministrativeArea",
        "name": "Gloucester County, Virginia"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Golf Cart Services & Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Denago Electric Golf Carts",
              "category": "Electric Golf Carts"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Evolution Electric Golf Carts",
              "category": "Electric Golf Carts"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Sales",
              "category": "Sales Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Rentals",
              "category": "Rental Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Maintenance & Repair",
              "category": "Maintenance Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Financing",
              "category": "Financial Service"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/TigonGolfCartsGloucesterPoint/",
        "https://www.youtube.com/@TIGONGolfCartsGloucesterPoint",
        "https://www.pinterest.com/tigongolfcarts/gloucester-point-virginia/"
      ]
    };

    // Add page-specific schema
    let structuredData = baseStructuredData;

    if (pageType === "about") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "foundingDate": "2015",
        "numberOfEmployees": "15-25"
      } as any;
    } else if (pageType === "contact") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "804-210-6567",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      } as any;
    } else if (pageType === "services") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "provider": {
          "@type": "Organization",
          "name": "Gloucester Golf Carts"
        }
      } as any;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-organization]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-organization", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-organization]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [pageType]);

  return null;
}