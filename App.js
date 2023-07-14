
import { useRoutes } from 'react-router-dom'
import TopHeader from './Components/TopHeader/TopHeader'
import routes from './routes'
import SideBar from './Components/SideBar/SideBar'
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';
import './App.css'
import { useState } from 'react';
export default function App() {
  const [Statusside,setStatussidebar]=useState(false)
  const closeclick=()=>{
     setStatussidebar(!Statusside)
  }
  let Router=useRoutes(routes)
  return (
    <>
     <TopHeader />

     <div className="container">
      <div className="row">
        
      <div className='mt-3'>
        {Statusside===true ?  <CloseIcon onClick={closeclick} /> :     <ListIcon onClick={closeclick}/>}
  
        
        </div>
      <div className={Statusside===true ?'sideBar' : 'd-false'}>
        
    <SideBar />
      </div>
      <div className={Statusside===false ? "w-100 Content" : "Content"} >
      {Router}
      </div>
      </div>
     </div>

    </>
  )
}
