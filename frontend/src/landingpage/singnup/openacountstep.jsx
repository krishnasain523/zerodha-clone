const steps = [
  {
    title: '01',
    description: 'Enter the requested details'
  },
  {
    title: '02',
    description: 'Complete e-sign & verification'
  },
  {
    title: '03',
    description: 'Start investing!'
  }
]

export default function Openacountstep () {
  return (
    <>
      <section className='w-full bg-[#fbfbfb] p-5 lg:p-8 mt-15'>
        <h1 className='text-[24px] text-[#424242] font-semibold text-center mb-10 '>
          Steps to open a demat account with Zerodha
        </h1>
        <div className='flex flex-col lg:flex-row max-w-6xl justify-center px-2 lg:px-10 mx-auto'>
          <div className='w-full'>
            <img
              src='/images/steps-acop.svg'
              className='w-full md:p-30 lg:w-[432px] lg:p-0'
              alt=''
            />
          </div>
          <div className='w-full py-10 text-[20px] font-semibold text-[#424242]'>
            {steps.map((items, index) => (
              <div className='mb-10 '>
                <div className='flex gap-3 '>
                  <div className='border-2 w-[35px] h-[35px] rounded-[50%] text-center font-medium bg-white border-[#ddd] text-[#666666] text-[18px]'>
                    {items.title}
                  </div>
                  <p>{items.description}</p>
                </div>
                <hr className='mt-5 w-[350px] text-[#ddd]' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
