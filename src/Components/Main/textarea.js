import React, { useContext, useEffect,useRef } from 'react'
import { pronouns } from '../../pronounsData'
import { AppContext } from '../../Context/AppContextProvider'

const Textarea = () => {
    const {state:{allTexts},dispatch}=useContext(AppContext)
    const inputRef=useRef()
    
    useEffect(()=>{
      inputRef.current.focus()
    },[])
    

    
    const handleChange=(event)=>{
         const currentText=event.target.value
         dispatch({type:'ADD_TEXT',payload:currentText})
         const regX=/[.?!]/   
       

/*
        for(let i=0;i<=pronouns.length;i++)
        {
          for(let j=0;j<=allWords.length; j++)
          {          
            if(pronouns[i]===allWords[j])
            {
              let newPronounsArr=new Array()
              newPronounsArr.push(allWords[j])
              dispatch({type:'SET_PRONOUNS',payload:[...newPronounsArr].length})
            }
      
          }
         
          //
          
        }
*/
       
        
          
        if(currentText)
        {
          const allWords=currentText.split(' ')
          const longestWord=allWords.reduce((a,b)=>a.length>b.length? a:b)
          //  console.log(longestWord)
        dispatch({type:'SET_WORDS',payload:(currentText.trim().split(' ').length)})
        dispatch({type:'SET_CHARACTERS',payload:(currentText.trim().split('').length)})
        dispatch({type:'SET_SENTENCES',payload:(currentText.trim().split(regX).length)})
        dispatch({type:'SET_PARAGRAPHS',payload:(currentText.trim().split('\n').length)})    
        dispatch({type:'SET_ALL_TEXTS',payload:allWords})
        dispatch({type:'SET_LONGEST_WORD',payload:longestWord})
        }
        else return
    }

  return (

    <div>
         <textarea className="text-area" placeholder="Paste your text here..."  ref={inputRef} onChange={handleChange}/>   
    </div>
  )
}

export default Textarea
