import { Goggleicon } from "../../icons"

const Goggleratings = () => {
  return (
    <div className='bg-white rounded-xl flex gap-2 items-center cursor-pointer border-t-4 border-t-[#3DA755] w-full max-w-[180px] sm:max-w-[280px] md:max-w-[360px] px-3 py-2 sm:py-3 min-w-0'>
      <div>
        <Goggleicon className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] md:w-[50px] md:h-[50px]" />
      </div>
      <div>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#1C1C1C99] font-bold">Google Rating</p>
        <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#1C1C1C99]">See all our reviews</p>
      </div>
    </div>
  )
}

export default Goggleratings