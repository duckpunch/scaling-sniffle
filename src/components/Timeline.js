import React from 'react';
import TimelineEvent from './TimelineEvent';


export default class Timeline extends React.Component {
    createTimelineEvents(boardMap, index) {
        return <TimelineEvent
            key={index}
            variation={this.props.variation}
            updateCurrentMove={this.props.updateCurrentMove}
            moveNumber={index}/>;
    }

    render() {
        return <div id='timeline'>
            {this.props.variation._variation.keySeq().map(this.createTimelineEvents.bind(this))}
        </div>;
    }
}


Timeline.propTypes = {
    currentMove: React.PropTypes.number.isRequired,
    variation: React.PropTypes.object.isRequired,
    updateCurrentMove: React.PropTypes.func.isRequired,
};
