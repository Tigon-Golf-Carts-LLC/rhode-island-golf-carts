import { Link } from "wouter";
import { Calendar, ArrowRight, BookOpen, ImageIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import BlogSchema from "@/components/schema/BlogSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { blogPosts } from "@/data/blogPosts";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Golf Cart Blog | Chesapeake Golf Carts - News, Tips & Guides"
        description="Read the latest golf cart news, buying guides, tips, and insights from Chesapeake Golf Carts. Expert advice for Hampton Roads golf cart owners and shoppers."
        keywords="golf cart blog, Chesapeake VA golf carts, golf cart tips, buying guide, electric golf carts, DENAGO, EVOLUTION, Hampton Roads"
        canonicalUrl="https://chesapeakegolfcarts.com/blog"
        ogType="website"
      />
      <BlogSchema
        name="Chesapeake Golf Carts Blog"
        description="Expert golf cart news, buying guides, tips, and insights from Chesapeake's premier golf cart dealer serving Hampton Roads, Virginia."
        url="https://chesapeakegolfcarts.com/blog"
        posts={blogPosts.map(post => ({
          title: post.h1,
          url: post.canonicalUrl,
          publishDate: post.publishDate
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://chesapeakegolfcarts.com/" },
          { name: "Blog", url: "https://chesapeakegolfcarts.com/blog" }
        ]}
      />

      <section
        className="relative bg-gradient-to-br from-[#0e2e55] via-blue-800 to-[#0e2e55] text-white py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={getHeroBackgroundStyle("blog")}
      >
        <div className="absolute inset-0 bg-[#0e2e55]/70"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="bg-[#ff6100] hover:bg-[#ff6100]/90 text-white mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Golf Cart Insights
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Chesapeake Golf Carts Blog
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert tips, buying guides, and the latest news about electric golf carts in Hampton Roads. 
            Your resource for making informed golf cart decisions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                data-testid={`blog-card-${post.id}`}
              >
                <div 
                  className="h-48 bg-gradient-to-br from-[#0e2e55] to-blue-700 relative overflow-hidden"
                  role="img"
                  aria-label={post.heroImageAlt}
                  title={post.heroImageAlt}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                      <ImageIcon className="w-10 h-10 text-white/40 mx-auto mb-2" />
                      <p className="text-white/60 text-xs line-clamp-2">{post.heroImageAlt}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <Badge className="bg-[#ff6100] text-white text-xs">
                      Golf Cart Guide
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.publishDate)}
                  </div>
                  <CardTitle className="text-lg leading-tight line-clamp-2 hover:text-[#0e2e55] transition-colors">
                    <Link href={`/blog/${post.slug}`} data-testid={`blog-link-${post.id}`}>
                      {post.h1}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </CardDescription>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#ff6100] hover:text-[#0e2e55] font-semibold transition-colors"
                    data-testid={`read-more-${post.id}`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0e2e55] mb-4">
            Ready to Find Your Perfect Golf Cart?
          </h2>
          <p className="text-gray-600 mb-8">
            Visit our Chesapeake showroom or contact us today to explore our complete inventory 
            of DENAGO and EVOLUTION electric golf carts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inventory"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#ff6100] text-white font-semibold rounded-lg hover:bg-[#ff6100]/90 transition-colors"
              data-testid="blog-cta-inventory"
            >
              View Inventory
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0e2e55] text-[#0e2e55] font-semibold rounded-lg hover:bg-[#0e2e55] hover:text-white transition-colors"
              data-testid="blog-cta-contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
