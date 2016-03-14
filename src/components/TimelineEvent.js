import React from 'react';
import {findDOMNode} from 'react-dom';
import scrollMonitor from 'scrollMonitor';


export default class TimelineEvent extends React.Component {
    componentDidMount() {
        const component = this;
        window.addEventListener('scroll', event => {
            const domNode = findDOMNode(component);
            const watcher = scrollMonitor.create(domNode);
            console.log(component.props.moveNumber, watcher.isInViewport, watcher.height);
        });
    }

    render() {
        return <div className='timeline-event'>move: {this.props.moveNumber}</div>;
    }
}


TimelineEvent.propTypes = {
    moveNumber: React.PropTypes.number.isRequired,
};
