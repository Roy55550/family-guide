"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db, getAnalytics } from '@/firebase/firebaseClient';
import { collection, addDoc, Firestore } from 'firebase/firestore';
import { logEvent, Analytics } from 'firebase/analytics';
import Button from '../components/button';
import Image from 'next/image';

const questions = [
  {
    name: "Where are you in your relationship or divorce journey?",
    content: "Let us know your current status so we can recommend the right support for you.",
    type: "multiple",
    options: [
      "Married, considering divorce",
      "Separated, but not legally",
      "In the process of divorce (just starting)",
      "In the process of divorce (almost done)",
      "Divorced, looking for post-divorce services"
    ]
  },
  {
    name: "Where are you located?",
    content: "Please provide your state of residence for location-based recommendations.",
    type: "text"
  },
  {
    name: "How would you describe your current relationship with your spouse?",
    content: "Understanding the dynamic helps us suggest the most suitable resources.",
    type: "multiple",
    options: [
      "Amicable, we agree on most things",
      "We agree on some things, but not everything",
      "We disagree on everything",
      "We are not speaking"
    ]
  },
  {
    name: "Do you have any children with your spouse?",
    content: "Please tell us if you need assistance with child custody arrangements.",
    type: "multiple",
    options: [
      "Yes, and we need to settle custody",
      "Yes, but custody is already settled",
      "No children"
    ]
  },
  {
    name: "Are there significant assets (e.g., house, investments) to divide?",
    content: "Asset division can require specific expertise.",
    type: "multiple",
    options: [
      "Yes, we need help with that",
      "No, we have already agreed on asset division",
      "No significant assets to divide"
    ]
  },
  {
    name: "What type of help are you looking for?",
    content: "Tell us what services you are seeking, and we'll guide you to the right one.",
    type: "multiple",
    options: [
      "Couples therapy to resolve issues",
      "Full legal representation (divorce lawyer)",
      "An affordable online divorce service",
      "Help with filing divorce papers",
      "Post-divorce support"
    ]
  },
  {
    name: "How soon do you need help?",
    content: "Your timeline will help us find services that can meet your urgency.",
    type: "multiple",
    options: [
      "Immediately, within a week",
      "Within a month",
      "Not in a hurry, within the next few months"
    ]
  },
  {
    name: "Before we show your results, where should we send your personalized recommendations?",
    content: "Enter your email to receive customized services based on your needs.",
    type: "text"
  }
];

const SeparationDivorcePage: React.FC = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const fireQuestionViewedEvent = async () => {
      const analytics = await getAnalytics;
      if (analytics) {
        logEvent(analytics, 'question_viewed', {
          question_number: currentQuestion + 1,
          question_text: questions[currentQuestion].name
        });
      }
    };

    fireQuestionViewedEvent();
  }, [currentQuestion]);

  const handleAnswer = async (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    const analytics = await getAnalytics;
    if (analytics) {
      logEvent(analytics, 'question_answered', {
        question_number: currentQuestion + 1,
        question_text: questions[currentQuestion].name,
        answer: answer
      });
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const finalAnswers = { ...answers, name, email, phone };
      const docRef = await addDoc(collection(db as Firestore, 'separationDivorceAnswers'), finalAnswers);
      console.log('Answers saved to Firestore with ID:', docRef.id);
      
      const analytics = await getAnalytics;
      if (analytics) {
        logEvent(analytics, 'separation_divorce_quiz_completed');
      }

      router.push('/separation-divorce-results');
    } catch (error) {
      console.error('Error saving answers:', error);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => prevQuestion - 1);
    }
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="Family Edition Logo"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-[#0F5C5B] mb-4">
            Help us match you with the right divorce support
          </h1>
          <p className="text-gray-600">
            We're here to guide you through every step of your divorce journey. Answer a few quick
            questions, and we'll match you with personalized services tailored to your needs.
          </p>
        </div>
        
        {!isLastQuestion ? (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2 text-[#0F5C5B]">{questions[currentQuestion].name}</h2>
              <p className="text-gray-600 mb-4">{questions[currentQuestion].content}</p>
              
              {questions[currentQuestion].type === 'multiple' ? (
                <div className="space-y-2">
                  {questions[currentQuestion].options?.map((option, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 border border-[#0F5C5B] rounded-lg hover:bg-[#FFE8D6] transition-colors text-[#0F5C5B]"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  className="w-full p-3 border border-[#0F5C5B] rounded-lg text-[#0F5C5B]"
                  placeholder="Type your answer here"
                  value={answers[currentQuestion] || ''}
                  onChange={(e) => setAnswers({ ...answers, [currentQuestion]: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnswer(answers[currentQuestion] || '')}
                />
              )}
            </div>
            
            <div className="flex justify-between">
              {currentQuestion > 0 && (
                <Button onClick={handleBack} className="bg-gray-300 text-[#0F5C5B] px-6 py-2 rounded-lg">
                  Back
                </Button>
              )}
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-[#0F5C5B] text-center">
              Before we show your results, please provide your contact information:
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-[#0F5C5B] rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-[#0F5C5B] rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number (optional)"
              className="w-full p-3 border border-[#0F5C5B] rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className="text-sm text-gray-600">
              By clicking submit, I agree to receive emails from Family Edition
            </p>
            <button type="submit" className="w-full bg-[#0F5C5B] text-white py-3 rounded-lg">
              Submit
            </button>
          </form>
        )}
        
        <div className="mt-8 text-center text-sm text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
    </div>
  );
};

export default SeparationDivorcePage;