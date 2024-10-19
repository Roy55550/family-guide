import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, User, Calendar, Shield, Award, ThumbsUp, Heart, Users, CreditCard } from 'lucide-react'
import Button from '../components/button'
import { playfair } from '../fonts'

const subcategories = [
  {
    title: "Pregnancy Planning",
    description: "Get expert advice on preparing for pregnancy and starting your family.",
    icon: Heart,
  },
  {
    title: "Fertility Support",
    description: "Find resources and support for fertility challenges and treatments.",
    icon: Users,
  },
  {
    title: "Adoption Services",
    description: "Explore adoption options and get guidance through the process.",
    icon: Users,
  },
  {
    title: "Parenting Skills",
    description: "Learn essential parenting skills and techniques for raising happy, healthy children.",
    icon: Users,
  },
  {
    title: "Family Health",
    description: "Access resources for maintaining your family's physical and mental health.",
    icon: Heart,
  },
  {
    title: "Financial Planning",
    description: "Get advice on budgeting and financial planning for your growing family.",
    icon: CreditCard,
  },
]

const articles = [
  {
    title: "Preparing Your Home for a New Baby",
    excerpt: "Essential tips for creating a safe and welcoming environment for your newborn.",
    author: "Emma Johnson",
    date: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Navigating Fertility Treatments: What to Expect",
    excerpt: "A comprehensive guide to various fertility treatments and their processes.",
    author: "Dr. Michael Chen",
    date: "August 2, 2023",
    image: "https://images.unsplash.com/photo-1632053002434-b508f0cd6ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Balancing Work and Family: Tips for New Parents",
    excerpt: "Practical advice for managing your career while raising a young family.",
    author: "Sarah Thompson",
    date: "August 10, 2023",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
]

export default function growingYourFamilyPage() {
  return (
    <div className="min-h-screen bg-[#FFE8D6] text-gray-800 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20Edition%20logo-hhpVdqQJYG4AZwBjdYf2sqDVjmSnoY.jpeg"
              alt="Family Edition Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl md:text-3xl font-bold text-[#0F5C5B]">Family Edition</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Articles</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#0F5C5B] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>Expert Guidance for growing Your Family</h1>
              <p className="text-xl mb-8">Find support and resources for every stage of your family-building journey.</p>
              <Link href="/family-planning-quiz">
                <Button 
                  className="bg-white text-[#0F5C5B] hover:bg-gray-100 hover:text-[#0A4342] px-8 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Family Planning Quiz
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction & Trust-Building Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-center text-[#0F5C5B]`}>We're Here to Support Your Family-Building Journey</h2>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
              growing your family is an exciting and complex journey. We're here to guide you every step of the way, connecting you with trusted professionals and resources.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <div className="flex flex-col items-center">
                <Shield className="w-16 h-16 text-[#0F5C5B] mb-2" />
                <span className="text-sm font-semibold">Trusted Experts</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-16 h-16 text-[#0F5C5B] mb-2" />
                <span className="text-sm font-semibold">Certified Professionals</span>
              </div>
              <div className="flex flex-col items-center">
                <ThumbsUp className="w-16 h-16 text-[#0F5C5B] mb-2" />
                <span className="text-sm font-semibold">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Subcategories Section */}
        <section className="py-16 bg-[#FFE8D6]">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]`}>Find the Right Support for Every Aspect of Family Planning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg border border-gray-200">
                  <div className="mb-4">
                    <category.icon className="w-12 h-12 text-[#0F5C5B] mx-auto" />
                  </div>
                  <h3 className={`${playfair.className} text-xl font-bold mb-2 text-[#0F5C5B]`}>{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href="/family-planning-quiz">
                    <Button className="w-full bg-[#0F5C5B] text-white hover:bg-[#0A4342] transition-colors duration-300 rounded-full py-2 px-4">
                      Explore Options
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]`}>Resources for growing Your Family</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-[#FFE8D6] rounded-lg shadow-lg overflow-hidden">
                  <Image src={article.image} alt={article.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#0F5C5B]">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="mr-2 h-4 w-4" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/family-planning-articles">
                <Button className="bg-[#0F5C5B] text-white hover:bg-[#0A4342] px-8 py-4 rounded-full text-lg font-bold">
                  Explore More Family Planning Resources
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0F5C5B] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Family Edition</h3>
              <p className="text-sm">Empowering families at every stage of life.</p>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
            &copy; 2023 Family Edition. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
