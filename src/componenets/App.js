import React , {Component}from 'react';
import Trellolist from './TrelloList';
import {connect} from 'react-redux';


class App extends Component {
  render(){

    const {lists} = this.props;
  return (
    <div className="App">
      <h2>Hello</h2>
      {lists.map(list=><Trellolist title={list.title} cards={list.cards} />)}
    </div>
  );
}
}

const mapStateToProps = state =>({
  lists:state.lists
})
export default connect(mapStateToProps) (App);
