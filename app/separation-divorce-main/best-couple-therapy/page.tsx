import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Check } from 'lucide-react';
import { playfair } from '../../fonts';
import Button from '../../components/button';

const therapyOptions = [
  {
    type: "AI",
    priceRange: "$10-100/month",
    winner: {
      name: "ReGain",
      description: "AI-powered relationship counseling available 24/7.",
      features: [
        "Personalized AI counselor",
        "Unlimited messaging",
        "Affordable pricing",
        "Available anytime, anywhere"
      ],
      link: "https://www.regain.us/"
    },
    runnerUps: [
      { name: "Lasting", link: "https://getlasting.com/" },
      { name: "Relish", link: "https://hellorelish.com/" },
      { name: "Paired", link: "https://www.paired.com/" }
    ]
  },
  {
    type: "Online",
    priceRange: "$200/month",
    winner: {
      name: "Talkspace",
      description: "Professional online therapy with licensed therapists.",
      features: [
        "Licensed therapists",
        "Video, audio, and text messaging",
        "Flexible scheduling",
        "Specialized couples therapy"
      ],
      link: "https://www.talkspace.com/"
    },
    runnerUps: [
      { name: "BetterHelp", link: "https://www.betterhelp.com/" },
      { name: "Amwell", link: "https://amwell.com/" },
      { name: "ReGain", link: "https://www.regain.us/" }
    ]
  },
  {
    type: "Therapist near me",
    priceRange: "$390+/month",
    winner: {
      name: "Gottman Referral Network",
      description: "Find local therapists trained in the Gottman Method.",
      features: [
        "Scientifically-based approach",
        "Highly trained therapists",
        "In-person sessions",
        "Tailored to your specific needs"
      ],
      link: "https://www.gottman.com/couples/private-therapy/"
    },
    runnerUps: [
      { name: "Psychology Today Therapist Directory", link: "https://www.psychologytoday.com/us/therapists" },
      { name: "American Association for Marriage and Family Therapy", link: "https://www.aamft.org/Directories/Find_a_Therapist.aspx" }
    ]
  }
];

const BestCoupleTherapyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/separation-divorce-main" className="inline-flex items-center text-[#0F5C5B] hover:underline mb-6">
          <ArrowLeft className="mr-2" /> Back to Separation & Divorce
        </Link>
        
        <h1 className={`${playfair.className} text-4xl font-bold mb-8 text-center text-[#0F5C5B]`}>Best Couples Therapy Services</h1>
        
        {therapyOptions.map((option, index) => (
          <div key={index} className="mb-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className={`${playfair.className} text-2xl font-bold mb-4 text-[#0F5C5B]`}>{option.type} Therapy</h2>
            <p className="text-gray-600 mb-4">Price Range: {option.priceRange}</p>
            
            <div className="bg-[#FFE8D6] rounded-lg p-6 mb-6">
              <h3 className={`${playfair.className} text-xl font-bold mb-2 flex items-center`}>
                <Star className="text-yellow-400 mr-2" /> Top Pick: {option.winner.name}
              </h3>
              <p className="mb-4">{option.winner.description}</p>
              <ul className="mb-4">
                {option.winner.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <Link href={option.winner.link}>
                <Button className="w-full bg-[#0F5C5B] text-white hover:bg-[#0A4342] transition-colors duration-300 rounded-full py-2 px-4">
                  Visit {option.winner.name}
                </Button>
              </Link>
            </div>
            
            <h4 className={`${playfair.className} text-lg font-bold mb-2`}>Runner-ups:</h4>
            <ul>
              {option.runnerUps.map((runnerUp, i) => (
                <li key={i} className="mb-2">
                  <Link href={runnerUp.link} className="text-blue-600 hover:underline">
                    {runnerUp.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCoupleTherapyPage;
