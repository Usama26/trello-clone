import React, { Component } from 'react';
import Trellolist from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButtion';
import {DragDropContext} from 'react-beautiful-dnd';
import {sort} from "../actions"
import styled from "styled-components" 

const ListContainer = styled.div`
display: flex;
flex-direction: row;
`;
class App extends Component {

  onDragEnd= (result) =>{
     const {destination,source,draggableId} = result;

     if(!destination){
       return;
     }

     this.props.dispatch(sort(
       source.droppableId,
       destination.droppableId,
       source.indexm,
        destination.index,
        draggableId
     ))

  };

  render() {

    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <h2>Hello</h2>
        <ListContainer>
          {lists.map(list =>
            (
              <Trellolist
              listID={list.id}
              key={list.id} title={list.title} cards={list.cards} />
            ))}
          <TrelloActionButton list />
        </ListContainer>

      </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row'

  }
}

const mapStateToProps = state => ({
  lists: state.lists
})
export default connect(mapStateToProps)(App);
