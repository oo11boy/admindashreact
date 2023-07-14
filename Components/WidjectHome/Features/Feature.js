import React from 'react'
import './Feature.css'
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
export default function Feature(props) {
    const {title,price,precent}=props
  return (
    <div className='containerFeature'>
             <div className='rowfeature'>
           <div className='Featureitem'>
                   <div>{title}</div>

                   <div className='priceprecent'>
                   <div>${price}</div>
                   <div className='precentFeature'><div>{precent}</div> <div>{precent>0 ? <NorthIcon style={{color:'red'}}/> : <SouthIcon style={{color:'red'}} /> }</div> </div>
                   </div>
                  
                   <div className='Comparedfeature'>Compared To Last month</div>
           </div>
        
           </div>
    </div>
  )
}
