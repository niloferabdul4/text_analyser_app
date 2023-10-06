import React, { useContext} from 'react'
import { AppContext } from '../../Context/AppContextProvider'

const Topbar = () => {
  const {state:{words,characters,sentences,paragraphs,pronouns}}=useContext(AppContext)
 
//console.log(words)
const topbar_items=[{name:'Words',value:words},
                    {name:'Characters',value:characters},
                    {name:'Sentences',value:sentences},
                    {name:'Paragraphss',value:paragraphs},
                    {name:'Pronouns',value:pronouns}

]
  return (
    <>
       <div className="top-bar">
      {topbar_items.map((item) => (
        <div className="top-box" key={item.name}>
          <span className="box-title">{item.name}</span>
          <span className="box-value">{item.value}</span>
        </div>
      ))}
    </div>
    </>
  )
}

export default Topbar
