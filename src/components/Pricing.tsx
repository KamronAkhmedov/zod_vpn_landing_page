import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import Map from '../assets/map.svg'
import getScrollAnimation from '../utils/getScrollAnimation'
import AnimationWrapper from '../layout/AnimationWrapper'
import { PRICING_CARD } from '../constants'
import Button from './Button'

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14'>
      <div className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flxe flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>

          {/* Title */}
          <AnimationWrapper>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed'>
              Choose Your Plan
            </h3>
            <p className='leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center'>
              Let&apos;s choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </AnimationWrapper>

          {/* Pricing cards */}
          <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6'>
            {PRICING_CARD.map((item, i) => (
              <AnimationWrapper key={i} className='flex justify-center'>
                <div className='flex flex-col justify-center items-center shadow-md hover:shadow-lg rounded-xl py-4 px-6 lg:px-12 xl:px-20 bg-white-500 w-full'>
                  <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                    <img
                      src={item.image}
                      width={145}
                      height={165}
                      alt={item.plan}
                    />
                  </div>
                  <p className='text-lg text-black-600 font-medium capitalize my-2 sm:my-7'>
                    {item.plan}
                  </p>
                  <ul className='flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-gray-400 flex-grow'>
                    {item.possib.map((item, i) => (
                      <li key={i} className='relative check custom-list my-2'>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                    <p className='text-2xl text-black-600 text-center mb-4'>
                      {item.price}
                    </p>
                    <Button>Select</Button>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing