import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hakashikatake').then(response => response.json()).then(data => setData(data))
    // }, [])
  return (
    <div className='text-center bg-gray-500 text-white text-3xl p-4'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Avatar" className='w-20 h-20 rounded-full mx-auto mt-4' />
        </div>

  )
}

export default Github


export const getGithubData = async () => {
    const response = await fetch('https://api.github.com/users/hakashikatake');
    return response.json();
}