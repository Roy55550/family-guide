"use client";

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, User, Calendar, Shield, Award, ThumbsUp, Heart, Home, Users, DollarSign, Gift, Clipboard } from 'lucide-react'
import Button from '../components/button'
import { playfair, inter } from '../fonts'

const subcategories = [
  {
    title: "Venue Selection",
    description: "Find the perfect location for your dream wedding ceremony and reception.",
    icon: Home,
  },
  {
    title: "Guest List Management",
    description: "Organize and manage your guest list efficiently for a smooth wedding day.",
    icon: Users,
  },
  {
    title: "Budget Planning",
    description: "Create and stick to a realistic wedding budget that fits your needs.",
    icon: DollarSign,
  },
  {
    title: "Wedding Planning Services",
    description: "Connect with professional wedding planners to bring your vision to life.",
    icon: Clipboard,
  },
  {
    title: "Officiants",
    description: "Find the right officiant to perform your wedding ceremony.",
    icon: Heart,
  },
  {
    title: "Marriage Counseling",
    description: "Prepare for a strong marriage with pre-wedding counseling services.",
    icon: Users,
  },
  {
    title: "Retirement Planning",
    description: "Start planning your financial future together with expert advice.",
    icon: DollarSign,
  },
  {
    title: "Prenuptial Agreements",
    description: "Learn about and create prenuptial agreements to protect both partners.",
    icon: Shield,
  },
]

const articles = [
  {
    title: "Top 6 Reasons to Get Marriage Counseling",
    excerpt: "Discover why marriage counseling can be beneficial for couples at any stage of their relationship.",
    author: "Dr. Emily Carter",
    date: "September 1, 2023",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    link: "/articles/getting-married/top-6-reasons-to-get-marriage-counseling",
  },
  
  {
    title: "Top 8 Wedding Preparation Checklist Tips",
    excerpt: "Start wedding planning at least 12 months early with a clear budget, and secure venues and vendors promptly for the best choices. Embrace flexibility for unexpected challenges and cherish each moment, focusing on what truly matters for a joyful celebration.",
    author: "Family Edition Team",
    date: "July 1, 2023",
    image: "/images/Top 8 Wedding Preparation Checklist Tips/image4.jpg",
    link: "/articles/getting-married/top-8-wedding-preparation-checklist-tips"
  },
  {
    title: "Joint vs Separate Accounts: Comprehensive Review",
    excerpt: "Explore the pros and cons of joint and separate accounts for couples. Understand how these financial decisions can impact your relationship and communication.",
    author: "Family Edition Team",
    date: "October 10, 2024",
    image: "/images/joint-accounts/image1.jpg",
    link: "/articles/getting-married/joint-accounts"
  }
]

export default function GettingMarriedPage() {
  return (
    <div className={`min-h-screen bg-[#FFE8D6] text-gray-800 ${inter.className}`}>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family Edition logo-hhpVdqQJYG4AZwBjdYf2sqDVjmSnoY.jpeg"
              alt="Family Edition Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl md:text-3xl font-bold text-[#0F5C5B]">Family Edition</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/getting-married" className="text-gray-600 hover:text-[#0F5C5B] transition-colors border-b-4" style={{ borderColor: 'rgba(10, 67, 66, 0.7)' }}>
                  Getting Married
                </Link>
              </li>
              <li>
                <Link href="/journey-into-parenthood" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Journey into Parenthood</Link>
              </li>
              <li>
                <Link href="/separation-divorce-main" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Separation & Divorce</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">About</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#0F5C5B] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>Plan Your Perfect Wedding and Marriage</h1>
              <p className="text-xl mb-8">Get expert guidance and resources for every aspect of your wedding planning and marriage preparation.</p>
              <Link href="/wedding-planning-quiz">
                <Button 
                  className="bg-white text-[#0F5C5B] hover:bg-gray-100 hover:text-[#0A4342] px-8 py-4 rounded-full text-lg font-bold"
                  variant="ghost"
                >
                  Start Your Wedding Planning Quiz
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]`}>Resources for Planning Your Wedding and Marriage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-[#FFE8D6] rounded-lg shadow-lg overflow-hidden">
                  <Image src={article.image} alt={article.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#0F5C5B]">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="mr-2 h-4 w-4" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <Link href={article.link}>
                      <Button className="w-full bg-[#0F5C5B] text-white hover:bg-[#0A4342] transition-colors duration-300 rounded-full py-2 px-4">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/wedding-planning-articles">
                <Button className="bg-[#0F5C5B] text-white hover:bg-[#0A4342] px-8 py-4 rounded-full text-lg font-bold">
                  Explore More Wedding Planning Resources
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction & Trust-Building Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-center text-[#0F5C5B]`}>We're Here to Support Your Journey to Marriage</h2>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
              Planning a wedding and preparing for marriage can be overwhelming. We're here to guide you every step of the way, connecting you with trusted professionals and resources.
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
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]`}>Find the Right Support for Every Aspect of Your Wedding and Marriage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg border border-gray-200">
                  <div className="mb-4">
                    <category.icon className="w-12 h-12 text-[#0F5C5B] mx-auto" />
                  </div>
                  <h3 className={`${playfair.className} text-xl font-bold mb-2 text-[#0F5C5B]`}>{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href="/wedding-planning-quiz">
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
