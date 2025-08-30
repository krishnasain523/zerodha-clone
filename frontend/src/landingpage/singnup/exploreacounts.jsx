const box = [
  {
    title: 'Individual Account',
    discription: 'Invest in equity, mutual funds and derivatives',
    icon: <i class='fa-regular fa-circle-user'></i>
  },
  {
    title: 'HUF Account',
    discription: 'Make tax-efficient investments for your family',
    icon: <i class='fa-solid fa-users'></i>
  },
  {
    title: 'NRI Account',
    discription: 'Invest in equity, mutual funds, debentures, and more',
    icon: <i class='fa-solid fa-globe'></i>
  },
  {
    title: 'Minor Account',
    discription:
      'Teach your little ones about money & invest for their future with them',
    icon: <i class='fa-solid fa-person-breastfeeding'></i>
  },
  {
    title: 'Corporate / LLP/ Partnership',
    discription: 'Manage your business surplus and investments easily',
    icon: <i class='fa-solid fa-building'></i>
  }
]

export default function Exploreacounts () {
  return (
    <>
      <section className=' '>
        <h1 className='text-[#424242] text-[25px] font-semibold text-center mt-30 mb-10 '>
          Explore different account types
        </h1>
        <div className=' grid grid-cols-1  lg:grid-cols-3 gap-20 max-w-6xl mx-auto px-8 md:px-10 lg:px-0'>
          {box.map((items, index) => (
            <div className='w-full lg:w-[337px] h-[139px] lg:h-[168px] py-8  border-2  border-[#e1e1e1] hover:border-[#387ed1] rounded-sm '>
              <div className='flex flex-col gap-4  '>
                <div className='flex  items-center'>
                  <div className=' relative right-[20px] text-[#387ed1] text-[1.5rem] bg-[#eff6ff] w-[40px] h-[40px] text-center rounded-[50%]'>
                    {items.icon}
                  </div>
                  <h1 className='text-[18px] font-semibold  text-[#424242] '>
                    {items.title}
                  </h1>
                </div>
                <p className='px-10 text-[#666666]'>{items.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
