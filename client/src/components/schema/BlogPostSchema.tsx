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
        "streetAddress": "2810 George Washington Memorial Hwy",
        "addressLocality": "Gloucester Point",
        "addressRegion": "VA",
        "postalCode": "23072",
        "addressCountry": "US"
      },
      "telephone": "804-792-0234",
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
        "latitude": "37.2850625",
        "longitude": "-76.5074161"
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
