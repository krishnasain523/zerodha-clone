export default function Hero() {
    return (
        <>
            <section className="h-[300px] bg-[#fbfbfb] py-25">
                <div className=" max-w-screen-sm h-full  mx-auto">
                    <div className="text-[24px] text-[#424242] text-center font-semibold">
                       <p> We pioneered the discount broking model in India.</p>
                        <p>Now, we are breaking ground with our technology.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="">
                    <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-12  max-w-[900px] h-full mx-auto">
                    {/* pera 1 */}
                    <div className="flex flex-col gap-3 text-[18px] text-[#424242] w-full p-5  lg:max-w-[450px] ">
                        <p>
                            We kick-started operations on the 15th of August, 2010 with the
                            goal of breaking all barriers that traders and investors face in
                            India in terms of cost, support, and technology. We named the
                            company Zerodha, a combination of Zero and "Rodha", the Sanskrit
                            word for barrier.
                        </p>

                        <p>
                            Today, our disruptive pricing models and in-house technology have
                            made us the biggest stock broker in India.
                        </p>

                        <p>
                            Over 1.6+ crore clients place billions of orders every year
                            through our powerful ecosystem of investment platforms,
                            contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    {/* pera 2 */}
                    <div className="flex flex-col gap-3 text-[18px] text-[#424242] w-full p-5  lg:max-w-[450px]">
                        <p>
                            In addition, we run a number of popular open online educational
                            and community initiatives to empower retail traders and investors.
                        </p>

                        <p>
                            Rainmatter, our fintech fund and incubator, has invested in
                            several fintech startups with the goal of growing the Indian
                            capital markets.
                        </p>

                        <p>
                            And yet, we are always up to something new every day. Catch up on
                            the latest updates on our blog or see what the media is <a href="" className="text-blue-500">saying
                            about us</a> or learn more about our business and product
                            <a href="" className="text-blue-500">philosophies.</a>
                        </p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
