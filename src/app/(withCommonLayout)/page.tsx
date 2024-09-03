import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Specialist from '@/components/UI/HomePage/Specialist/Specialist';
import TopRatedDoctors from '@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors';
import WhyUs from '@/components/UI/HomePage/WhyUs/WhyUs';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
}
