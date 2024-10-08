import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, User, Calendar, Shield, Award, ThumbsUp, Heart, Scale, DollarSign, Home, Users, CreditCard } from 'lucide-react'
import Button from '../components/button'
import { playfair } from '../fonts'

const subcategories = [
  {
    title: "Emotional Support",
    description: "Connect with compassionate therapists to help you navigate emotional challenges.",
    icon: Heart,
  },
  {
    title: "Divorce Lawyers and Mediators",
    description: "Find expert legal guidance for a fair and smooth process.",
    icon: Scale,
  },
  {
    title: "Financial Support",
    description: "Plan for a stable future with experienced financial advisors.",
    icon: DollarSign,
  },
  {
    title: "Real Estate and Property Division",
    description: "Navigate property division with professional support.",
    icon: Home,
  },
  {
    title: "Child Custody and Co-Parenting",
    description: "Get expert help to protect your children's interests and well-being.",
    icon: Users,
  },
  {
    title: "Financing Options",
    description: "Explore loans and other financing solutions to support your divorce process.",
    icon: CreditCard,
  },
]

const articles = [
  {
    title: "How to Choose Between a Divorce Lawyer and Mediator",
    excerpt: "Understand the key differences and decide which option is best for your situation.",
    author: "Sarah Thompson",
    date: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
  },
  {
    title: "Managing Your Finances During a Divorce",
    excerpt: "Essential tips for protecting your financial future and navigating the complexities of asset division.",
    author: "Michael Chen",
    date: "August 2, 2023",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Tips for Co-Parenting After Separation",
    excerpt: "Learn effective strategies for maintaining a healthy co-parenting relationship and ensuring your children's well-being.",
    author: "Emily Johnson",
    date: "August 10, 2023",
    image: "https://images.unsplash.com/photo-1543342384-1f1350e27861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
]

export default function SeparationAndDivorcePage() {
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
              <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>Get Expert Guidance Through Your Divorce Process</h1>
              <p className="text-xl mb-8">Find the right professionals for legal, financial, and emotional support, customized to your unique situation.</p>
              <Link href="/separation-divorce">
                <Button 
                  className="bg-white text-[#0F5C5B] hover:bg-gray-100 hover:text-[#0A4342] px-8 py-4 rounded-full text-lg font-bold"
                >
                  Start Your Divorce Support Quiz
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Content Section - Moved up */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]`}>Resources to Help You Navigate Divorce</h2>
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
              <Link href="/divorce-resources">
                <Button className="bg-[#0F5C5B] text-white hover:bg-[#0A4342] px-8 py-4 rounded-full text-lg font-bold">
                  Explore More Divorce Resources
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction & Trust-Building Section */}
        <section className="py-16 bg-[#FFE8D6]">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-center text-[#0F5C5B]`}>We're Here to Help at Every Stage of the Divorce Process</h2>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
              Divorce is complex. We're here to guide you every step of the way, connecting you with trusted professionals who understand your needs.
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]`}>Find the Right Support for Every Aspect of Your Divorce</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg border border-gray-200">
                  <div className="mb-4">
                    <category.icon className="w-12 h-12 text-[#0F5C5B] mx-auto" />
                  </div>
                  <h3 className={`${playfair.className} text-xl font-bold mb-2 text-[#0F5C5B]`}>{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href="/separation-divorce">
                    <Button className="w-full bg-[#0F5C5B] text-white hover:bg-[#0A4342] transition-colors duration-300 rounded-full py-2 px-4">
                      Explore Options
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0F5C5B] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Family Edition</h3>
              <p className="text-sm">Empowering relationships at every stage of life.</p>
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