import type { Metadata } from 'next';
import GetStartedClient from './GetStartedClient';

export const metadata: Metadata = {
  title: 'Get Started — SkillBridge',
  description:
    'Start your free SkillBridge analysis or request an enterprise demo. Get personalized AI insights in minutes.',
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
