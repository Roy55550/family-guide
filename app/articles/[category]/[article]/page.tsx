// Import necessary modules and components
import { Metadata } from 'next';
import ArticleContent from '../../../components/ArticleContent';
import { notFound } from 'next/navigation';
import HowToAccessFinancialHelpForDivorce from '../../divorce-process-guide/how-to-access-financial-help-for-divorce/page';
import HowToStreamlineDivorceProcess from '../../divorce-process-guide/how-to-streamline-the-divorce-process/page';
import Top6ReasonsToGetMarriageCounseling from '../../getting-married/top-6-reasons-to-get-marriage-counseling/page';
import JointAccounts from '../../getting-married/joint-accounts/page';
import Top5CoParentingTips from '../../divorce-process-guide/top-5-co-parenting-tips';
import EssentialEstatePlanningTipsForCouplesRoundup from '../../journey-into-parenthood/essential-estate-planning-tips-for-couples-roundup/page';

// Define the structure of the article data
interface ArticleData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  image: string;
  faqItems: { question: string; answer: string; }[];
}

// Function to fetch article data based on category and article name
async function getArticleData(category: string, article: string): Promise<ArticleData | null> {
  // Placeholder data - replace with actual data fetching logic
  const articles = {
    'getting-married': ['top-6-reasons-to-get-marriage-counseling', 'top-8-wedding-preparation-checklist-tips', 'joint-accounts'],
    'journey-into-parenthood': ['how-to-manage-stress-preparing-for-parenthood', 'preparing-for-parenthood-strengthen-your-bond', 'essential-estate-planning-tips-for-couples-roundup'],
    'divorce-process-guide': ['how-to-navigate-divorce-smoothly', 'top-5-co-parenting-tips', 'how-to-access-financial-help-for-divorce', 'how-to-streamline-the-divorce-process']
  };

  // Check if the article exists in the specified category
  if (!articles[category as keyof typeof articles]?.includes(article)) {
    return null;
  }

  // Return the article data
  return {
    title: article.replace(/-/g, ' '),
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

// Function to generate static parameters for the articles
export async function generateStaticParams() {
  return [
    { category: 'divorce-process-guide', article: 'how-to-access-financial-help-for-divorce' },
    { category: 'divorce-process-guide', article: 'how-to-streamline-the-divorce-process' },
    { category: 'getting-married', article: 'top-6-reasons-to-get-marriage-counseling' },
    { category: 'getting-married', article: 'joint-accounts' },
    { category: 'divorce-process-guide', article: 'top-5-co-parenting-tips' },
    { category: 'journey-into-parenthood', article: 'essential-estate-planning-tips-for-couples-roundup' },
  ];
}

// Function to generate metadata for the article page
export async function generateMetadata({ params }: { params: { category: string; article: string } }): Promise<Metadata> {
  const articleData = await getArticleData(params.category, params.article);
  if (!articleData) {
    return {
      title: 'Article Not Found',
    };
  }
  return {
    title: articleData.title,
    description: `Read about ${articleData.title} by ${articleData.author}`,
  };
}

// Main component to render the article page
export default function Article({ params }: { params: { category: string; article: string } }) {
  const { category, article } = params;

  switch (`${category}/${article}`) {
    case 'divorce-process-guide/how-to-access-financial-help-for-divorce':
      return <HowToAccessFinancialHelpForDivorce />;
    case 'divorce-process-guide/how-to-streamline-the-divorce-process':
      return <HowToStreamlineDivorceProcess />;
    case 'getting-married/top-6-reasons-to-get-marriage-counseling':
      return <Top6ReasonsToGetMarriageCounseling />;
    case 'getting-married/joint-accounts':
      return <JointAccounts />;
    case 'divorce-process-guide/top-5-co-parenting-tips':
      return <Top5CoParentingTips />;
    case 'journey-into-parenthood/essential-estate-planning-tips-for-couples-roundup':
      return <EssentialEstatePlanningTipsForCouplesRoundup />;
    default:
      notFound();
  }
}
