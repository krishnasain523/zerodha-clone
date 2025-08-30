import React from 'react'

const investmentData = [
  {
    title: 'Stocks',
    description: 'Invest in all exchange-listed securities',
    icon: '/images/stocks-acop.svg' // Replace with actual icon paths
  },
  {
    title: 'Mutual funds',
    description: 'Invest in commission-free direct mutual funds',
    icon: '/images/mf-acop.svg'
  },
  {
    title: 'IPO',
    description: 'Apply to the latest IPOs instantly via UPI',
    icon: '/images/ipo-acop.svg'
  },
  {
    title: 'Futures & options',
    description:
      'Hedge and mitigate market risk through simplified F&O trading',
    icon: '/images/fo-acop.svg'
  }
]

const InvestmentOptions = () => {
  return (
    <section className='w-full px-4 py-16 bg-white '>
      <h2 className='text-2xl md:text-[1.8rem] text-[#424242] font-semibold mb-18 text-center'>
        Investment options with Zerodha demat account
      </h2>

      <div className='grid grid-cols-1  lg:grid-cols-2 gap-20 max-w-6xl mx-auto px-5 lg:px-30'>
        {investmentData.map((item, index) => (
          <div key={index} className='flex gap-8 items-center'>
            <img src={item.icon} alt={item.title} className='h-16' />
            <div className='leading-loose'>
              <h3 className='text-[1.2rem] text-[#424242] font-semibold'>
                {item.title}
              </h3>
              <p className='text-[#666666] text-md'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-20 text-center '>
        <a
          href='#'
          className='px-8 py-3 bg-[#387ED1] text-white  text-[20px] font-semibold rounded hover:bg-black transition'
        >
          Explore Investments
        </a>
      </div>
    </section>
  )
}

export default InvestmentOptions
