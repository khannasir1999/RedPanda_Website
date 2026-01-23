import topbgimage from "../../../public/assets/images/getquote/getquotetopbg.png"
import bottombgimage from "../../../public/assets/images/getquote/getquotebottombg.png"

const GetQuoteBgImages = () => {
  return (
    <div className="pointer-events-none">
      <img 
        src={topbgimage} 
        alt="" 
        className="absolute object-cover top-0 right-0 z-[-1]"
      />
      
      <img 
        src={bottombgimage} 
        alt="" 
        className="absolute bottom-0 left-0 object-cover z-[-1]"
      />
    </div>
  )
}

export default GetQuoteBgImages