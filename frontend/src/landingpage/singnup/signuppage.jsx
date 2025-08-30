import Footer from "../../footer";
import Navbar from "../../navbar";
import Signup from "../home/signupbtn";
import Benifits from "./benifits";
import Exploreacounts from "./exploreacounts";
import Faqs from "./Faqs";
import Hero from "./hero";
import Investmentoption from "./investmentoptions";
import Openacountstep from "./openacountstep";

export default function Signuppage()
{
    return(
        <>
        <Hero/>
        <Investmentoption/>
        <Openacountstep/>
        <Benifits/>
         <Exploreacounts/>
         <Faqs/>
        <Signup/>
        
        {/* 
        
        
       
         */}
        </>
    )
}