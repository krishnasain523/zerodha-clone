import Footer from "../../footer";
import Navbar from "../../navbar";
import Openaccount from "../../openacount";
import Education from "./education";
import Hero from "./hero";
import Pricing from "./pricing";
import Signup from "./signupbtn";
import Stats from "./stats";

function Homepage() {
    return (  <>
   
    <Hero/>
    <Stats/>
    <Pricing/>
     <Education/>
      <Signup/>
    {/* <Stats/>
    <Pricing/>
   
    <Openaccount/>
    */}



    </>);
}

export default Homepage;