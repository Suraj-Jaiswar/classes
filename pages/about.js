import React, { useState, useEffect } from "react";
import About from "../components/about/About";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Slider from "../components/home/Slider";

export default function AboutUs() {

  const [showDrawer, setDrawer] = useState(false);

  const toggleDrawer = (status) =>{
      setDrawer(status);
  }

  return (
    <div className={''}>
		<Header toggleDrawer={toggleDrawer}/>
		<About/>
		<Footer/>
		<Slider toggleDrawer={toggleDrawer} showDrawer={showDrawer}/>
    </div>
  )
}
export async function getStaticProps() {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  return {
     props: {}
  }
}
