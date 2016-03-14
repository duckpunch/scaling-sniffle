import React from 'react';
import {connect} from 'react-redux';

import Board from '../components/Board';
import Timeline from '../components/Timeline';


class App extends React.Component {
    render() {
        return (<div>
            <div id='left-side'>
                <Board currentMove={this.props.currentMove} variation={this.props.variation}/>
            </div>
            <div id='right-side'>
                <Timeline currentMove={this.props.currentMove} variation={this.props.variation}/>
            </div>
        </div>);
    }
}


App.propTypes = {
    currentMove: React.PropTypes.number.isRequired,
    variation: React.PropTypes.object.isRequired,
};


export default connect(
    state => state
)(App);
