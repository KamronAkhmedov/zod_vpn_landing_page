import LogoVpn from '../assets/logo.svg'
import { ENGAGE, PRODUCT, SOCIALS } from '../constants'


const Footer = () => {
  return (
    <div className='bg-white-300 pt-44 pb-24'>
      <div className='max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12'>
        <div className=' row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start gap-4'>
          <img
            src={LogoVpn}
            alt="logo"
            className='h-10 w-auto'
          />
          <p className='mb-4'>
            <span className='font-medium'>Zod VPn</span> is a private virtual network that has unique features and has high security
          </p>
          <div className='flex w-full mt-2 mb-8 -mx-2'>
            {SOCIALS.map((icon, i) => (
              <div key={i} className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-primary-200'>
                <img src={icon} className='h-6 w-6' />
              </div>
            ))}
          </div>
          <p className='text-gray-400'>
            ©{new Date().getFullYear()} - Zod VPN
          </p>
        </div>

        <div className='row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col'>
          <p className='text-black-600 mb-4 font-medium text-lg'>Product</p>
          <ul className='text-gray-400 capitalize'>
            {PRODUCT.map((item, i) => (
              <li key={i} className='my-2 hover:text-primary-400 cursor-pointer transition-all'>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col'>
          <p className='text-black-600 mb-4 font-medium text-lg'>Engage</p>
          <ul className='text-gray-400 capitalize'>
            {ENGAGE.map((item, i) => (
              <li key={i} className='my-2 hover:text-primary-400 cursor-pointer transition-all'>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col'>
          <p className='text-black-600 mb-4 font-medium text-lg'>Earn Money</p>
          <ul className='text-gray-400'>
            <li className='my-2 hover:text-primary-400 cursor-pointer transition-all'>
              Affiliate
            </li>
            <li className='my-2 hover:text-primary-400 cursor-pointer transition-all'>
              Become Partner
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer