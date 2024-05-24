import Image from "next/image";
import Navbar from "../components/Navbar/Navbar"
import  HomeBanner  from "../components/Home/HomeBannner/HomeBanner";
import HomeStart from "../components/Home/HomeStart/HomeStart";
import HomeCarousel from "../components/Home/HomeCarousel/HomeCarousel";
import HomeWhy from "@/components/Home/HomeWhy/HomeWhy";
import HomeProfile from "@/components/Home/HomeProfile/HomeProfile";
import HomeJobs from "@/components/Home/HomeJobs/HomeJobs";


export default function Home() {
  return (
    <>
    <Navbar />
    <HomeBanner />
    <HomeCarousel />
    <HomeStart />
    <HomeWhy />
    <HomeProfile />
    <HomeJobs />
    </>
  );
}
