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
      // setCounter(counter)
      // setCounter(counter) in this it will not work because it will not update the state immediately
      // setCounter(counter)


      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1); 
      // setCounter((prevCounter) => prevCounter + 1); in this it will work because it will update the state immediately
      
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
