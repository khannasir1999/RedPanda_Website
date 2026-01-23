
const Designdatacomp = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="font-chillax font-[600] text-[16px] md:text-[1.1vw] leading-[120%] tracking-[-2%] uppercase text-white">{label}</p>
            <p className="font-chillax font-[400] text-[16px] md:text-[1.1vw] leading-[35px] md:leading-[2.5vw] tracking-[-3%] uppercase text-white">{value}</p>
        </div>
    )
}

export default Designdatacomp