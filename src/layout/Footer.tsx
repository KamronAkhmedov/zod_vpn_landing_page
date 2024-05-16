import LogoVpn from '../assets/logo.svg'
import { SOCIALS } from '../constants'


const Footer = () => {
  return (
    <div className='bg-white-300 pt-44 pb-24'>
      <div className='max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12'>
        <div className='bg-gray-500 row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start gap-4'>
          <img
            src={LogoVpn}
            alt="logo"
            className='h-10 w-auto'
          />
          <p className='mb-4'>
            <span className='font-medium'>Zod VPn</span> is a private virtual network that has unique features and has high security
          </p>
          <div>
            {SOCIALS.map((icon, i) => (
              <div key={i} className=''>
                <img src={icon} className='h-6 w-6' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer