import React from 'react'
import AnimationWrapper from '../layout/AnimationWrapper'

const Hero = () => {
  return (
    <div className='max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto' id='about'>
      <AnimationWrapper>
        <div className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16  '>
          <div className='bg-primary-400'>hello world</div>
          <div className='bg-gray-500'>i am image</div>
        </div>
      </AnimationWrapper>
      Hero
    </div>
  )
}

export default Hero