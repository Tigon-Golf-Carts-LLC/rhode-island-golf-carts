import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Heart, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { PIKE_COUNTY_MUNICIPALITIES, type Municipality } from "../data/pikeCountyMunicipalities";
import heroImage from "@assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function NewAboutPage() {
  const teamMembers = [
    {
      name: "Michael Thompson",
      role: "Owner & General Manager",
      experience: "15+ years in recreational vehicle sales",
      description: "Passionate about providing Gloucester County with the best golf cart experience."
    },
    {
      name: "Sarah Martinez",
      role: "Service Manager",
      experience: "10+ years certified technician",
      description: "Expert in DENAGO and EVOLUTION service and maintenance."
    },
    {
      name: "David Chen",
      role: "Sales Specialist",
      experience: "8+ years in golf cart sales",
      description: "Helping customers find their perfect electric vehicle match."
    },
    {
      name: "Lisa Johnson",
      role: "Parts & Accessories",
      experience: "12+ years parts expertise",
      description: "Ensuring you get genuine parts and quality accessories."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make puts our customers' needs and satisfaction first."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We partner with premium brands and maintain the highest service standards."
    },
    {
      icon: Target,
      title: "Local Focus",
      description: "Proud to serve Gloucester County with personalized, community-focused service."
    },
    {
      icon: Heart,
      title: "Family Values",
      description: "We treat every customer like family and build lasting relationships."
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Gloucester Golf Carts"
        description="Discover Virginia's most trusted golf cart dealer serving Gloucester County and surrounding areas with premium DENAGO and EVOLUTION vehicles since 2008. Call 804-792-0234."
        keywords="Gloucester VA golf carts, about us, golf cart dealer Virginia, DENAGO dealer, EVOLUTION dealer"
        canonicalUrl="https://gloucestergolfcarts.com/about"
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_UxqLO1InQtGjDCklOHe0fA_Dz9OzmyNQhyGya_DTODF2A_1756144059396.jpeg"
        ogType="website"
        ogImageWidth={1200}
        ogImageHeight={800}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat overflow-hidden" style={getHeroBackgroundStyle("about")}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              About Gloucester Golf Carts
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
              Since 2010, we've been Gloucester County's premier destination for premium golf carts, 
              exceptional service, and unmatched customer care. Serving all municipalities 
              across eastern Virginia with pride and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white shadow-lg">
                  Contact Our Team
                </Button>
              </Link>
              <Link href="/inventory">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100 shadow-lg">
                  View Our Inventory
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2008 in Gloucester County, Virginia, Gloucester Golf Carts began with a simple mission: 
                    to provide high-quality golf carts and exceptional service to customers throughout Coastal Virginia's 
                    most vibrant and historic regions.
                  </p>
                  <p>
                    Gloucester County stands as one of Virginia's most beautiful and historic regions, encompassing 
                    charming communities from Gloucester Point and Gloucester Courthouse to Yorktown and Williamsburg, 
                    with scenic waterfront areas along the York River and Chesapeake Bay.
                  </p>
                  <p>
                    Our county holds a special place in American history, founded in 1651 as one of the original shires of Virginia. 
                    Today, Gloucester County is renowned for its historic sites, championship golf courses, beautiful waterfront communities, 
                    and outdoor recreation enthusiasts who appreciate premium recreational vehicles.
                  </p>
                  <p>
                    With proximity to major routes including Route 17 and George Washington Memorial Highway, 
                    and some of Coastal Virginia's most beautiful waterfront and golf course communities, Gloucester County attracts residents who 
                    demand excellence in every aspect of their lives—including their golf cart experience.
                  </p>
                  <p>
                    From Gloucester Point to Hayes, from Yorktown to Williamsburg and surrounding areas, we proudly serve 
                    Gloucester County and neighboring communities with premium EVOLUTION and DENAGO golf carts, understanding that our customers expect nothing 
                    less than the finest quality and service.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-theme-orange">15+</div>
                    <div className="text-sm text-gray-600">Years Serving Gloucester County</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-theme-orange">500+</div>
                    <div className="text-sm text-gray-600">Satisfied Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-theme-orange">15</div>
                    <div className="text-sm text-gray-600">Municipalities Served</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.5!2d-76.5074161!3d37.2850625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDE3JzA2LjIiTiA3NsKwMzAnMjYuNyJX!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gloucester County Service Area Map"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Gloucester Golf Carts Service</h3>
                  <div className="grid md:grid-cols-1 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-theme-orange">Gloucester Golf Carts</h4>
                      <p className="text-gray-600">2810 George Washington Memorial Hwy, Gloucester Point, VA 23072</p>
                      <p className="text-gray-600">Serving all Gloucester County, VA</p>
                      <p className="text-gray-700">804-792-0234</p>
                      <p className="text-gray-600">info@gloucestergolfcarts.com</p>
                      <p className="text-gray-600">sales@tigongolfcarts.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-theme-orange" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">Experienced professionals dedicated to your satisfaction</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="outline" className="mt-2">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-theme-orange font-medium mb-2">{member.experience}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
              <p className="text-lg text-gray-600">Proudly serving all of Gloucester County, Virginia</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Gloucester & Yorktown Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Gloucester, Gloucester Point, Yorktown, and surrounding York County communities</p>
                  <Badge variant="secondary">5 Municipalities</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Gloucester County Central</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Hayes, Gloucester Courthouse, Ordinary, Achilles, and central Gloucester areas</p>
                  <Badge variant="secondary">5 Municipalities</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Williamsburg & Peninsula</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Williamsburg, Hampton, Newport News, and James City County communities</p>
                  <Badge variant="secondary">5 Municipalities</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Complete Gloucester County Coverage</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-600">
                {PIKE_COUNTY_MUNICIPALITIES.map((municipality: Municipality, index: number) => (
                  <div key={index} className="text-center py-2">
                    <Link href={municipality.url}>
                      <span className="text-theme-orange font-medium hover:text-orange-600 cursor-pointer transition-colors">
                        {municipality.name} {municipality.type}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience the Gloucester Golf Carts Difference?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who trust us for their golf cart needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Contact Us Today
                </Button>
              </Link>
              <a href="tel:804-792-0234">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                  Call 804-792-0234
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-theme-orange mb-2">804-792-0234</p>
                  <p className="text-gray-600">Available 7 days a week</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-theme-orange mb-2">info@gloucestergolfcarts.com</p>
                  <p className="text-lg font-medium text-theme-orange mb-2">sales@tigongolfcarts.com</p>
                  <p className="text-gray-600">Quick response guaranteed</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700 text-sm">
                    <p>Mon-Fri: 9AM-5PM</p>
                    <p>Sat: 9AM-5PM</p>
                    <p>Sun: By Appointment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Service Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">All 15 Gloucester County municipalities plus delivery service</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}