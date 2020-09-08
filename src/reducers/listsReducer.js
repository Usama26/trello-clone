import { CONSTANTS } from "../actions"

var listID = 2;
var cardID = 5;
const initialState = [
    {
        title: "Last Episode",
        id: `list-${0}`,
        cards: [{
            id: `card-${0}`,
            text: "We Are Testing It Right Now"
        }, {
            id: `card-${1}`,
            text: "Thats the second one"
        }]
    },
    {
        title: "New Episode",
        id: `list-${1}`,
        cards: [{
            id: `card-${2}`,
            text: "This is The First Card Of Second List"
        }, {
            id: `card-${3}`,
            text: "This is The Second Card Of Second List"
        }, {
            id: `card-${4}`,
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
                id: `list-${listID}`
            }
            listID += 1;
            return [...state, newList]

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            }
            cardID += 1;

            const newState = state.map((list) => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }
                else {
                    return list
                }
            });
            return newState;
        }

        case CONSTANTS.DRAG_HAPPEDED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIdIndexStart,
                droppableIdIndexEnd,
                draggableId } = action.payload;


            const newState = [...state];
            // IN THE SAME LIST
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIdIndexStart, 1)
                list.cards.splice(droppableIdIndexEnd, 0, ...card)
            }
            // Other List
            if(droppableIdStart !== droppableIdEnd){

            }
            return newState;

        default:
            return state;
    }
}

export default listReducer;