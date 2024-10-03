"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SeparationDivorcePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadTallyScript = () => {
      const script = document.createElement('script');
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      script.onload = () => {
        if (iframeRef.current) {
          // @ts-ignore: Tally's type definitions are not available
          Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    };

    loadTallyScript();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFE8D6] text-gray-800 font-sans">
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F5C5B] text-center">
          Find the Best Divorce Service for You
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 relative">
          <div style={{ height: 'calc(100vh - 250px)', minHeight: '500px' }}>
            <iframe 
              ref={iframeRef}
              src="https://tally.so/embed/3qKZk5?alignLeft=1&hideTitle=1&transparentBackground=1"
              width="100%" 
              height="100%" 
              frameBorder={0}
              title="Find the Best Divorce Service for You"
              style={{ border: 'none' }}
            ></iframe>
            <div className="absolute bottom-0 right-0 bg-white w-[100px] h-[30px]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}