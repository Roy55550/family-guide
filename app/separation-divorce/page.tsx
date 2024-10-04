"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db, getAnalytics } from '@/firebase/firebaseClient'; // Ensure this path is correct
import { collection, addDoc, Firestore } from 'firebase/firestore';
import { logEvent, Analytics } from 'firebase/analytics';
import Button from '../components/button';

const SeparationDivorcePage: React.FC = () => {
  console.log('SeparationDivorcePage rendered');

  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions: string[] = [
    "What is your current marital status?",
    "In which state do you reside?",
    "Do you have any children under 18?",
    "Are you seeking information on child custody?",
    "Are you interested in mediation or collaborative divorce?",
  ];

  useEffect(() => {
    console.log('useEffect called, currentQuestion:', currentQuestion);
  }, [currentQuestion]);

  const handleAnswer = async (answer: string) => {
    console.log('handleAnswer called with:', answer);

    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);
    console.log('Updated answers:', newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => {
        console.log('Moving to next question. New index:', prevQuestion + 1);
        return prevQuestion + 1;
      });
    } else {
      try {
        const docRef = await addDoc(collection(db as Firestore, 'separationDivorceAnswers'), newAnswers);
        console.log('Answer saved to Firestore with ID:', docRef.id);
        
        const analytics = await getAnalytics;
        if (analytics) {
          logEvent(analytics, 'separation_divorce_quiz_completed');
          console.log('Event logged to Analytics');
        }
        
        router.push('/separation-divorce-results');
      } catch (error) {
        console.error('Error saving answers:', error);
      }
    }
  };

  const handleBack = () => {
    console.log('handleBack called, current question:', currentQuestion);
    if (currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => {
        console.log('Moving to previous question. New index:', prevQuestion - 1);
        return prevQuestion - 1;
      });
    }
  };

  console.log('DEBUGGING: Render called with currentQuestion:', currentQuestion);

  return (
    <div>
      <h2 style={{color: 'red'}}>DEBUGGING: Current Question: {currentQuestion + 1}</h2>
      
      <h1>Separation & Divorce Questionnaire</h1>
      <p>Question {currentQuestion + 1}: {questions[currentQuestion]}</p>
      <input
        type="text"
        value={answers[currentQuestion] || ''}
        onChange={(e) => {
          const newAnswers = { ...answers, [currentQuestion]: e.target.value };
          setAnswers(newAnswers);
          console.log('Input changed, new answers:', newAnswers);
        }}
      />
      <Button onClick={() => handleAnswer(answers[currentQuestion] || '')}>Next</Button>
      {currentQuestion > 0 && <Button onClick={handleBack}>Back</Button>}
    </div>
  );
};

export default SeparationDivorcePage;