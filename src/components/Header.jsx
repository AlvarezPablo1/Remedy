import SingUp from "./button/SingUp"

const Header = () => {
  return (
    <div className="bg-[#61CE70] flex flex-col md:flex-row md:justify-center md:gap-x-5 items-center gap-y-2 py-3 ">
      <p className="text-[12px] font-[800]">SUBSCRIBE & GET 10% OFF YOUR FIRST ORDER</p>
      <SingUp/>
    </div>
  )
}
export default Header