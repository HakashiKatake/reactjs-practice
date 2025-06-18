import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)


    const handleSubmit = (e)=> {
        e.preventDefault()
        setUser({username, password})

    }
  return (
    <div>
        <h2>Login</h2>
        <input
         value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }} 
         type='text'
          placeholder='username'
         />
        <input 
        value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        type='text' 
        placeholder='password'
        
         />
        <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded'>Login</button>
    </div>
  )
}

export default Login