import {useState} from 'react'
import '../index.css'
import ContadorBox from './ContadorBox'
// eslint-disable-next-line react/prop-types
const Contador = () => {
  const [counter, setCounter] = useState({dia: 13, hs:23, min:59 , sec:59})
  const masTiempo =() =>{
    setCounter(prev => ({...prev, sec:prev.sec--}))
    try {
      if(counter.sec === 1){
        setCounter(prev => ({...prev, min: prev.min-=1}))
        setCounter(prev => ({...prev, sec:59 }))
  
        if(counter.min === 0){
          setCounter(prev => ({...prev, hs: prev.hs-=1}))
          setCounter(prev => ({...prev, min:59 }))
  
          if(counter.hs === 0){
            setCounter(prev => ({...prev, dia: prev.dia-=1}))
            setCounter(prev => ({...prev, hs:23 }))
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  setTimeout(masTiempo,1000)

    return(
      
        <div className='counter'>
          <ContadorBox text={"DAYS"} time={counter.dia}/>
          <ContadorBox text={"HOURS"} time={counter.hs}/>
          <ContadorBox text={"MINUTES"} time={counter.min}/>
          <ContadorBox text={"SECONDS"} time={counter.sec}/>
        </div>
    )
}
export default Contador