import React, { useState } from 'react'
import './Home.css'
import Feature from '../../Components/WidjectHome/Features/Feature'
import { css } from '@emotion/react'
import Chart from '../../Components/Chart/Chart'
export default function Home() {
  return (
   <>
      <div className="rowHome">
          <Feature title='Revanue' price='2,415' precent={-11.4}/>
          <Feature title='Sales' price='4,415' precent={1.4}/>
          <Feature title='Cost' price='1,200' precent={24}/>
       
      </div>
  <div className="rowHome">
  <Chart></Chart>
  </div>
  <div className="rowHome">
  <Chart></Chart>
  </div>
  <div className="rowHome">
  <Chart></Chart>
  </div>
     

      </>
  
  )
}
