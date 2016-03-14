import React from 'react';
import TimelineEvent from './TimelineEvent';


export default class Timeline extends React.Component {
    createTimelineEvents() {
        return <TimelineEvent />;
    }

    render() {
        return <div id='timeline'>
            {this.props.variation._variation.keySeq().map(this.createTimelineEvents)}
        </div>;
    }
}


Timeline.propTypes = {
    currentMove: React.PropTypes.number.isRequired,
    variation: React.PropTypes.object.isRequired,
};
