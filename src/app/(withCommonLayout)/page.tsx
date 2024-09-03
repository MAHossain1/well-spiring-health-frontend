import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Specialist from '@/components/UI/HomePage/Specialist/Specialist';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
    </>
  );
}
