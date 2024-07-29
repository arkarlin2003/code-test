import BestSeller from "@/components/BestSeller"
import Brand from "@/components/Brand"
import Category from "@/components/Category"
import Collection from "@/components/Collection"
import HeroSection from "@/components/HeroSection"
import NewArrival from "@/components/NewArrival"
import OurClient from "@/components/OurClient"

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <OurClient/>
        <NewArrival/>
        <Category/>
        <Collection/>
        <BestSeller/>
        <Brand/>
    </div>
  )
}

export default Home