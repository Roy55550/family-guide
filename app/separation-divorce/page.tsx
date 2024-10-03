"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // Add this line
import { motion } from 'framer-motion';
import { User, MapPin, FileText, Users, Home, DollarSign, Scale, Clock } from 'lucide-react';
import getFirebaseComponents from '../firebase';

const questions = [
  {
    id: 'welcome',
    title: "Find the Best Divorce Service for Your Needs in Just a Few Minutes",
    subtitle: "Whether you're looking for a quick online divorce, legal advice, or help with paperwork, we've got you covered.",
    buttonText: "Get Started",
    icon: <FileText className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'gender',
    text: "What's your sex?",
    options: ['Male', 'Female'],
    icon: <User className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'state',
    text: "Which state are you located in?",
    type: 'input',
    icon: <MapPin className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'divorce_status',
    text: "Where are you in the divorce process?",
    options: [
      "Haven't started yet",
      "Already filed, just need help finishing",
      "Just started, looking for guidance",
      "Almost done, need help with finalizing paperwork",
      "Already divorced, looking for post-divorce services"
    ],
    icon: <FileText className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'spouse_agreement',
    text: "How would you describe your current relationship with your spouse regarding the divorce?",
    options: [
      "Amicable, we agree on most things",
      "We agree on some things, but not everything",
      "Completely disagree on everything",
      "We are not speaking"
    ],
    icon: <Users className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'children',
    text: "Do you have any children with your spouse?",
    options: [
      "Yes, and we need to settle custody",
      "Yes, but custody is already settled",
      "No children"
    ],
    icon: <Home className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'assets',
    text: "Are there any significant assets (e.g., house, investments) you need to divide?",
    options: [
      "Yes, we need help with that",
      "No, we have already agreed on asset division",
      "No significant assets to divide"
    ],
    icon: <DollarSign className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'service_type',
    text: "What type of help are you looking for?",
    options: [
      "I need full legal representation (divorce lawyer)",
      "I'm looking for an affordable, online divorce service",
      "I just need help filing divorce papers"
    ],
    icon: <Scale className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'urgency',
    text: "How soon do you need help?",
    options: [
      "Immediately, within a week",
      "Within a month",
      "Not in a hurry, within the next few months"
    ],
    icon: <Clock className="w-16 h-16 text-[#0F5C5B]" />,
  },
  {
    id: 'contact',
    text: "Before we show your results, where should we send your personalized recommendations?",
    type: 'contact',
    icon: <User className="w-16 h-16 text-[#0F5C5B]" />,
  },
];

interface Answers {
  [key: string]: string;
}

export default function SeparationDivorcePage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [userId, setUserId] = useState<string>('');
  const [firebaseLoaded, setFirebaseLoaded] = useState(false);
  const [firebaseComponents, setFirebaseComponents] = useState<any>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    console.log('useEffect called, currentQuestion:', currentQuestion);
    setUserId(`user_${Date.now()}`);
    const components = getFirebaseComponents();
    setFirebaseComponents(components);
    setFirebaseLoaded(true);

    if (typeof window !== 'undefined') {
      const handleBeforeUnload = () => {
        if (currentQuestion > 0 && currentQuestion < questions.length - 1 && firebaseLoaded && components.analytics) {
          try {
            components.logEvent(components.analytics, 'quiz_dropoff', {
              question_number: currentQuestion,
              last_question: questions[currentQuestion].text
            });
            console.log('Quiz dropoff event logged');
          } catch (error) {
            console.error("Error logging quiz dropoff:", error);
          }
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [currentQuestion]);

  const handleQuizSubmission = async () => {
    console.log('Submitting quiz answers:', answers);
    if (typeof window !== 'undefined' && firebaseLoaded && firebaseComponents) {
      const { db, analytics, logEvent, doc, setDoc } = firebaseComponents;
      if (db && analytics) {
        try {
          // Save all answers to Firestore
          const userDocRef = doc(db, 'quiz_responses', userId);
          await setDoc(userDocRef, answers, { merge: true });
          console.log('All answers saved to Firestore');
          
          // Log quiz completion event
          logEvent(analytics, 'quiz_completed', {
            total_questions: questions.length,
            user_id: userId
          });
          console.log('Quiz completion event logged to Analytics');
          
          setQuizSubmitted(true);
          setShowThankYou(true);
          
          // Redirect to homepage after 3 seconds
          setTimeout(() => {
            router.push('/');
          }, 3000);
        } catch (error) {
          console.error("Error submitting quiz:", error);
        }
      } else {
        console.error('Firebase db or analytics not initialized');
      }
    } else {
      console.error('Firebase not loaded or components not available');
    }
  };

  const handleAnswer = async (answer: string) => {
    console.log('handleAnswer called with:', answer);
    setAnswers(prevAnswers => {
      console.log('Previous answers:', prevAnswers);
      return { ...prevAnswers, [questions[currentQuestion].id]: answer };
    });
    
    if (typeof window !== 'undefined' && firebaseLoaded && firebaseComponents) {
      const { db, analytics, logEvent, doc, setDoc } = firebaseComponents;
      console.log('Firebase components:', { db, analytics, logEvent, doc, setDoc });
      if (db && analytics) {
        try {
          const userDocRef = doc(db, 'quiz_responses', userId);
          await setDoc(userDocRef, {
            [questions[currentQuestion].id]: answer
          }, { merge: true });
          console.log('Answer saved to Firestore');
          
          logEvent(analytics, 'question_answered', {
            question_number: currentQuestion + 1,
            question_text: questions[currentQuestion].text,
            answer: answer
          });
          console.log('Event logged to Analytics');
        } catch (error) {
          console.error("Error saving answer or logging event:", error);
        }
      } else {
        console.error('Firebase db or analytics not initialized');
      }
    } else {
      console.error('Firebase not loaded or components not available');
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    } else {
      // This is the last question
      await handleQuizSubmission();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({ ...prevAnswers, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const currentAnswer: Answers = {};
    
    formData.forEach((value, key) => {
      currentAnswer[key] = value.toString();
    });
    
    setAnswers(prevAnswers => ({ ...prevAnswers, ...currentAnswer }));
    
    await handleQuizSubmission();
  };

  const renderQuestion = () => {
    console.log('renderQuestion called, currentQuestion:', currentQuestion);
    const question = questions[currentQuestion];
    return (
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="mb-6">{question.icon}</div>
        {question.id === 'welcome' ? (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#0F5C5B]">{question.title}</h1>
            <p className="mb-6 text-gray-600">{question.subtitle}</p>
            <button
              onClick={() => handleAnswer('started')}
              className="bg-[#0F5C5B] text-white px-6 py-2 rounded-full hover:bg-[#0A4342] transition-colors"
            >
              {question.buttonText}
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-[#0F5C5B]">{question.text}</h2>
            {question.options ? (
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full py-2 px-4 bg-white text-[#0F5C5B] border border-[#0F5C5B] rounded-full hover:bg-[#0F5C5B] hover:text-white transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : question.type === 'input' ? (
              <form onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector('input');
                if (input) handleAnswer(input.value);
              }} className="space-y-4">
                <input
                  type="text"
                  name={question.id}
                  value={answers[question.id] || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your answer"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#0F5C5B] text-white rounded-full hover:bg-[#0A4342] transition-colors"
                >
                  Next
                </button>
              </form>
            ) : question.type === 'contact' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone (optional)"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                />
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm text-gray-600">
                    I agree to receive helpful tips and updates related to my divorce process.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#0F5C5B] text-white rounded-full hover:bg-[#0A4342] transition-colors"
                >
                  Submit
                </button>
              </form>
            ) : null}
          </>
        )}
      </motion.div>
    );
  };

  console.log('Rendering component, currentQuestion:', currentQuestion);

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#0F5C5B]">Thank You!</h1>
          <p className="mb-4">We will be in touch shortly.</p>
          <p className="text-sm text-gray-600">Redirecting to homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center">
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
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative max-w-2xl mx-auto">
          <div className="border-t-4 border-[#0F5C5B] mb-6"></div>
          {renderQuestion()}
        </div>
      </main>
    </div>
  );
}