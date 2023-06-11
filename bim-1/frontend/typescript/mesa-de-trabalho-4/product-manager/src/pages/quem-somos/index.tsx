import React from 'react'

import Header from '../../components/header';

const QuemSomos = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-row min-h-full'>
        <div className='sm:basis-1/3 lg:basis-1/4 h-screen min-h-full bg-primary flex items-center justify-center'>
          <h2 className='font-semibold text-2xl'>Quem Somos</h2>
        </div>
      <div className='px-10 pt-12 md:w-full lg:basis-2/3'>
        <h3 className='text-xl font-medium mb-8'>Quem somos</h3>
        <p className='pb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quae reprehenderit, exercitationem atque ipsam aliquam labore nesciunt sequi sapiente quidem ea odio, omnis quam quasi iure quia rerum porro suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quae reprehenderit, exercitationem atque ipsam aliquam labore nesciunt sequi sapiente quidem ea odio, omnis quam quasi iure quia rerum porro suscipit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quae reprehenderit, exercitationem atque ipsam aliquam labore nesciunt sequi sapiente quidem ea odio, omnis quam quasi iure quia rerum porro suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quae reprehenderit, exercitationem atque ipsam aliquam labore nesciunt sequi sapiente quidem ea odio, omnis quam quasi iure quia rerum porro suscipit.</p>
      </div>
      </div>
    </div>
  )
}

export default QuemSomos;
