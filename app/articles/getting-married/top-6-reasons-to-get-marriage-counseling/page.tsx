import React from 'react';
import Top6ReasonsToGetMarriageCounselingArticle from './top-6-reasons-to-get-marriage-counseling';

function ArticleContent() {
  return (
    <div>
      <h1>Top 6 Reasons to Get Marriage Counseling</h1>
      {/* Rest of the article content */}
    </div>
  );
}

const ArticlePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFE8D6] py-8">
      <Top6ReasonsToGetMarriageCounselingArticle />
    </div>
  );
};

export default ArticlePage;