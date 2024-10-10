"use client";
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from "./components/button"
import { Input } from "./components/input"
import { Textarea } from "./components/textarea"
import { Mail, Phone, ArrowRight, Menu } from 'lucide-react'  // Ensure lucide-react is installed
import '../styles/globals.css' // Import Tailwind CSS
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { playfair } from './fonts'

const SeparationDivorcePage = dynamic(() => import('./separation-divorce/page'), { ssr: false });

const categories = [
  {
    title: "Getting Married",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#45B7D1" className="w-8 h-8 md:w-10 md:h-10">
        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM12 12.75a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        <path d="M1.5 4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V18a3 3 0 106 0V4.875C12 4.254 12.504 3.75 13.125 3.75h2.25c.621 0 1.125.504 1.125 1.125V18a4.5 4.5 0 11-9 0V4.875z" />
      </svg>
    ),
    color: "bg-blue-100"
  },
  {
    title: "Journey into Parenthood",  // Updated title
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD93D" className="w-8 h-8 md:w-10 md:h-10">
        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>
    ),
    color: "bg-yellow-100"
  },
  {
    title: "Getting Divorced",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#A364D9" className="w-8 h-8 md:w-10 md:h-10">
        <path fillRule="evenodd" d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z" clipRule="evenodd" />
      </svg>
    ),
    color: "bg-purple-100"
  },
]

const values = [
  { name: "Empathy", description: "We understand and share the feelings of our users." },
  { name: "Inclusivity", description: "We welcome and support all types of families and relationships." },
  { name: "Expertise", description: "Our advice is backed by professional knowledge and experience." },
  { name: "Trust", description: "We build and maintain the confidence of our users." },
  { name: "Support", description: "We're here to help at every stage of your journey." },
]

const mainArticle = {
  title: "Understanding the Divorce Process: A Step-by-Step Guide",
  description: "Navigate the complexities of divorce with our comprehensive guide, covering legal, emotional, and practical aspects of ending a marriage.",
  link: "/articles/divorce-process-guide",
  author: "Dr. Jennifer Smith",
  authorImage: "https://i.pravatar.cc/100?img=12",
  image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
}

const articles = [
  {
    title: "Navigating Financial Challenges",
    description: "Strategies for managing finances in relationships and families.",
    link: "/articles/financial-challenges",
    author: "Michael Chen",
    authorImage: "https://i.pravatar.cc/100?img=3",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Effective Co-Parenting Strategies",
    description: "Tips for successful co-parenting in various family situations.",
    link: "/articles/co-parenting-strategies",
    author: "Sarah Thompson",
    authorImage: "https://i.pravatar.cc/100?img=5",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Balancing Work and Family Life",
    description: "Techniques for maintaining a healthy work-life balance.",
    link: "/articles/work-life-balance",
    author: "Robert Williams",
    authorImage: "https://i.pravatar.cc/100?img=8",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
  },
  {
    title: "The Importance of Self-Care",
    description: "Understanding why self-care is crucial for healthy relationships.",
    link: "/articles/self-care-importance",
    author: "Lisa Brown",
    authorImage: "https://i.pravatar.cc/100?img=10",
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
  },
]

const handleButtonClick = () => {
  // Define what happens when the button is clicked
  console.log("Button clicked!");
};

export default function HomePage() {
  const router = useRouter();
  const [activeValue, setActiveValue] = useState(values[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (title: string) => {
    if (title === "Getting Divorced") {
      router.push('/separation-divorce-main');
    } else if (title === "Getting Married") {
      router.push('/getting-married');
    } else if (title === "Journey into Parenthood") {  // Updated condition
      router.push('/journey-into-parenthood');  // Updated route
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
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
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    href={
                      category.title === "Getting Divorced" ? "/separation-divorce-main" : 
                      category.title === "Getting Married" ? "/getting-married" :
                      category.title === "Journey into Parenthood" ? "/journey-into-parenthood" : "#"  // Updated condition and route
                    }
                    className="flex flex-col items-center group w-32 md:w-40"
                    onClick={() => handleCategoryClick(category.title)}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden text-[#0F5C5B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white py-4">
            <ul className="flex flex-col space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="px-4">
                  <Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="py-12 md:py-20 bg-gradient-to-r from-[#FFE8D6] to-[#FFD6BA]">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-[#0F5C5B]">
              Navigate Life&apos;s Relationships<br className="hidden md:inline" />with Expert Guidance
            </h1>
            <p className="text-lg md:text-2xl text-center mb-8 md:mb-12 text-gray-600 max-w-3xl mx-auto">
              From first dates to family milestones, we&apos;re here to support you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={
                      category.title === "Getting Divorced" ? "/separation-divorce-main" : 
                      category.title === "Getting Married" ? "/getting-married" :
                      category.title === "Journey into Parenthood" ? "/journey-into-parenthood" : "#"  // Updated condition and route
                    }
                    className="flex flex-col items-center group w-32 md:w-40"
                    onClick={() => handleCategoryClick(category.title)}
                  >
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${category.color} flex items-center justify-center mb-2 md:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      {category.icon}
                    </div>
                    <span className="text-sm md:text-lg font-semibold text-center group-hover:text-[#0F5C5B] transition-colors">{category.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-[#0F5C5B]">Latest Articles</h2>
            
            {/* Main Article */}
            <div className="mb-12">
              <div className="bg-[#FFE8D6] rounded-lg overflow-hidden shadow-lg">
                <Image src={mainArticle.image} alt={mainArticle.title} width={1200} height={600} className="w-full h-64 md:h-80 object-cover" />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0F5C5B]">{mainArticle.title}</h3>
                  <p className="text-gray-600 mb-4">{mainArticle.description}</p>
                  <div className="flex items-center mb-4">
                    <Image src={mainArticle.authorImage} alt={mainArticle.author} width={40} height={40} className="rounded-full mr-3" />
                    <span className="text-sm text-gray-600">{mainArticle.author}</span>
                  </div>
                  <Link href={mainArticle.link}>
                    <Button className="w-full py-3 text-lg">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-[#FFE8D6] rounded-lg overflow-hidden shadow-lg">
                  <Image src={article.image} alt={article.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-[#0F5C5B]">{article.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{article.description}</p>
                    <div className="flex items-center mb-4">
                      <Image src={article.authorImage} alt={article.author} width={32} height={32} className="rounded-full mr-2" />
                      <span className="text-xs text-gray-600">{article.author}</span>
                    </div>
                    <Link href={article.link}>
                      <Button className="w-full text-sm py-2">Read More</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#0F5C5B] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-8">
                At Family Edition, we're dedicated to providing expert guidance and support for every stage of your relationship journey. From building strong foundations to navigating challenges, we're here to help you create lasting, fulfilling connections.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}