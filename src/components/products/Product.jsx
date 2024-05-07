import ShopNow from "../button/ShopNow"
import Carousel from "./Carousel"

const Product = () => {
  return (
    <div id="product" className="relative h-[20rem] ">
      <div className="absolute inset-0 bg-gradient-to-r from-[#61CE70] to-[#6EC1DA] opacity-[60%] z-0"></div>
      
      <div className="z-50 relative pt-5 ">
        <section className="text-[24px] md:text-[44px] text-center">
          <p className="font-[300]">FIND YOUR</p>
          <p className="font-[700] italic">FAVORITE PRODUCT</p>
        </section>
        <section >
          <Carousel/>
        </section>
        <section className="absolute top-[30rem] md:top-[34rem] right-[30%] min-[425px]:right-[35%] md:right-[43%] lg:right-[44%] 2xl:right-[48%]">
          <ShopNow/>
        </section>
      </div>
      
    </div>
  )
}
export default Product

// className="absolute top-28 md:top-44 min-[1440px]:right-[15%] 2xl:right-[37%] "