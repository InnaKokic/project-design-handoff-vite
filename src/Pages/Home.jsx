import "./home.css"

import { Hero } from "../Sections-HomePage/Hero/Hero"
import { ReadMore } from "../Sections-HomePage/ReadMore/ReadMore"
import { Pakages } from "../Sections-HomePage/Pakages/Pakages"
import { Offer } from "../Sections-HomePage/Offer/Offer"
import { Membership } from "../Sections-HomePage/Membership/membership"
export const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Hero />
      <ReadMore />
      <Pakages />
      <Offer />
      <Membership />
    </div>
  )
}