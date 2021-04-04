import * as React from "react"

import Layout from "../components/layout"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.css"
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import Featured from "./featured"
const IndexPage = () => {
  const carddetail: {

      Price: string;
      Name: string;
 
  } []=[
     {
      Price: 'Rs 10,000',
      Name: 'DSLR 001',
    },
    {
      Price: 'Rs 20,000',
      Name: 'DSLR 002',
    },
    {
      Price: 'Rs 30,000',
      Name: 'DSLR 003',
    },
    {
      Price: 'Rs 40,000',
      Name: 'DSLR 004',
    },
  ];
  return(
  <Layout>
    <div className="mx-auto  flex justify-center pt-4">
      <Carousel style={{ width: "50%" }}>
        <Carousel.Item interval={1000}>
          <div className="mx-auto">
            <img src={img1} />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div>
            <img src={img2} />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div>
            <img src={img3} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    <hr className="px-16">
    </hr>
    <div>
      <p className="text-2xl text-bold px-32" style={{color:"#333333"}}>FEATURED COLLECTION</p>
    </div>
    
      <div className="flex flex-row justify-between px-32">
        {
      carddetail.map(cards=>{
        return(
        <Featured/>);
      })}
      </div>
    
  </Layout>
  );
  }

export default IndexPage
