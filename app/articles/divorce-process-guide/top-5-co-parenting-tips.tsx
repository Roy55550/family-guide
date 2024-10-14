"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { playfair } from '../../fonts';
import { ArrowLeft, User, Clock, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import Button from '../../components/button';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            className="flex justify-between items-center w-full p-4 text-left"
            onClick={() => toggleItem(index)}
          >
            <h3 className={`${playfair.className} text-xl font-bold text-[#0F5C5B]`}>{item.question}</h3>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Top5CoParentingTipsArticle: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What is the most important aspect of co-parenting?",
      answer: "The children's needs should come first in co-parenting. Their stability, security, and happiness are the most important aspects of life after divorce. Much has been written on how to provide emotional support to them, but the main thing is to ensure that they feel it is okay to express anything and everything they are feeling during this traumatic time."
    },
    {
      question: "How can co-parents communicate effectively?",
      answer: "To achieve clear and effective communication, co-parents must use the tools of good communication, such as active listening, and must say what they really mean in a way that the other parent can easily understand. These techniques can help prevent misunderstandings and keep the main focus of conversation on the child. Good communication starts with establishing some basic guidelines between co-parents and using tools that make sense for a two-household system."
    },
    {
      question: "Why is consistency in routines important in co-parenting?",
      answer: "Routines give kids a sense of security and a feeling of normalcy in their lives. When children have been through something as traumatic as their parents splitting up, anything that can help them feel stable is a good thing. That makes it even more important for kids to have and follow routines in both their custodial and non-custodial homes after an upheaval."
    },
    {
      question: "How do flexibility and boundaries contribute to successful co-parenting?",
      answer: "Clear yet flexible boundaries enable shared parenting to work smoothly. When co-parents establish respectful limits that are centered on the children's well-being, the kids reap the benefits. And when both parents make necessary and occasional adjustments that allow for the kind of parenting that their particular situation demands, they also set a peaceful, stable precedent for both them and their children."
    },
    {
      question: "How can co-parents support mental health and show unity?",
      answer: "The mental health of co-parents and their children is promoted when co-parents understand the co-parenting anxiety that many people feel, communicate openly with one another, seek professional help when necessary, and present a united front. Co-parents who do these things create a good-enough environment conducive to their child's emotional well-being."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/separation-divorce-main" className="inline-flex items-center text-[#0F5C5B] hover:underline mb-6">
            <ArrowLeft className="mr-2" /> Back to Divorce Process Guide
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <Image 
              src="/images/Top 5 co parenting tips/top 5 image1.jpg" 
              alt="A serene park scene with two smiling parents interacting with children, surrounded by lush greenery and playful activities, conveying harmony and cooperation."
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />

            <h1 className={`${playfair.className} text-4xl font-bold mb-4 text-[#0F5C5B]`}>Top 5 Co-Parenting Tips Compilation</h1>
            
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <User className="mr-2 h-4 w-4" />
              <span className="mr-4">Family Edition Team</span>
              <Clock className="mr-2 h-4 w-4" />
              <span className="mr-4">June 20, 2023</span>
              <span>10 min read</span>
            </div>

            <p className="mb-6 italic">Prioritize children's needs by maintaining consistent routines and effective communication between co-parents. Support mental health and show unity for a nurturing environment that benefits children's well-being.</p>

            <h2 className={`${playfair.className} text-2xl font-bold mb-4 text-[#0F5C5B]`}>1. Prioritize Children's Needs</h2>
            <p className="mb-6">The multifaceted path of co-parenting requires that the children come first, and it seems to me that this might even be what co-parenting "means." Co-parents committing to this principle will work just as hard on the children's emotional health as they would on the children's physical health—probably harder, because "helping" emotionally tends to be much less comfortable for most people than "helping" physically.</p>
            <p className="mb-6">A successful co-parenting relationship is built on mutual respect and a sort of professional partnership that enables two people to work together toward a common goal: the child's happiness. Co-parents don't have to like each other or even be friends, but they do have to respect each other. That space has to exist, at minimum, for communication to happen. Beyond that, respected co-parents treat each other with kindness and decency and get down to business. Their business is making sure the child's life is more or less stable and secure, day to day and year to year.</p>
            <p className="mb-6">The <a href="https://rooparenting.com/co-parenting" className="text-blue-600 hover:underline">importance of a structured co-parenting plan</a> cannot be overstated. These plans detail many aspects of life, such as daily responsibilities, holiday schedules, and even medical care. They are not "optional" in any way, shape, or form. In fact, if a structured plan isn't followed, it can create a sort of chaos in a child's life that can have long-lasting effects. The life skills a child learns before the age of 12 make a huge difference in the type of adult he or she will eventually become.</p>

            <h2 className={`${playfair.className} text-2xl font-bold mb-4 text-[#0F5C5B]`}>2. Effective Communication</h2>
            <p className="mb-6">Successful co-parenting thrives on open, meaningful communication—a cornerstone of healthy relationships and effective parenting. Clear dialogue eases anxiety and ensures everyone, especially children, feels secure. But great communication takes more than casual conversations.</p>
            <p className="mb-6">Active listening is key. Instead of just hearing, it focuses on truly understanding the other person. Another useful technique is using "I" statements instead of "you" statements—like saying, "I feel concerned when schedules change without notice," instead of "You stress me out when you do that." This reduces defensiveness and keeps conversations productive.</p>

            <h2 className={`${playfair.className} text-2xl font-bold mb-4 text-[#0F5C5B]`}>3. Consistent Routines</h2>
            <p className="mb-6">It is vital to give children the kind of stability and security that a consistent routine provides, particularly in a co-parenting arrangement. When a child's behavior is managed through rules and routines that are essentially the same in both homes, the child is better able to feel comfortable and know what is expected.</p>

            <h2 className={`${playfair.className} text-2xl font-bold mb-4 text-[#0F5C5B]`}>4. Flexibility and Boundaries</h2>
            <p className="mb-6">On the path of dual parenting, two crucial qualities make up a recipe for success: flexibility and boundary maintenance. These characteristics allow shared parenting to run smoothly, to "gracefully" circumvent the many contingent subplots that can easily arise.</p>

            <Image 
              src="/images/Top 5 co parenting tips/top 5 image5.jpg" 
              alt="Two smiling parents in a peaceful park setting, discussing co-parenting strategies with a colorful playground in the background, surrounded by trees and sunlight"
              width={600}
              height={300}
              className="rounded-lg mb-6"
            />

            <h2 className={`${playfair.className} text-2xl font-bold mb-4 text-[#0F5C5B]`}>5. Support Mental Health and Show Unity</h2>
            <p className="mb-6">To ensure an effective co-parenting relationship, it is crucial to promote not just the mental health of co-parents but also the appearance of unity between them. This sense of togetherness, even if largely performative, creates a stable environment for the children. Unity, or the appearance of it, between the co-parents—especially in front of the children—fosters a co-created space of visual and mental well-being for everyone involved.</p>

            <Image 
              src="/images/Top 5 co parenting tips/top 5 image4.jpg" 
              alt="Two smiling co-parents standing together in a sunny park, holding hands while their children play in the background. The scene conveys unity and harmony, with vibrant green trees and a clear blue sky."
              width={600}
              height={300}
              className="rounded-lg mb-6"
            />

            <div className="mt-8 mb-6">
              <Link href="/co-parenting-tools">
                <Button className="w-full bg-[#0F5C5B] text-white hover:bg-[#0A4342] px-8 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Need co-parenting tools? Click here
                  <ArrowRight className="ml-2 h-5 w-5 inline animate-pulse" />
                </Button>
              </Link>
            </div>

            <h2 className={`${playfair.className} text-2xl font-bold mb-4 text-[#0F5C5B]`}>FAQ</h2>
            <FAQSection items={faqItems} />

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                Here's a brief list of the sources referenced in the article "Top 5 Co-Parenting Tips Compilation":
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li><a href="https://talkingparents.com/blog/managing-co-parenting-anxiety" className="text-blue-600 hover:underline">Talking Parents Blog: Managing Co-Parenting Anxiety</a></li>
                <li><a href="https://www.verywellmind.com/co-parenting-what-it-is-and-how-to-make-it-work-7197870" className="text-blue-600 hover:underline">Verywell Mind: Co-Parenting – What It Is and How to Make It Work</a></li>
                <li><a href="https://psychcentral.com/relationships/co-parenting-boundaries" className="text-blue-600 hover:underline">Psych Central: Co-Parenting Boundaries</a></li>
                <li><a href="https://mentalhealthcenterkids.com/blogs/articles/what-is-co-parenting" className="text-blue-600 hover:underline">Mental Health Center for Kids: What Is Co-Parenting</a></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Top5CoParentingTipsArticle;