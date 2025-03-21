import React from "react";
import Head from "next/head";
// import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Category from "@/components/Category";
import Trending from "@/components/Trending";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";

// Landing Page
const Home: React.FC = () => (
  <>
    <Head>
      <title>Elemes Group</title>
    </Head>
    <Header />
    <HeroSection />
    <Category />
    <Trending />
    <Footer />
    <StickyNav />
  </>
);

export default Home;
