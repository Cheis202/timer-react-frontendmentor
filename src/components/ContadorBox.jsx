// eslint-disable-next-line react/prop-types
const ContadorBox = ({text,time}) => {



    return(
        <div className="counter-box">
          <div className="counter-box-number">
            <p className="number">{time}</p>            
          </div>
          <p className="counter-box-text">{text}</p>
        </div>
    )
 }


 export default ContadorBox