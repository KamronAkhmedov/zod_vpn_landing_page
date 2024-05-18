import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import Map from '../assets/map.svg'
import getScrollAnimation from '../utils/getScrollAnimation'
import AnimationWrapper from '../layout/AnimationWrapper'
import { PRICING_CARD } from '../constants'
import Button from './Button'
import Testimonial from './Testimonial'

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14'>
      <div className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flxe flex-col w-full text-center justify-center'>

        {/* PRICING */}
        <div className='flex flex-col w-full' id='pricing'>

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
                <motion.div
                  className='flex flex-col justify-center items-center shadow-md hover:shadow-lg rounded-xl py-4 px-6 lg:px-12 xl:px-20 bg-white-500 w-full'
                  variants={scrollAnimation}
                  whileHover={{
                    scale: 1.04,
                    transition: {
                      duration: 0.2
                    }
                  }}
                >
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
                      {item.price} {' '}
                      <span className='text-gray-400'>{item.duration && `/ ${item.duration}`}</span>
                    </p>
                    <Button>Select</Button>
                  </div>
                </motion.div>
              </AnimationWrapper>
            ))}
          </div>

          {/* VPN locations / Map */}
          <div className='flex flex-col w-full my-16'>
            <AnimationWrapper>
              <motion.h3
                className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto'
                variants={scrollAnimation}
              >
                Huge Global Network of Fast VPN
              </motion.h3>
              <motion.p
                className='leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12'
                variants={scrollAnimation}
              >
                See VPN everywhere to make easier for you when you move locations
              </motion.p>
            </AnimationWrapper>

            <AnimationWrapper>
              <motion.div
                className='w-full py-12 px-8 mt-16'
                variants={scrollAnimation}
              >
                <img src={Map} alt="map of the world" />
              </motion.div>
            </AnimationWrapper>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className='flex flex-col w-full my-16' id='testimonial'>
          <AnimationWrapper>
            <motion.h3
              className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 lg:w-4/12 mx-auto'
              variants={scrollAnimation}
            >
              Trusted by Thousands of Happy Customer
            </motion.h3>
            <motion.p
              className='leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12'
              variants={scrollAnimation}
            >
              These are the stories of our customers who have joined us with great pleasure when using this crazy feature
            </motion.p>
          </AnimationWrapper>

          <AnimationWrapper>
            <motion.div variants={scrollAnimation}>
              <Testimonial />
            </motion.div>
          </AnimationWrapper>

          <AnimationWrapper className='relative w-full mt-16'>
            <motion.div
              variants={scrollAnimation}
              custom={{ duration: 3 }}
            >
              <div className='absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500'>
                <div className='flex flex-col gap-8 text-center sm:text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0'>
                  <h5 className='text-black-600   text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium'>
                    Subscribe Now for <br />Get Special Features
                  </h5>
                  <p>Let&apos;s subscribe with us and find the fun</p>
                </div>
                <Button type='primary'>
                  Get Started
                </Button>
              </div>
              <div
                className='absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0'
                style={{ filter: 'blur(114px)' }}
              />
            </motion.div>
          </AnimationWrapper>
        </div>

      </div>
    </div>
  )
}

export default Pricing