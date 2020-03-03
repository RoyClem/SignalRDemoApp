import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCount } from '../actions';

class Home extends Component {

  render() {
      console.log("1", this.props.count);
      return (
        <div>
              <h4>Hello, SignalR and Redux</h4>
              <div>value from signalr: {this.props.count} </div>
      </div>
    );
  }
}

// called when redux updates the store
function mapStateToProps(state) {
   // console.log("state:", state.counterReducer.count);
    return {
        count: state.counterReducer.count
    };
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
    updateCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);