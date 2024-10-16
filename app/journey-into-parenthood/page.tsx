import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, User, Calendar, Shield, Award, ThumbsUp, Heart, Users, CreditCard, BookOpen, Apple, Briefcase, School, Activity, Brain } from 'lucide-react'
import Button from '../components/button'
import { playfair, inter } from '../fonts'

const subcategories = [
  {
    title: "Family Planning",
    description: "Get expert advice on planning and preparing for your family's future.",
    icon: Users,
  },
  {
    title: "Fertility Resources",
    description: "Access comprehensive information and support for fertility-related concerns.",
    icon: Heart,
  },
  {
    title: "Adoption Consultants",
    description: "Connect with experienced professionals to guide you through the adoption process.",
    icon: Users,
  },
  {
    title: "Surrogacy Information",
    description: "Learn about surrogacy options and legal considerations.",
    icon: Users,
  },
  {
    title: "Wills and Trusts",
    description: "Secure your family's future with expert legal advice on estate planning.",
    icon: Briefcase,
  },
  {
    title: "Saving for College",
    description: "Explore strategies and resources for funding your child's education.",
    icon: CreditCard,
  },
  {
    title: "Education Resources",
    description: "Discover tools and information to support your child's learning journey.",
    icon: BookOpen,
  },
  {
    title: "Schools & Programs",
    description: "Find the right educational environment for your child's needs.",
    icon: School,
  },
  {
    title: "Extracurricular Activities",
    description: "Explore enriching activities to support your child's growth and interests.",
    icon: Activity,
  },
  {
    title: "Special Needs Support",
    description: "Access resources and guidance for families with special needs children.",
    icon: Heart,
  },
  {
    title: "Child Development",
    description: "Understand and support your child's physical, emotional, and cognitive growth.",
    icon: Brain,
  },
  {
    title: "Health & Nutrition",
    description: "Learn about maintaining your family's health through proper nutrition and care.",
    icon: Apple,
  },
]

const articles = [
  {
    title: "Preparing for Parenthood: Strengthen Your Bond",
    excerpt: "Learn how to set realistic expectations, prioritize postnatal recovery, and build a strong co-parenting foundation as you prepare for the journey of parenthood.",
    author: "Family Edition Team",
    date: "July 15, 2024",
    image: "/images/Preparing for Parenthood: Strengthen Your Bond/image1.jpg",
    link: "/articles/Growing-family/preparing-for-parenthood-strengthen-your-bond"
  },
  {
    title: "How to Manage Stress Preparing for Parenthood",
    excerpt: "Learn effective strategies for recognizing early signs of stress, practicing self-care, building a support network, and balancing work and relationships as you prepare for parenthood.",
    author: "Family Edition Team",
    date: "July 1, 2023",
    image: "/images/How to Manage Stress Preparing for Parenthood/image1.jpg",
    link: "/articles/Growing-family/how-to-manage-stress-preparing-for-parenthood"
  },
  {
    title: "Preparing Your Home for a New Baby",
    excerpt: "Essential tips for creating a safe and welcoming environment for your newborn.",
    author: "Emma Johnson",
    date: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Navigating the First Year of Parenthood",
    excerpt: "A comprehensive guide to surviving and thriving in your first year as new parents.",
    author: "Dr. Michael Chen",
    date: "August 2, 2023",
    image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Balancing Work and Family: Tips for New Parents",
    excerpt: "Practical advice for managing your career while raising a young family.",
    author: "Sarah Thompson",
    date: "August 10, 2023",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
]

export default function JourneyIntoParenthoodPage() {
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
              <li><Link href="/" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Home</Link></li>
              <li><Link href="/getting-married" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Getting Married</Link></li>
              <li><Link href="/journey-into-parenthood" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Journey into Parenthood</Link></li>
              <li><Link href="/separation-divorce-main" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Separation & Divorce</Link></li>
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
              <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>Your Journey into Parenthood</h1>
              <p className="text-xl mb-8">Find support and resources for every stage of your parenting journey.</p>
              <Link href="/parenting-quiz">
                <Button 
                  className="bg-white text-[#0F5C5B] hover:bg-gray-100 hover:text-[#0A4342] px-8 py-4 rounded-full text-lg font-bold"
                >
                  Start Your Parenting Journey Quiz
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]`}>Resources to Help You Navigate Parenthood</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-[#FFE8D6] rounded-lg shadow-lg overflow-hidden">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#0F5C5B]">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="mr-2 h-4 w-4" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    {article.link && (
                      <Link href={article.link} passHref>
                        <Button className="w-full mt-4 bg-[#0F5C5B] text-white hover:bg-[#0A4342] transition-colors duration-300 rounded-full py-2 px-4">
                          Read More
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction & Trust-Building Section */}
        <section className="py-16 bg-gray-50"> {/* Changed to bg-gray-50 */}
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-center text-[#0F5C5B]`}>We're Here to Support Your Parenting Journey</h2>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
              Becoming a parent is an exciting and challenging journey. We're here to guide you every step of the way, connecting you with trusted resources and expert advice.
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
                <span className="text-sm font-semibold">Parent Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Subcategories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-[#0F5C5B]`}>Find the Right Support for Every Aspect of Parenthood</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg border border-gray-200">
                  <div className="mb-4">
                    <category.icon className="w-12 h-12 text-[#0F5C5B] mx-auto" />
                  </div>
                  <h3 className={`${playfair.className} text-xl font-bold mb-2 text-[#0F5C5B]`}>{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href="/parenting-quiz">
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
