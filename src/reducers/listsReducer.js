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
    },
    {
        title:"New Episode",
        id:1,
        cards:[{
            id:0,
            text:"This is The First Card Of Second List"
        },{
            id:1,
            text:"This is The Second Card Of Second List"
        },{
            id:2,
            text:"This is The Third Card Of Second List"
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