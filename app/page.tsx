import Image from "next/image";

import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
export default function Home() {
  return (
  <div>
      <Hero />
      
      <Services />
      <Properties />
      <FeaturedProperty />
      <Testimonial />
    
      <GetInTouch />
      <FAQ />
    </div>
  );
}
