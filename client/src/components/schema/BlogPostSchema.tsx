interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  image?: string;
  imageAlt?: string;
  author?: string;
  keywords?: string;
}

export default function BlogPostSchema({
  title,
  description,
  url,
  publishDate,
  image = "https://chesapeakegolfcarts.com/attached_assets/Chesapeake%20Golf%20Carts_1764173360595.png",
  imageAlt = "Chesapeake Golf Carts",
  author = "Chesapeake Golf Carts",
  keywords = ""
}: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "caption": imageAlt
    },
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://chesapeakegolfcarts.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chesapeakegolfcarts.com/attached_assets/Chesapeake%20Golf%20Carts_1764173360595.png"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chesapeake Golf Carts",
      "url": "https://chesapeakegolfcarts.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chesapeakegolfcarts.com/attached_assets/Chesapeake%20Golf%20Carts_1764173360595.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1234 Battlefield Blvd",
        "addressLocality": "Chesapeake",
        "addressRegion": "VA",
        "postalCode": "23322",
        "addressCountry": "US"
      },
      "telephone": "1-844-844-6638",
      "email": "sales@chesapeakegolfcarts.com"
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "url": url,
    "keywords": keywords,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Blog",
      "name": "Chesapeake Golf Carts Blog",
      "url": "https://chesapeakegolfcarts.com/blog"
    },
    "about": {
      "@type": "Thing",
      "name": "Golf Carts",
      "description": "Electric golf carts for sale, rental, and service in Chesapeake, Virginia"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Chesapeake, Virginia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chesapeake",
        "addressRegion": "VA",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.7682",
        "longitude": "-76.2875"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
