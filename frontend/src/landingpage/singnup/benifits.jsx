const benifits = [
  {
    title: 'Unbeatable pricing',
    description:
      'Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.'
  },
  {
    title: 'Best investing experience',
    description:
      'Simple and intuitive trading platform with an easy-to-understand user interface.'
  },
  {
    title: 'No spam or gimmicks',
    description:
      'Committed to transparency — no gimmicks, spam, gamification, or intrusive push notifications.'
  },
  {
    title: 'The Zerodha universe',
    description:
      'More than just an app — gain free access to the entire ecosystem of our partner products.'
  }
]

export default function Benifits () {
  return (
    <>
      <section className='mt-15'>
        <div className='flex  flex-col lg:flex-row max-w-screen-xl gap-2 justify-center px-8 lg:px-10 mx-auto'>
          <div className='p-2 lg:p-10 mt-8'>
            <img
              src='/images/acop-benefits.svg'
              className='w-full md:px-30 lg:w-[500px] lg:px-0'
              alt='benefits'
            />
            <p className='text-[24px] mt-3 text-[#424242] font-semibold '>
              Benefits of opening a Zerodha demat account
            </p>
          </div>
          <div>
            {benifits.map((items, index) => (
              <div key={index} className=' w-full lg:w-[500px]'>
                <h1 className='text-[20px] mt-15 text-[#424242] font-semibold'>
                  {items.title}
                </h1>
                <p className='text-[16px] mt-5 text-[#666666] '>
                  {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
