import React, { useState, useEffect } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import HomePage from "../components/home/Home";
import Slider from "../components/home/Slider";

export default function Home() {

  const [showDrawer, setDrawer] = useState(false);

  const toggleDrawer = (status) =>{
      setDrawer(status);
  }

  return (
    <div className={''}>
		<Header toggleDrawer={toggleDrawer}/>
		<HomePage/>
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
