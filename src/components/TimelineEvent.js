import React from 'react';
import {inRange} from 'lodash';
import {findDOMNode} from 'react-dom';
import scrollMonitor from 'scrollMonitor';


const MAGICAL_NUMBER = 10;


export default class TimelineEvent extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.scrollChange.bind(this));
    }

    componentWillUnmount() {
        this._domWatcher = null;
    }

    scrollChange() {
        const watcher = this.watcher;

        const domViewportTop = watcher.top - scrollMonitor.viewportTop;
        const domViewportBottom = domViewportTop + watcher.height;

        if (inRange(MAGICAL_NUMBER, domViewportTop, domViewportBottom)) {
            this.props.updateCurrentMove(this.props.moveNumber);
        }
    }

    get watcher() {
        if (!this._domWatcher) {
            this._domWatcher = scrollMonitor.create(findDOMNode(this));
        }
        return this._domWatcher;
    }

    render() {
        return <div className='timeline-event'>move: {this.props.moveNumber}, {this.props.variation.getCommentsAt(this.props.moveNumber)}</div>;
    }
}


TimelineEvent.propTypes = {
    moveNumber: React.PropTypes.number.isRequired,
    variation: React.PropTypes.object.isRequired,
    updateCurrentMove: React.PropTypes.func.isRequired,
};
