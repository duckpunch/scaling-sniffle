import React from 'react';
import godash from 'godash';


export default class BoardPosition extends React.Component {
    render() {
        const position = [];
        const {
            stone, topEdge, bottomEdge, leftEdge, rightEdge, starPoint
        } = this.props;

        if (!bottomEdge) {
            position.push(<line x1='8' y1='8' x2='8' y2='16' stroke='black' key='bottom'/>);
        }
        if (!topEdge) {
            position.push(<line x1='8' y1='0' x2='8' y2='8' stroke='black' key='top'/>);
        }
        if (!leftEdge) {
            position.push(<line x1='0' y1='8' x2='8' y2='8' stroke='black' key='left'/>);
        }
        if (!rightEdge) {
            position.push(<line x1='8' y1='8' x2='16' y2='8' stroke='black' key='right'/>);
        }
        if (starPoint) {
            position.push(<rect x='6' y='6' width='4' height='4' key='star'/>);
        }

        if (stone) {
            position.push(<circle cx='8' cy='8' r='7' className='stone-border' key='stone-border'/>);
            position.push(<circle cx='8' cy='8' r='6' className={stone} key='stone'/>);
        }

        return <svg className='board-position'>{position}</svg>;
    }
}


BoardPosition.propTypes = {
    stone: React.PropTypes.string.isRequired,
    topEdge: React.PropTypes.bool.isRequired,
    bottomEdge: React.PropTypes.bool.isRequired,
    leftEdge: React.PropTypes.bool.isRequired,
    rightEdge: React.PropTypes.bool.isRequired,
    starPoint: React.PropTypes.bool.isRequired,
}
