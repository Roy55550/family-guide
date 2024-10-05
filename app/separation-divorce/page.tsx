"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db, getAnalytics } from '@/firebase/firebaseClient';
import { collection, addDoc, Firestore } from 'firebase/firestore';
import { logEvent, Analytics } from 'firebase/analytics';
import Button from '../components/button';
import Image from 'next/image';
import Select from 'react-select';

const usStates = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' }
];

const questions = [
  {
    name: "Where are you in your relationship or divorce journey?",
    content: "",
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
    content: "Please select your state.",
    type: "select",
    options: usStates
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
  const [selectedState, setSelectedState] = useState<{ value: string; label: string } | null>(null);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

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

  const handleAnswer = async (answer: string | { value: string; label: string }) => {
    const answerValue = typeof answer === 'string' ? answer : answer.label;
    const newAnswers = { ...answers, [currentQuestion]: answerValue };
    setAnswers(newAnswers);

    const analytics = await getAnalytics;
    if (analytics) {
      logEvent(analytics, 'question_answered', {
        question_number: currentQuestion + 1,
        question_text: questions[currentQuestion].name,
        answer: answerValue
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

      setShowThankYouMessage(true);
      
      // Redirect to homepage after 3 seconds
      setTimeout(() => {
        router.push('/');
      }, 3000);
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

  const handleSelectChange = (selectedOption: any) => {
    setSelectedState(selectedOption);
    handleAnswer(selectedOption.label);
  };

  return (
    <div className="min-h-screen bg-[#E5DFD6] flex flex-col items-center justify-center p-4">
      {!showThankYouMessage && (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20Edition%20logo-hhpVdqQJYG4AZwBjdYf2sqDVjmSnoY.jpeg"
          alt="Family Edition Logo"
          width={120}
          height={120}
          className="mb-12"
        />
      )}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        {showThankYouMessage ? (
          <div className="text-center flex flex-col items-center justify-center h-64">
            <h2 className="text-xl font-semibold mb-4 text-[#0F5C5B]">
              Thank you, we will be in touch with your personal recommendation
            </h2>
            <p>Redirecting you to the homepage...</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-[#0F5C5B] h-2.5 rounded-full" style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}></div>
              </div>
              <h1 className="text-3xl font-bold text-[#0F5C5B] mb-4 text-center">
                Help us match you with the right divorce support
              </h1>
              <p className="text-gray-600 text-center">
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
                      {(questions[currentQuestion].options as string[]).map((option, index) => (
                        <button
                          key={index}
                          className={`w-full text-left p-3 border border-[#0F5C5B] rounded-lg transition-colors text-[#0F5C5B] ${
                            answers[currentQuestion] === option ? 'bg-[#FFE8D6]' : 'hover:bg-[#FFE8D6]'
                          }`}
                          onClick={() => handleAnswer(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : questions[currentQuestion].type === 'select' ? (
                    <Select
                      options={questions[currentQuestion].options as { value: string; label: string }[]}
                      onChange={handleSelectChange}
                      value={selectedState}
                      placeholder="Select your state"
                      className="text-[#0F5C5B]"
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          borderColor: '#0F5C5B',
                          '&:hover': {
                            borderColor: '#0F5C5B'
                          }
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          backgroundColor: state.isSelected ? '#FFE8D6' : 'white',
                          color: '#0F5C5B',
                          '&:hover': {
                            backgroundColor: '#FFE8D6'
                          }
                        }),
                        menu: (provided) => ({
                          ...provided,
                          maxHeight: '300px', // Increase the height of the dropdown
                        }),
                        menuList: (provided) => ({
                          ...provided,
                          maxHeight: '300px', // Increase the height of the scrollable area
                        })
                      }}
                    />
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
                  {questions[currentQuestion].type === 'text' && (
                    <Button 
                      onClick={() => handleAnswer(answers[currentQuestion] || '')} 
                      className="bg-[#0F5C5B] text-white px-6 py-2 rounded-lg ml-auto"
                    >
                      Next
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <>
                {showThankYouMessage ? (
                  <div className="text-center">
                    <h2 className="text-xl font-semibold mb-4 text-[#0F5C5B]">
                      Thank you, we will be in touch with your personal recommendation
                    </h2>
                    <p>Redirecting you to the homepage...</p>
                  </div>
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
                    <div className="flex justify-between">
                      <Button onClick={handleBack} className="bg-gray-300 text-[#0F5C5B] px-6 py-2 rounded-lg">
                        Back
                      </Button>
                      <button type="submit" className="bg-[#0F5C5B] text-white px-6 py-2 rounded-lg">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SeparationDivorcePage;