import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
const MainForm = () => {

    const navigate = useNavigate ();
    const [error, setError] =useState(" ")
    const [data, setData] = useState({
        name:"",
        room:""  
    })
    const handleChange= (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const validation =() =>{
        if(!data.name){
            setError("Please write your name")
            return false
        }
        if(!data.room){
            setError("Please Select Your Room")
            return false
        }
            setError("")
            return true
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        const isValid = validation();
        if(isValid){
            navigate(`/chat/${data.room}`, {state:data})
        }

    }
  return (
    <div className='px-3 py-4 shadow bg-white text-dark border rounded row'>
        <form onSubmit={handleSubmit}>
            <div className='from group mb-4'>
                <h2 className='text-warning mb-4'>Welcome to chat Club</h2>
            </div>
            <div className='from group mb-4'>
                <input type='text' className='form-contro bg-light' name="name" onChange={handleChange} placeholder='Enter Name'/>
            </div>

            <div className='from group mb-4'>
                <select className='form-select bg-light' name="room" onChange={handleChange}>
                    <option value=""> Select Room </option>
                    <option value="gaming"> Gaming </option>
                    <option value="coding"> Coding </option>
                    <option value="socialmedia"> Social Media </option>
                </select>
            </div>
                <button type='submit' className='btn btn-warning w-100 mb-2' >Submit</button>

                {error ? <small className='text-danger'>{error}</small> : ""}
        </form>
    </div>
  )
}

export default MainForm  