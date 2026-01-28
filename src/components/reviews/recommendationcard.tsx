const Recommendationcard = () => {
    return (
        <div className="p-3 py-1 cursor-pointer flex flex-col h-full justify-between rounded-[25.29px] bg-[#FFFFFF] w-full py-[48px] px-[48px] ">
            <div>

                <h1 className="font-chillax font-medium text-[34.73px] leading-[52.78px] tracking-[-1.85px] text-bg-black-100 w-[367.6463px] h-[53px]">
                    Highly Recommended
                </h1>
            </div>
            <div>
                <p className="font-chillax font-normal text-[26px] md:text-[1.9vw] 2xl:text-[3.5vh]">Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.</p>
            </div>

            <div>
                <p className="text-[24px] md:text-[1.5vw] 2xl:text-[2.5vh] font-chillax font-semibold">Amir</p>
                <p className="text-[16px] md:text-[1vw] 2xl:text-[1.8vh] text-grey-400">CEO</p>
            </div>
        </div>
    )
}

export default Recommendationcard