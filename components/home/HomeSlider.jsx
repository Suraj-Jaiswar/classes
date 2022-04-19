import React from 'react'
import Slider from "react-slick";

export default function HomeSlider() {

    const Banner = [
        {
            img_path:`assests/banner1.jpg`,
            // title:"Bangalore",
        },
        {
            img_path:`assests/banner2.webp`,
            // title:"Dubai",
        },
        {
            img_path:`assests/banner3.jpg`,
            // title:"Delhi / NCR",
        },
       
    ]

    var settings = {
        dots: true,
        centerPadding: "40px",
        infinite: true,
        speed: 500,
        arrows: false,
        centerPadding: "0px",
        dots: true,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        
      };
    return (
      <>
      <Slider {...settings}>
            {Banner.map((item, index) => (
              <div  key={index} width={1} className="InlineBlock" style={{position:"relative"}}>
                      <img  src={item.img_path} className="Height70"/>
                      {/* <h2 className="bannerHeading">{item.title}</h2> */}
              </div>
            ))}
      </Slider>
      </>
    )
}
