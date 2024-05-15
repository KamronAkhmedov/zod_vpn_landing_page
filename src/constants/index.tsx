import Feature from "../components/svgCompo/feature"
import Info from "../components/svgCompo/info"
import Pricing from "../components/svgCompo/pricing"
import Testimonial from "../components/svgCompo/testimonial"

export const NAV_LINK = ['about', 'feature', 'pricing', 'testimonial']

export const NAV_MOB_LINKS = [
  {
    title: 'about',
    svg: <Info />
  },
  {
    title: 'feature',
    svg: <Feature />
  },
  {
    title: 'pricing',
    svg: <Pricing />
  },
  {
    title: 'testimonial',
    svg: <Testimonial />
  },
]

export const LIST_USER = [
  {
    name: 'Users',
    number: '390',
    icon: '/assets/icon/heroicons_sm-user.svg',
  },
  {
    name: 'Locations',
    number: '20',
    icon: '/assets/icon/gridicons_location.svg',
  },
  {
    name: 'Server',
    number: '50',
    icon: '/assets/icon/bx_bxs-server.svg',
  },
]