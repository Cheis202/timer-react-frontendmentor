import {useEffect, useState} from 'react'
import '../index.css'
import ContadorBox from './ContadorBox'
// eslint-disable-next-line react/prop-types
const Contador = () => {
  const [counter, setCounter] = useState({dia: 13, hs:23, min:59 , sec:59})
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => {
        let newSec = prev.sec - 1;
        let newMin = prev.min;
        let newHs = prev.hs;
        let newDia = prev.dia;

        if (newSec === -1) {
          newSec = 59;
          newMin -= 1;
        }

        if (newMin === -1) {
          newMin = 59;
          newHs -= 1;
        }

        if (newHs === -1) {
          newHs = 23;
          newDia -= 1;
        }

        return { dia: newDia, hs: newHs, min: newMin, sec: newSec };
      });
    }, 1000);

    return () => clearInterval(timer); // Limpia el temporizador al desmontar el componente
  }, []);

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