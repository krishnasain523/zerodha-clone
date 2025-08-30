function Stats() {
  return (
    <>
      <div className=" p-5 md:px-10 lg:px-16  w-full max-w-screen-xl mx-auto ">
        <div className="flex flex-col md:flex-col lg:flex-row  md:gap-1 lg:gap-5">
          <div className=" p-1 md:p-5 xl:p-10">
            <h2 className="text-[1.8rem] sm:text-3xl md:text-4xl  text-[#424242] font-semibold">
              Trust with confidence
            </h2>
            <div className="mt-10 w-full md:w-full lg:w-[432px]  flex flex-col gap-4">
              <h3 className="text-[1.5rem]  text-[#424242] font-medium">
                Customer-first always
              </h3>
              <p className="text-[#666666]  leading-relaxed mb-3 font-medium text-1xl">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
              <h3 className="text-[1.5rem] text-[#424242] font-medium">
                No spam or gimmicks
              </h3>
              <p className="text-[#666666] leading-relaxed mb-3 font-medium text-1xl">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>
              <h3 className="text-[1.5rem] text-[#424242] font-medium">
                The Zerodha universe
              </h3>
              <p className="text-[#666666] leading-relaxed mb-3 font-medium text-1xl">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
              <h3 className="text-[1.5rem] text-[#424242] font-medium">
                Do better with money
              </h3>
              <p className="text-[#666666]  leading-relaxed mb-3 font-medium text-1xl">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
          <div className=" p-1 md:p-5">
            <img src="/images/ecosystem.png" className="" alt="" />
            <div className="mt-4 flex justify-center  gap-1  md:gap-10">
              <a href="" className="text-blue-500 hover:text-black text-[1.1rem]">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
              <a href=""  className="text-blue-500 hover:text-black text-[1.1rem]">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-10   w-full max-w-screen-2xl mx-auto">
        <img src="/images/press-logos.png" className="w-full lg:w-[700px] mx-auto " alt="" />
      </div>
    </>
  );
}

export default Stats;
