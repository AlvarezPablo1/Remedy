import Image from 'next/image'
import bgOneViewer from '../../../public/bgOne-Viewers.png'
import bgTwoViewer from '../../../public/bgTwo-Viewers.png'
import CarouselReviews from './CarouselReviews'

const Reviews = () => {
  return (
      <div className='  py-10 pb-16 relative'>

        <Image src={bgOneViewer} alt='background' className='absolute top-0 left-0'/>
        <Image src={bgTwoViewer} alt='background' className='absolute bottom-0 right-0 '/>
        <section className='text-black text-center text-[20px] pb-8 md:text-[44px]'>
          <p>HIGH-FLYING TESTIMONIALS</p>
          <p className='italic font-[700]'>FROM OUR CUSTOMERS</p>
        </section>
        <section className=''>
          <CarouselReviews/>
        </section>
      </div>
  )
}
export default Reviews


