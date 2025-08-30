import { Routes } from "react-router-dom"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (<>
        <div className=" w-full  flex justify-between py-6 px-10 lg:py-6 lg:px-30  fixed top-0 left-0 bg-[#fbfbfb] h-[67px]">
            <NavLink to="/"><div><img className="w-[128px]" src="/images/logo.svg" alt="zerodha-logo" /></div></NavLink>
            <div className="flex space-x-10 w-[400px] mr-20 hidden md:block lg:block text-[#424242]">
                <NavLink to="/signup" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-[#424242]"
                }>
                    Signup
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-[#424242]"
                }>
                    About
                </NavLink >
                <NavLink to="/products" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-[#424242]"
                }>
                    Products
                </NavLink>
                <NavLink to="/pricing" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-[#424242]"
                }>
                    Pricing
                </NavLink>


                {/* <a href="">Support</a> */}
            </div>
        </div>



    </>);
}

export default Navbar;