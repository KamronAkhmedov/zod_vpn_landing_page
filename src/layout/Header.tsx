import { useEffect, useState } from 'react'
import LogoVpn from '../assets/logo.svg'
import { Link as LinkScroll } from 'react-scroll'
import { NAV_LINK, NAV_MOB_LINKS } from '../constants'

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('')
  const [scrollAvtive, setScrollAvtive] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollAvtive(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${scrollAvtive ? 'shadow-md pt-0' : 'pt-4'}`}
      >
        <nav className='max-w-screel-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>

          <div className='col-start-1 col-end-2 flex items-center'>
            <img src={LogoVpn} alt="logo" />
          </div>

          <ul className='hidden lg:flex col-start-4 col-end-8 text-gray-400 items-center'>
            {NAV_LINK.map((item, i) => (
              <LinkScroll
                key={i}
                activeClass='active'
                to={item}
                smooth
                duration={1000}
                onSetActive={() => setActiveLink(item)}
                className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${activeLink === item
                  ? 'text-primary-400 animation-active'
                  : 'text-gray-400 hover:text-primary-400'
                  }`}
              >
                {item}
              </LinkScroll>
            ))}
          </ul>
        </nav>

        {/* Mobile navigation */}
        <nav className='fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t '>
          <div className='bg-white-500 sm:px-3'>
            <ul className='flex w-full justify-between items-center text-gray-400'>
              {NAV_MOB_LINKS.map((item, i) => (
                <LinkScroll
                  key={i}
                  activeClass='active'
                  to={item.title}
                  smooth
                  spy
                  duration={1000}
                  onSetActive={() => setActiveLink(item.title)}
                  className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${activeLink === item.title
                    ? 'border-primary-400 text-primary-400'
                    : 'border-transparent'
                    }`}
                >
                  {item.svg}
                  {item.title}
                </LinkScroll>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header