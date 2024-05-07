import AdvIcon from "./AdvIcon"

const Adventage = () => {
  return (
    <div className="text-[#181818] mt-[5rem] flex flex-col items-center text-center gap-y-5 mb-10">
      <section>
        <p className="font-[700] text-[12px] md:text-[14px]">REMEDY CENTER</p>
        <p className="text-[24px] md:text-[44px] font-[300]">BEST DISPENSARY</p>
        <p className="text-[24px] md:text-[44px] font-[700] italic">& SMOKE SHOP</p>
      </section>
      <AdvIcon/>
      <section>
        <p className="text-[14px] font-[300] md:text-[16px] md:px-20 w-[300px] lg:w-[834px]">At <span className="font-[700]">Remedy Center</span>, we excel in integrity, quality, and care. We take the time to understand the needs of each of our customers and provide them with the assurance that our products are free of potentially harmful compounds.</p>
      </section>
    </div>
  )
}
export default Adventage