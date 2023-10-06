const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TEXT':
            return ({
                ...state,text:action.payload
            })
        case 'SET_WORDS':
            return({
                ...state,words:action.payload
            })
        case 'SET_CHARACTERS':
            return ({
                ...state,characters:action.payload
            })
         case 'SET_SENTENCES':
                return ({
                    ...state,sentences:action.payload
                })
    
        case 'SET_PARAGRAPHS':
            return({
                ...state,paragraphs:action.payload
            })
        
        case 'SET_PRONOUNS':
                return({
                    ...state,pronouns:action.payload
                })

        case 'SET_ALL_TEXTS':
          
            return({...state,allTexts:action.payload})

        case 'SET_LONGEST_WORD':
            return({
                ...state,longestWord:action.payload
            })
        default:
            return {...state}
    }
}
export default reducer;