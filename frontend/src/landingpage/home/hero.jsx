import { NavLink } from "react-router-dom";

function Hero() {
    return (<>
        
               

     <div className="w-full p-5 lg:p-10 mt-20 mb-10">
             <div className="text-center">
                <img src="/images/homeHero.png" alt="" className="mb-10 w-[789px] mx-auto " />
                <h1 className="text-5xl  text-[#424242] mb-6 font-medium">Invest in everything</h1>
                <p className="mb-6 text-[#424242] text-[1.3rem] font-normal">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
              <NavLink to="/signup">  <button className="bg-[#387ED1] px-10 py-[0.7rem]  font-medium rounded-sm text-white font-900 text-xl hover:bg-black">Sign up for free</button></NavLink>
             </div>
     </div>
           
    </>);
}

export default Hero;