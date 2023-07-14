import {React,useEffect,useState} from 'react'
import { Navigate } from 'react-router-dom'
import userdata from './Database'
export default function PriRoute(props) {

    const {children} =props
   
const email='editkhone@gmail.com'
 const password=1234
const isLogin = userdata.some((user) => user.email === email && user.password === password);


return isLogin===true ? <>{children} </>: <Navigate to="/LoginPannel" />

}
