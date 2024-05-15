import { motion } from 'framer-motion'

interface WrapperProps {
  children: any;
  className?: string
}

const AnimationWrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={({ once: true, amount: 0.8 })}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimationWrapper