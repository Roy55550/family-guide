import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const HowToStreamlineDivorceProcessClient = dynamic(
  () => import('./HowToStreamlineDivorceProcessClient'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'How to Streamline the Divorce Process',
  description: 'Learn effective strategies to simplify and streamline your divorce process, including communication tips, prioritization, and mediation options.',
};

export default function HowToStreamlineDivorceProcess() {
  return (
    <div>
      <HowToStreamlineDivorceProcessClient />
    </div>
  );
}
