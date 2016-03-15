import React from 'react';
import BoardPosition from './BoardPosition';
import godash from 'godash';
import {map, range} from 'lodash';


export default class Board extends React.Component {
    get currentBoard() {
        return this.props.variation.getBoardAt(this.props.currentMove);
    }

    isStarPoint(x, y) {
        if (this.currentBoard.board_size === 19) {
            const xStar = x === 3 || x === 9 || x === 15;
            const yStar = y === 3 || y === 9 || y === 15;
            return xStar && yStar;
        } else {
            return false;
        }
    }

    renderRow(rowIndex) {
        const boardEdge = this.currentBoard.board_size - 1;
        return map(
            range(this.currentBoard.board_size),
            column => <BoardPosition
                key={column}
                topEdge={rowIndex == 0} bottomEdge={rowIndex == boardEdge}
                leftEdge={column == 0} rightEdge={column == boardEdge}
                starPoint={this.isStarPoint(column, rowIndex)}
                stone={this.currentBoard.positions.get(godash.Position(column, rowIndex), '')}/>
        );
    }

    render() {
        const rows = [];
        for (let i = 0; i < this.currentBoard.board_size; i++) {
            rows.push(<div key={i} className='row'>{this.renderRow(i)}</div>);
        }
        return <div id='board'>{rows}</div>;
    }
}


Board.propTypes = {
    currentMove: React.PropTypes.number.isRequired,
    variation: React.PropTypes.object.isRequired,
}
