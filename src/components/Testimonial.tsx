import Stars from '../assets/icon/stars.svg'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TESTIMONIAL } from '../constants'

const Testimonial = () => {
  return (
    <>
      <Swiper
        spaceBetween={25}
        breakpoints={{
          480: {
            slidesPerView: 1
          },
          770: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className='h-[390px]'
      >
        {TESTIMONIAL.map((item, i) => (
          <SwiperSlide key={i}>
            <div className='flex justify-center p-4'>
              <div className='shadow hover:shadow-lg transition-all rounded-lg p-8  flex flex-col h-[288px]'>
                <div className='flex flex-col xl:flex-row w-full items-stretch xl:items-center'>
                  <div className='flex order-2 xl:order-1'>
                    <img
                      src={item.image}
                      height={50}
                      width={50}
                      className='rounded-full bg-primary-200'
                    />
                    <div className='flex flex-col ml-5 text-left'>
                      <p className='text-lg text-black-600 capitalize'>
                        {item.name}
                      </p>
                      <p className='text-sm text-gray-400 capitalize'>
                        {item.city}, {item.country}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-none items-center ml-auto order-1 xl:order-2'>
                    <p className='text-sm'>{item.rating}</p>
                    <span className='flex ml-4'>
                      <img src={Stars} alt="star" />
                    </span>
                  </div>
                </div>

                <p className='mt-5 text-left'>
                  {item.testimoni}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Testimonial