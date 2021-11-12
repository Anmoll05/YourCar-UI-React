 import React from "react";
 import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/bookCard";
import Navbar from "../../components/navbar";
import TopSection from "./topSection";
import { Marginer } from "../../components/marginer";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import TopCars from "./topCars";
import Footer from "../../components/footer";

 const PageContainer = styled.div` 
 ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
 `}
 
 
 `;
 export function HomePage(){

    return <PageContainer>
       <Navbar/>
       <TopSection/>
       <BookCard/>
       <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <TopCars/>
      <Footer/>
    </PageContainer>
 }