import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Board from '../components/Board';
import Timeline from '../components/Timeline';


class App extends React.Component {
    render() {
        return (<div>
            <div id='left-side'>
                <Board currentMove={this.props.currentMove} variation={this.props.variation}/>
            </div>
            <div id='right-side'>
                <Timeline
                    currentMove={this.props.currentMove}
                    variation={this.props.variation}
                    updateCurrentMove={this.props.actions.updateCurrentMove}/>
            </div>
        </div>);
    }
}


App.propTypes = {
    currentMove: React.PropTypes.number.isRequired,
    variation: React.PropTypes.object.isRequired,
};


function updateCurrentMove(currentMove) {
    return {
        type: 'UPDATE_CURRENT_MOVE',
        currentMove,
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({updateCurrentMove}, dispatch)
    };
}


export default connect(
    state => state,
    mapDispatchToProps
)(App);
