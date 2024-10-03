import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Button } from "../../components/button"

export default function DivorceProcessGuide() {
  const post = {
    title: "Understanding the Divorce Process: A Step-by-Step Guide",
    author: "Dr. Jennifer Smith",
    date: "June 15, 2023",
    readTime: "10 min read",
    heroImage: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
    content: `
      <p class="text-xl mb-6">Going through a divorce is never easy. It's emotionally taxing, legally complex, and can be overwhelming. But understanding the process can help ease the stress. This step-by-step guide will walk you through the key stages of divorce so you know what to expect and how to prepare.</p>

      <h2 class="text-2xl font-bold text-[#0F5C5B] mt-8 mb-4">1. Decide if Divorce is the Right Option</h2>
      <p>Divorce is a significant decision that should not be taken lightly. Before initiating the process, it's essential to reflect on your relationship, consider counseling, and evaluate whether separation is truly the best solution for both parties.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Key Questions to Ask:</h3>
      <ul class="list-disc pl-6 mb-4">
        <li>Have you explored all options to save the marriage?</li>
        <li>Is this a mutual decision, or is one party initiating it?</li>
        <li>Are there children involved, and have their needs been considered?</li>
      </ul>

      <h2 class="text-2xl font-bold text-[#0F5C5B] mt-8 mb-4">2. Understand the Legal Grounds for Divorce</h2>
      <p>Different states have different rules when it comes to divorce. You may need to establish grounds for divorce, whether it's a no-fault divorce (such as irreconcilable differences) or based on specific reasons (like adultery or abandonment).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Types of Divorce:</h3>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>No-Fault Divorce:</strong> Most common, where neither spouse is blamed for the breakdown of the marriage.</li>
        <li><strong>Fault-Based Divorce:</strong> Requires one spouse to prove the other's fault, such as abuse or infidelity.</li>
      </ul>

      <h2 class="text-2xl font-bold text-[#0F5C5B] mt-8 mb-4">3. File a Petition for Divorce</h2>
      <p>The divorce process begins with one spouse, the petitioner, filing a divorce petition with the court. This document outlines the desire for divorce and the legal reasons (if applicable).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">What the Petition Includes:</h3>
      <ul class="list-disc pl-6 mb-4">
        <li>Identification of both spouses.</li>
        <li>Grounds for divorce.</li>
        <li>Any requests regarding child custody, support, or property division.</li>
      </ul>
      <p>After filing, the petition must be served to the other spouse (the respondent) who then has a set period to reply.</p>

      <h2 class="text-2xl font-bold text-[#0F5C5B] mt-8 mb-4">4. Resolve Key Issues (Child Custody, Support, and Property)</h2>
      <p>Once the petition is filed, the next step is to resolve key issues, which can often be the most contentious part of the divorce.</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Child Custody:</strong> Courts prioritize the best interests of the child, often leaning toward joint custody unless there are safety concerns.</li>
        <li><strong>Child Support:</strong> Both parents are typically required to contribute financially to the child's well-being based on income.</li>
        <li><strong>Property Division:</strong> Assets and debts are divided either through mutual agreement or by court ruling, depending on state laws (community property vs. equitable distribution).</li>
      </ul>
      <p>If both parties agree on these issues, the divorce can be uncontested and resolved quickly. If not, it may go to mediation or trial.</p>

      <h2 class="text-2xl font-bold text-[#0F5C5B] mt-8 mb-4">5. Attend Court Hearings (if Necessary)</h2>
      <p>In some cases, divorces are resolved outside of court through negotiation or mediation. However, if disputes cannot be settled, the case may proceed to trial.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Court Process:</h3>
      <ul class="list-disc pl-6 mb-4">
        <li>Both parties present their cases regarding unresolved issues.</li>
        <li>A judge will make the final decision on property division, child custody, and support.</li>
      </ul>
      <p>It's always advisable to have legal representation during this phase, as navigating the courtroom alone can be overwhelming.</p>

      <h2 class="text-2xl font-bold text-[#0F5C5B] mt-8 mb-4">6. Finalize the Divorce (Decree of Dissolution)</h2>
      <p>Once all issues are resolved, either through mutual agreement or court ruling, the divorce becomes final with the issuance of a divorce decree. This document legally ends the marriage and outlines the terms of the settlement, including custody, support, and property division.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Key Takeaway:</h3>
      <p>Once the decree is issued, both parties are legally required to adhere to the terms. Non-compliance can result in legal penalties.</p>
    `,
    tags: ["Divorce", "Legal Process", "Family Law"],
  }

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
              <li><Link href="/" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Home</Link></li>
              <li><Link href="/articles" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Articles</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#0F5C5B] transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <Link href="/articles">
          <Button
            variant="ghost"
            className="mb-6 text-[#0F5C5B] hover:text-[#0A4342]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>

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
            <div className="mt-8 mb-6">
              <Link href="/separation-divorce">
                <Button className="w-full py-3 text-lg rounded-full">
                  Want to better understand your options? Start here
                </Button>
              </Link>
            </div>
            <div className="pt-6 border-t border-gray-200">
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