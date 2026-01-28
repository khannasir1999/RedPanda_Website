import { Goggleicon } from "../../icons"

const Goggleratings = () => {
  return (
    <div className='bg-white p-3 rounded-xl flex gap-2 items-center cursor-pointer border-t-4 border-t-[#3DA755] max-w-[360px] h-[108px]'>
      <div>
        <Goggleicon className="w-[50px] h-[50px] md:w-[3.6vw] md:h-[3.6vw] 2xl:w-[7vh] 2xl:h-[7vh]" />
      </div>
      <div>
        <p className="text-[18px] md:text-[1.3vw] 2xl:text-[2.5vh] text-[#1C1C1C99] font-bold ">Google Rating</p >
        <p className="text-[13px] md:text-[1vw] 2xl:text-[2vh] text-[#1C1C1C99]">See all our reviews</p>
      </div>
    </div>
  )
}

export default Goggleratings