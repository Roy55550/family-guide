"use client";

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { playfair } from '../../../fonts'
import { ArrowLeft, User, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import Button from '../../../components/button'

interface FAQItem {
  question: string
  answer: string
}

const Accordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`${playfair.className} text-xl font-bold text-[#0F5C5B]`}>{item.question}</h3>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="p-4 bg-gray-50">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

const ArticlePage: React.FC = () => {
  // ... existing code ...

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/category" className="inline-flex items-center text-[#0F5C5B] hover:underline mb-6">
            <ArrowLeft className="mr-2" /> Back to Category
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg p-4 md:p-8">
            <Image 
              src="/path-to-image.jpg" 
              alt="Article image"
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />

            <h1 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4 text-[#0F5C5B]`}>Article Title</h1>
            
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <User className="mr-2 h-4 w-4" />
              <span className="mr-4">Author Name</span>
              <Clock className="mr-2 h-4 w-4" />
              <span className="mr-4">Date</span>
              <span>Read Time</span>
            </div>

            {/* ... article content ... */}

            <h2 className={`${playfair.className} text-2xl font-bold mb-4 text-[#0F5C5B]`}>FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Accordion key={index} item={item} />
              ))}
            </div>

            {/* ... sources ... */}
          </article>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
