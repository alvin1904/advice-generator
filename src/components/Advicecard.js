import React, { useState, useEffect } from 'react'
import dividerpc from '../images/pattern-divider-desktop.svg'
import dividermobile from '../images/pattern-divider-mobile.svg'
import diceimg from '../images/icon-dice.svg'

function Advicecard(){
    const [loading, setLoading]=useState(true)
    const [advice, setAdvice]=useState({})
    useEffect(()=>{
        if(loading)
          fetch('https://api.adviceslip.com/advice')
              .then((response) => response.json())
              .then((data) => setAdvice(data.slip))
              .then(console.log("data fetched"))
        setLoading(false)    
    },[loading])

    const handleRefresh = ()=>{
        setLoading(true)
    }

    return <>
        <div className='advicecard'>
            <label className='adviceno'>advice #{advice.id}</label>
            <div className='advice'>"{advice.advice}"</div>
            <div className="divider">
                <img src={dividerpc} className="dividerpc"></img>
                <img src={dividermobile} className="dividermobile"></img>
            </div>
        </div>
        <div className='dice' onClick={handleRefresh}>
            <img src={diceimg} className="diceimg rotate"></img>
        </div>
    </>
    

}

export default Advicecard;