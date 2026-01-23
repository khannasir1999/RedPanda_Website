const Colorcomp = ({ color }: { color: string }) => {
    return (
        <div className={`w-[90px] h-[90px] rounded-full cursor-pointer`} style={{ backgroundColor: color }} />
    )
}

export default Colorcomp