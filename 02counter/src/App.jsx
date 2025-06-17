import {useState} from 'react';

function App() {
  let [counter, setCounter] = useState(0)



  const addValue = () => {
    if (counter >= 20) {
      alert("Counter cannot be greater than 20");
      return;
    } else {
      counter = counter + 1;
      setCounter(counter)
      console.log(counter);
    }
    
    
  }

  const subtractValue = () => {
    if (counter <= 0) {
      alert("Counter cannot be less than 0");
      return;
    } else {
      counter = counter - 1;
      setCounter(counter)
    }
    
  } 


  
    
  
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={subtractValue}>Subtract value</button>

    </>
  )
}

export default App
