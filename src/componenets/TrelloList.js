import React from 'react'
import TrelloCard from './TrelloCard'
import Typography from '@material-ui/core/Typography';
import TrelloActionButton from './TrelloActionButtion'
import { Droppable, Draggable } from "react-beautiful-dnd";

import styled from "styled-components"

const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 3px;
width: 300px;
padding: 8px;
height: 100%;
margin-right: 8px;
`;

const Trellolist = ({ title, cards, listID, index }) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listID)} >
                        {(provided) => (
                            <div {...provided.droppableProps}  ref={provided.innerRef}>
                                   <Typography variant="subtitle2" gutterBottom>
                                {title}
                            </Typography>
                            {cards.map((card, index) => <TrelloCard key={card.id} index={index}
                                text={card.text} id={card.id} />)}
{provided.placeholder}
                        <TrelloActionButton listID={listID} />
                        
                        </div>
                    )}

                </Droppable>
                </ListContainer>

            )}

        </Draggable>
    )
}

// const styles = {
//     container: {
//         backgroundColor: '#dfe3e6',
//         borderRadius: 3,
//         width: 300,
//         padding: 8,
//         height: "100%",
//         marginRight: 8
//     }
// }

export default Trellolist