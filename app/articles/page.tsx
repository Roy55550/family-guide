import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* ... existing content ... */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/articles/communication-styles" className="article-card">
            <h3>Understanding Communication Styles</h3>
            {/* Add more details if needed */}
          </Link>
          <Link href="/articles/financial-challenges" className="article-card">
            <h3>Navigating Financial Challenges</h3>
            {/* Add more details if needed */}
          </Link>
          <Link href="/articles/co-parenting-strategies" className="article-card">
            <h3>Effective Co-Parenting Strategies</h3>
            {/* Add more details if needed */}
          </Link>
        </div>
      </section>
      {/* ... existing content ... */}
    </div>
  )
}