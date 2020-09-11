

const initialState = [
    {
        name:"New Feature",
        color:"green"
    },
    {
        name:"Bug",
        color:"red"
    }
]

const labelReducer =(state = initialState ,action) =>{
  switch(action.type){
    default:
        return state
  }  
}

export default labelReducer;