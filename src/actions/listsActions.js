import { CONSTANTS } from '../actions'


export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    }
}

export const sort = (droppableIdStart,
    droppableIdEnd,
    droppableIdIndexStart,
    droppableIdIndexEnd,
    draggableId) => {
    return {
        type: CONSTANTS.DRAG_HAPPEDED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIdIndexStart,
            droppableIdIndexEnd,
            draggableId
        }
    }
}