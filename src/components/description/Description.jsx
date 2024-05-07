import Image from "next/image"
import slogan from '../../../public/slogan.png'
import puppet from '../../../public/puppet.png'
import BtnDescription from "../button/BtnDescription"

const Description = () => {
  return (
    <>
    <div id="description" className="relative h-[36.3rem] md:h-auto md:px-2 lg:px-10 min-[1440px]:px-16 md:pb-5 ">
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#9747FF] to-[#6EC1DA] opacity-[60%] z-0"></div>

      <div className="z-50 relative pt-5">
        <section className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-start gap-y-5">
          <Image src={slogan} alt="slogan"/>
          <section>
            <p className="font-[200] text-[31px] lg:text-[64px]">FLOWER POWER</p>
            <p className="font-[700] text-[42px] lg:text-[78px] min-[1440px]:text-[88px] italic">EXPERIENCE</p>
          </section>
          <p className="font-[500] text-[16px] min-[1440px]:text-[20px] md:w-[360px] lg:w-[520px]">Feel relaxed, euphoric, happy, or however you want! Explore our rich flavors and enticing effects designed to suit every mood and moment.</p>
          <BtnDescription/>
        </section>
      </div>

      <div className="z-50 absolute min-[375px]:right-[2.5rem] min-[425px]:right-[4rem] md:right-0 min-[1440px]:right-10 md:top-[7rem] lg:top-[6rem] min-[1440px]:top-[3rem]">
      <Image src={puppet} alt="slogan" className="md:w-[25rem] lg:w-[30rem] min-[1440px]:w-[40rem]"/>
      </div>
    </div>
    </>
  )
}
export default Description