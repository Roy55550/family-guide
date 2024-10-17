import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import Button from '../components/button'

const CommunicationStylesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Button
          variant="ghost"
          className="mb-6 hover:text-[#0A4342]"
        >
          <Link href="/articles" className="flex items-center">
            <ArrowLeft className="mr-2" /> Back to Articles
          </Link>
        </Button>

        {/* ... (rest of the component) */}
      </main>
    </div>
  );
};

export default CommunicationStylesPage;
