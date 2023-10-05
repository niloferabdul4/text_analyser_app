import React from 'react'

const Topbar = () => {

    const items=[{name:'Words',count:0},
                {name:'Characters',count:0},
                {name:'Sentences',count:0},
                {name:'Paragraphss',count:0},
                {name:'Pronouns',count:0},
                {name:'Words',count:0}
]
  return (
    <div>
      {items.map(item=>{return <>
      <h2>{item.name}</h2>
      <h2>{item.count}</h2>
      
      </>})}
    </div>
  )
}

export default Topbar
