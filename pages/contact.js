import React, { useState, useEffect } from "react";
import Contact from "../components/contact/contact";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Slider from "../components/home/Slider";

export default function ContactUs() {

  const [showDrawer, setDrawer] = useState(false);

  const toggleDrawer = (status) =>{
      setDrawer(status);
  }

  return (
    <div className={''}>
		<Header toggleDrawer={toggleDrawer}/>
		<Contact/>
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
