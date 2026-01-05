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
  name = "Rhode Island Golf Carts Blog",
  description = "Expert golf cart news, buying guides, tips, and insights from Rhode Island's premier golf cart dealer serving Rhode Island, Virginia.",
  url = "https://rhodeislandgolfcarts.com/blog",
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
      "name": "Rhode Island Golf Carts",
      "url": "https://rhodeislandgolfcarts.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png"
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
      "email": "sales@rhodeislandgolfcarts.com"
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
      "description": "Electric golf carts for sale, rental, and service in Rhode Island, Virginia and Rhode Island"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Rhode Island, Virginia",
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
