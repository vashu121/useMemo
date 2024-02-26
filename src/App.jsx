import { useState,useMemo} from 'react'
import './App.css'

function App() {
  const [inputvalue, setInputvalue] = useState(1);
  const [counter, setcounter]=useState(0);

  let count= useMemo(()=>{
   console.log(inputvalue);
   let sum=0;
   for(let i=1;i<=inputvalue;i++) {
     sum=sum+i;
   }
   return sum;
  },[inputvalue])

  return (
    <>
      <input onChange={function(e) {
        setInputvalue(e.target.value)}}
        placeholder='write any number' /><br />
       <h4>sum from 1 to {inputvalue} is {count}</h4>
       <button onClick={function (){
        setcounter(counter+1);
       }}>counter is{counter}</button>

    </>
  )
}

export default App
