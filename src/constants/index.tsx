import Feature from "../components/svgCompo/feature"
import Info from "../components/svgCompo/info"
import Pricing from "../components/svgCompo/pricing"
import Testimonial from "../components/svgCompo/testimonial"
import userIco from '../assets/icon/heroicons_sm-user.svg'
import locationIco from '../assets/icon/gridicons_location.svg'
import serverIco from '../assets/icon/bx_bxs-server.svg'
import Faceebook from '../assets/icon/facebook.svg'
import Twitter from '../assets/icon/twitter.svg'
import Instagram from '../assets/icon/instagram.svg'
import Package from '../assets/package.png'
import People1 from '../assets/people-1.png'
import People2 from '../assets/people-2.png'
import People3 from '../assets/people-3.png'
import People4 from '../assets/people-4.png'



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
    icon: userIco,
  },
  {
    name: 'Locations',
    number: '20',
    icon: locationIco,
  },
  {
    name: 'Server',
    number: '50',
    icon: serverIco,
  },
]

export const SOCIALS = [Faceebook, Twitter, Instagram]

export const PRODUCT = ['download', 'pricing', 'location', 'server', 'countries', 'blog']

export const ENGAGE = ['zod VPN?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service']

export const FEATURES = [
  'Powerfull online protection.',
  'Internet without borders.',
  'Supercharged VPN',
  'No specific time limits.'
]

export const PRICING_CARD = [
  {
    image: Package,
    plan: 'Free Plan',
    possib: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices'
    ],
    price: 'Free'
  },
  {
    image: Package,
    plan: 'Standard Plan',
    possib: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
      'Connect Anyware'
    ],
    price: '$9',
    duration: 'mo'
  },
  {
    image: Package,
    plan: 'Premium Plan',
    possib: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
      'Get New Features'
    ],
    price: '$12',
    duration: 'mo'
  },

]

export const TESTIMONIAL = [
  {
    name: 'Viezh Robert',
    image: People1,
    city: 'Warsaw',
    country: 'Polland',
    rating: '4.5',
    testimoni: 'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. VPN Zod always the best.'
  },
  {
    name: 'Yessica Christy',
    image: People2,
    city: 'Shanxi',
    country: 'China',
    rating: '4.5',
    testimoni:
      'I like it because I like to travel far and still can connect with high speed.',
  },
  {
    name: 'Kim Young Jou',
    image: People3,
    city: 'Seoul',
    country: 'South Korea',
    rating: '4.5',
    testimoni:
      'This is very unusual for my business that currently requires a virtual private network that has high security.',
  },
  {
    name: 'John Anderson',
    image: People4,
    city: 'New York',
    country: 'USA',
    rating: '5',
    testimoni:
      'I like it because I like to travel far and still can connect with high speed.',
  },
]