const initialState = [
    {
        title:"Last Episode",
        id:0,
        cards:[{
            id:0,
            text:"We Are Testing It Right Now"
        },{
            id:1,
            text:"Thats the second one"
        }]
    }
]
const listReducer = (state = initialState,action)=>{
    switch (action.type){
        default:
            return state;
    }
}

export default listReducer;