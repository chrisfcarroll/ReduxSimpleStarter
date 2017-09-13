import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

const average = (data)=> data.map( (x) => parseFloat(x) ).reduce( (t,i)=> t+i ) / data.length ;

export default ({data,colour,unitsSymbol})=>
  (<div>
    <Sparklines data={data} height={60} className="weather">
      <SparklinesLine color={colour}/>
      <SparklinesReferenceLine type="mean"/>
    </Sparklines>
    <div>{average(data)} {unitsSymbol}</div>
  </div>)