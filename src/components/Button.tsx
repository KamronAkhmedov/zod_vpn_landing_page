import React from 'react'
interface ButtonProps {
  children: React.ReactNode
  customClass?: string
  type?: string | 'secondary'
}

const Button = ({ type, children, customClass }: ButtonProps) => {
  const primary = `py-3 lg-py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-primary-400 hover:shadow-primary-md transition-all outline-none ${customClass}`

  const secondary = `font-medium tracking-wide py-2 px-5 sm:px-8 border border-primary-400 text-primary-400 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary-400 hover:text-white-500 transition-all hover:shadow-primary ${customClass}`

  return (
    <button
      type='submit'
      className={type === 'primary' ? primary : secondary}
    >
      {children}
    </button>
  )
}

export default Button