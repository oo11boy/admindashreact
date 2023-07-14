import React, { useEffect, useState } from 'react'
import PriRoute from '../../Components/PriRoute'

export default function LoginPannel() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const emailval=(event)=>{
        setemail(event.target.value)
    }
    const passval=(event)=>{
        setpassword(event.target.value)
    }

    useEffect(()=>{
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
    },[email,password])

    const submitHandler=(event)=>{
        event.preventDefault();
       
    }
  return (
   <form action="">

    <input type="text" onChange={(event)=>emailval(event)} name="" id="" /> <br></br>
    <input type="text" onChange={(event)=>passval(event)}/>
    <br/>
    <input type="submit" onClick={submitHandler} />
   </form>
  )
}
