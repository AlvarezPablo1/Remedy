import Image from 'next/image'
import adv1One from '../../../public/adventages/adOne.png'
import { adventageData } from './data'

const AdvIcon = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-y-5 md:gap-x-24'>
      {adventageData.map((data) =>{
        return(
          <section key={data.id} className='flex flex-col gap-y-5'>
            <Image src={data.img} alt='adventage' width={152} height={152}/>
            <p className='text-[16px] font-[700]'>{data.info}</p>
          </section>
        )
      })}
    </div>
  )
}
export default AdvIcon
