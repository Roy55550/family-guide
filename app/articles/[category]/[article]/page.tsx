import ArticleContent from '../../../components/ArticleContent';

interface ArticleData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  image: string;
  faqItems: { question: string; answer: string; }[];
}

// This function would typically fetch data from an API or database
async function getArticleData(category: string, article: string): Promise<ArticleData> {
  // Placeholder data - replace with actual data fetching logic
  return {
    title: article.replace('-', ' '),
    author: 'John Doe',
    date: 'June 1, 2023',
    readTime: '5 min read',
    content: 'This is the article content...',
    image: '/path-to-image.jpg',
    faqItems: [
      { question: 'Sample Question 1', answer: 'Sample Answer 1' },
      { question: 'Sample Question 2', answer: 'Sample Answer 2' },
    ]
  };
}

export async function generateStaticParams() {
  // This should be replaced with actual data fetching logic
  const categories = ['getting-married', 'Growing-family', 'divorce-process-guide'];
  const articles = {
    'getting-married': ['top-6-reasons-to-get-marriage-counseling', 'top-8-wedding-preparation-checklist-tips'],
    'Growing-family': ['how-to-manage-stress-preparing-for-parenthood', 'preparing-for-parenthood-strengthen-your-bond', 'essential-estate-planning-tips-for-couples-roundup'],
    'divorce-process-guide': ['how-to-navigate-divorce-smoothly', 'top-5-co-parenting-tips', 'how-to-access-financial-help-for-divorce']
  };

  const params = [];
  for (const category of categories) {
    for (const article of articles[category as keyof typeof articles]) {
      params.push({ category, article });
    }
  }

  return params;
}

const ArticlePage = async ({ params }: { params: { category: string; article: string } }) => {
  const articleData = await getArticleData(params.category, params.article);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <ArticleContent articleData={articleData} category={params.category} />
      </div>
    </div>
  );
};

export default ArticlePage;
