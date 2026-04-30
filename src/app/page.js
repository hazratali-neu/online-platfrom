import Banner from "@/components/homepage/Banner";
import TopThreeCard from "@/components/homepage/TopThreeCard";
import Learing from "@/components/Learing";
import TopInstructor from "@/components/TopInstructor";
import Image from "next/image";

export default function Home() {
  return (
   <div>
       <Banner></Banner>
       <TopThreeCard></TopThreeCard>
       <Learing></Learing>
       <TopInstructor></TopInstructor>
   </div>
  );
}
