const Recommendationcard = () => {
    return (
        <div className="cursor-pointer flex flex-col h-full justify-between rounded-[20px] sm:rounded-[25.29px] bg-[#FFFFFF] w-full py-6 px-6 sm:py-8 sm:px-8 md:py-10 md:px-10 lg:py-[48px] lg:px-[48px] gap-4 sm:gap-5 md:gap-6 lg:gap-6">
            <div>
                <h1 className="font-chillax font-medium text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34.73px] leading-[1.4] sm:leading-[1.45] md:leading-normal lg:leading-[52.78px] tracking-[-1.2px] sm:tracking-[-1.5px] lg:tracking-[-1.85px] text-bg-black-100">
                    Highly Recommended
                </h1>
            </div>
            <div>
                <p className="font-chillax font-normal text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[26px] leading-[1.4] sm:leading-[1.45] md:leading-normal">Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.</p>
            </div>

            <div>
                <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-chillax font-semibold">Amir</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-grey-400 font-chillax">CEO</p>
            </div>
        </div>
    )
}

export default Recommendationcard