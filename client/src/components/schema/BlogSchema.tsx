interface BlogSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  posts?: Array<{
    title: string;
    url: string;
    publishDate: string;
  }>;
}

export default function BlogSchema({
  name = "Chesapeake Golf Carts Blog",
  description = "Expert golf cart news, buying guides, tips, and insights from Chesapeake's premier golf cart dealer serving Hampton Roads, Virginia.",
  url = "https://chesapeakegolfcarts.com/blog",
  posts = []
}: BlogSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": name,
    "description": description,
    "url": url,
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
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": post.title,
          "url": post.url,
          "datePublished": post.publishDate
        }
      }))
    },
    "about": {
      "@type": "Thing",
      "name": "Golf Carts",
      "description": "Electric golf carts for sale, rental, and service in Chesapeake, Virginia and Hampton Roads"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Chesapeake, Virginia",
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
