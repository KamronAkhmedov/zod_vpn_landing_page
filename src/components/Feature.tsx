import { useMemo } from 'react'
import getScrollAnimation from '../utils/getScrollAnimation'
import AnimationWrapper from '../layout/AnimationWrapper'
import FeatureImg from '../assets/feature-image.png'
import { FEATURES } from '../constants'
import { motion } from 'framer-motion'

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto' id='feature'>
      <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12'>

        {/* Left side */}
        <AnimationWrapper className='flex w-full justify-end'>
          <motion.div
            className='h-full w-full p-4'
            variants={scrollAnimation}
          >
            <img
              src={FeatureImg}
              height={414}
              width={508}
            />
          </motion.div>
        </AnimationWrapper>

        {/* Right side */}
        <AnimationWrapper>
          <motion.div
            className='flex flex-col gap-5 items-end justify-center ml-auto w-full lg:w-9/12'
            variants={scrollAnimation}
          >
            <h3 className='text-3xl lg:text-4xl font-medium leading-relaxed text-black-600'>
              We Provide Many Features You CAn Use
            </h3>
            <p className='my-2 text-gray-400'>
              You can explore the features that we provide with fun and have their own functions each feature.
            </p>
            <ul className='text-gray-400 self-start list-inside ml-8 flex flex-col gap-4'>
              {FEATURES.map((item, i) => (
                <motion.li
                  key={i}
                  className='relative circle-check custom-list'
                  custom={{ duration: 2 + i }}
                  variants={scrollAnimation}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2
                    }
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  )
}

export default Feature