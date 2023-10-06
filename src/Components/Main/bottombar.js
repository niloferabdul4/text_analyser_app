import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'

const Bottombar = () => {
    const {state:{longestWord}}=useContext(AppContext)
    const bottomResultBar = [
        {
          title: 'Average Reading Time:',
          value: '-',
        },
        {
          title: 'Longest word:',
          value: longestWord,
        },
      ]

  
    
  return (
    <div>
    <div className="bottom-result-bar">
      {bottomResultBar.map((item) => (
        <div className="result-box" key={item.title}>
          <span className="box-title">{item.title}</span>
          <p className="box-value">{item.value}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Bottombar
