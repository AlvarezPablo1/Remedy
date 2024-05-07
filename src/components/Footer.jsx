import Image from "next/image"
import FooterLogo from '../../public/footerLogo.png'
const Footer = () => {
  return (
    <div className="bg-[#EC3CE6]  w-full py-5 pt-10 text-center relative">
      <section className="absolute top-[-1.5rem] left-1/2 md:left-24 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <Image src={FooterLogo} alt="logo"/>
      </section>
      <section className="text-white">
        <p className="font-[700]">Privacy Policy | Return Policy</p>
        <p className="font-[300]">Remedy Center © 2024 / All Rights Reserved</p>
      </section>
    </div>
  )
}
export default Footer