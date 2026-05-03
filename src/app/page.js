import HeroSlider from "@/components/HeroSlider";
import Banner from "@/components/homepage/Banner";
import TopThreeCard from "@/components/homepage/TopThreeCard";
import Learing from "@/components/Learing";
import TopInstructor from "@/components/TopInstructor";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
   <div>
       <Banner></Banner>
       <HeroSlider></HeroSlider>
       <TopThreeCard></TopThreeCard>
       <Learing></Learing>
       <TopInstructor></TopInstructor>
       <TrendingCourses></TrendingCourses>
   </div>
  );
}
