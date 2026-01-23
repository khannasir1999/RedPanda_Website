const Recommendationcard = () => {
    return (
        <div className="p-3 py-1 cursor-pointer rounded-lg flex flex-col h-full justify-between">
            <div>

                <h1 className="font-chillax font-medium text-[38px] md:text-[2.78vw] 2xl:text-[5vh] tracking-[-2.05px]">Highly Recommended</h1>
            </div>
            <div>
                <p className="font-chillax font-[400] text-[26px] md:text-[1.9vw] 2xl:text-[3.5vh]">Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​</p>
            </div>

            <div>
                <p className="text-[24px] md:text-[1.5vw] 2xl:text-[2.5vh] font-chillax font-semibold">Amir</p>
                <p className="text-[16px] md:text-[1vw] 2xl:text-[1.8vh] text-[#9EA2AE]">CEO</p>
            </div>
        </div>
    )
}

export default Recommendationcard