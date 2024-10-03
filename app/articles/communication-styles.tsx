import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Button } from "../components/button"

export default function CommunicationStyles() {
  const post = {
    title: "Understanding the Impact of Communication Styles on Relationships",
    author: "Dr. Emily Johnson",
    date: "August 15, 2023",
    readTime: "8 min read",
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    content: `
      <p>Effective communication is the cornerstone of any healthy relationship. Whether it's a romantic partnership, a friendship, or a family bond, the way we express ourselves and listen to others can significantly impact the quality of our connections. In this article, we'll explore different communication styles and their effects on relationships, providing insights on how to improve your interactions with loved ones.</p>

      <h2>The Four Basic Communication Styles</h2>

      <p>Psychologists have identified four primary communication styles:</p>

      <ol>
        <li><strong>Assertive:</strong> Direct and respectful, expressing needs and feelings clearly while considering others'.</li>
        <li><strong>Aggressive:</strong> Forceful and dominant, often disregarding others' feelings or rights.</li>
        <li><strong>Passive:</strong> Avoiding conflict by suppressing one's own needs or feelings.</li>
        <li><strong>Passive-Aggressive:</strong> Indirectly expressing negative feelings, often through subtle actions or comments.</li>
      </ol>

      <p>Understanding these styles is the first step in improving communication within your relationships.</p>

      <h2>The Impact of Communication Styles on Relationships</h2>

      <p>Each communication style can have profound effects on the dynamics of a relationship:</p>

      <ul>
        <li><strong>Assertive communication</strong> tends to foster trust, respect, and mutual understanding. It allows for open dialogue and problem-solving.</li>
        <li><strong>Aggressive communication</strong> can lead to fear, resentment, and defensive behavior in others, damaging the relationship over time.</li>
        <li><strong>Passive communication</strong> might result in unmet needs, built-up frustration, and a lack of intimacy or connection.</li>
        <li><strong>Passive-aggressive communication</strong> often creates confusion, tension, and mistrust, as true feelings are not openly expressed.</li>
      </ul>

      <h2>Improving Your Communication Skills</h2>

      <p>To enhance your relationships through better communication:</p>

      <ol>
        <li>Practice active listening, giving your full attention to the speaker.</li>
        <li>Use "I" statements to express your feelings without blaming others.</li>
        <li>Be mindful of your body language and tone of voice.</li>
        <li>Seek to understand before being understood.</li>
        <li>Learn to express your needs and boundaries clearly and respectfully.</li>
      </ol>

      <p>Remember, effective communication is a skill that can be learned and improved over time. With practice and patience, you can significantly enhance the quality of your relationships and create deeper, more meaningful connections with those around you.</p>
    `,
    tags: ["Communication", "Relationships", "Personal Growth"],
  }

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
              <li><Link href="/articles" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Articles</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <Button
          variant="ghost"
          className="mb-6 hover:text-[#0A4342]"
        >
          <Link href="/articles" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </Button>

        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F5C5B] mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
              <div className="flex items-center mr-4 mb-2">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center mr-4 mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center mb-2">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-[#0F5C5B] mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-[#FFE8D6] text-[#0F5C5B] px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-[#0F5C5B] text-white py-8 mt-12">
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