import { CONSTANTS } from "../actions"

var listID = 2;
var cardID = 3;
const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [{
            id: 0,
            text: "We Are Testing It Right Now"
        }, {
            id: 1,
            text: "Thats the second one"
        }]
    },
    {
        title: "New Episode",
        id: 1,
        cards: [{
            id: 0,
            text: "This is The First Card Of Second List"
        }, {
            id: 1,
            text: "This is The Second Card Of Second List"
        }, {
            id: 2,
            text: "This is The Third Card Of Second List"
        }]
    }
]
const listReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1;
            return [...state, newList]

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            }
            cardID += 1;

            const newState = state.map((list)=>{
                if(list.id === action.payload.listID){
                    return {
                        ...list,
                        cards:[...list.cards,newCard]
                    }
                }
                else {
                    return list
                }
            });
            return newState;
        default:
            return state;
    }
}

export default listReducer;