import React from 'react';
import {inRange} from 'lodash';
import {findDOMNode} from 'react-dom';
import scrollMonitor from 'scrollMonitor';


const MAGICAL_NUMBER = 10;


export default class TimelineEvent extends React.Component {
    componentDidMount() {
        const component = this;

        window.addEventListener('scroll', event => {
            const domNode = findDOMNode(component);
            const watcher = scrollMonitor.create(domNode);

            const domViewportTop = watcher.top - scrollMonitor.viewportTop;
            const domViewportBottom = domViewportTop + watcher.height;

            if (inRange(MAGICAL_NUMBER, domViewportTop, domViewportBottom)) {
                component.props.updateCurrentMove(component.props.moveNumber);
            }
        });
    }

    render() {
        return <div className='timeline-event'>move: {this.props.moveNumber}</div>;
    }
}


TimelineEvent.propTypes = {
    moveNumber: React.PropTypes.number.isRequired,
    updateCurrentMove: React.PropTypes.func.isRequired,
};
