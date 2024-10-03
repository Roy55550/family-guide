import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, User, Calendar } from 'lucide-react'
import { Button } from "@/components/button"

const articles = [
  {
    title: "Understanding the Divorce Process: A Step-by-Step Guide",
    excerpt: "Navigate the complexities of divorce with our comprehensive guide, covering legal, emotional, and practical aspects of ending a marriage.",
    author: "Sarah Thompson",
    date: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
  },
  {
    title: "Co-Parenting After Divorce: Strategies for Success",
    excerpt: "Learn effective strategies for maintaining a healthy co-parenting relationship after divorce, ensuring your children's well-being remains the top priority.",
    author: "Dr. Michael Chen",
    date: "August 2, 2023",
    image: "https://images.unsplash.com/photo-1543342384-1f1350e27861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Financial Planning During Divorce: Protecting Your Future",
    excerpt: "Discover essential financial planning tips to help you navigate the economic challenges of divorce and secure your financial future.",
    author: "Emily Johnson, CFP",
    date: "August 10, 2023",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
]

const serviceCategories = [
  {
    title: "Top 10 Divorce Therapists",
    description: "Expert therapists specializing in helping individuals and couples navigate the emotional challenges of divorce.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Top 10 Divorce Attorneys",
    description: "Experienced lawyers handling complex divorce cases with a focus on fair settlements and client advocacy.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Top 10 Divorce Financial Advisors",
    description: "Financial experts specializing in divorce financial planning and asset division strategies.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Service Providers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-[#0F5C5B] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Separation and Divorce Support</h1>
              <p className="text-xl mb-8">Navigate this challenging time with expert guidance and resources tailored to your needs.</p>
              <Link href="/separation-divorce">
                <Button 
                  variant="ghost"
                  className="bg-white text-[#0F5C5B] hover:bg-gray-100 hover:text-[#0A4342] px-6 py-3 rounded-full text-lg"
                >
                  Get Personalized Recommendations
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]">Top Service Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-[#FFE8D6] rounded-lg shadow-lg overflow-hidden">
                  <Image src={category.image} alt={category.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#0F5C5B]">{category.title}</h3>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    <Button className="w-full bg-[#0F5C5B] text-white hover:bg-[#0A4342] transition-colors duration-300">
                      View List
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
              <Button className="text-[#0F5C5B] border-[#0F5C5B] hover:bg-[#0F5C5B] hover:text-white transition-colors duration-300">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#0F5C5B] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Personalized Support?</h2>
              <p className="text-xl mb-8">Answer a few questions to get tailored recommendations for divorce support services.</p>
              <Link href="/separation-divorce">
                <Button 
                  variant="ghost"
                  className="bg-white text-[#0F5C5B] hover:bg-gray-100 hover:text-[#0A4342] px-6 py-3 rounded-full text-lg"
                >
                  Start Questionnaire
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