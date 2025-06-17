import {useState} from 'react';

function App() {
  let [counter, setCounter] = useState(0)



  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log(counter);
    
  }

  const subtractValue = () => {
    counter = counter - 1;
    setCounter(counter)
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
