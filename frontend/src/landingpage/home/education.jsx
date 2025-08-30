function Education() {
    return ( <>
        <section>
            <div className="p-5 md:px-10 lg:px-20  w-full max-w-screen-xl mx-auto flex justify-center gap-40 flex-col lg:flex-row items-center mt-20">
                {/* img */}
                <div className="w-full  px-5 lg:p-0 lg:w-190">
                    <img src="/images/education.svg" alt="" />
                </div>
                {/* content */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl lg:text-4xl text-[#424242] font-semibold">Free and open market education</h1>
                    <p className="text-[#424242] text-[1.1rem]">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="text-blue-500 hover:text-black text-[1.1rem] ">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="text-[#424242] text-[1.1rem]">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className="text-blue-500 hover:text-black text-[1.1rem]">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    </> );
}

export default Education;