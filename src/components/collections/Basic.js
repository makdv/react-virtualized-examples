import React, { Component } from 'react';
import { number, shape, arrayOf, object } from 'prop-types';
import {
    Grid,
    WindowScroller,
    AutoSizer,
} from 'react-virtualized';
import { getItemColor } from '../../utils';
import VirtualCard from './VirtualCard';

export default class Basic extends Component {
    static propTypes = {
        distance: number,
        dimensions: shape({
            width: number,
            height: number,
        }),
        collection: arrayOf(object).isRequired,
    };
    static defaultProps = {
        distance: 20,
        dimensions: { width: 150, height: 300 },
    };

    constructor(props) {
        super(props);
        const itemSize = props.dimensions;
        const columnWidth = this.getColumnWidth(itemSize);
        const rowHeight = this.getRowHeight(itemSize);
        this.state = {
            itemSize,
            columnWidth,
            rowHeight,
        };
    }

    getColumnWidth(size) {
        return size.width + this.props.distance;
    }

    getColumnCount(gridWidth, columnWidth) {
        return Math.floor(gridWidth / columnWidth);
    }

    getRowHeight(size) {
        return size.height + this.props.distance;
    }

    getRowCount(columnCount) {
        return Math.ceil(this.props.collection.length / columnCount);
    }

    cellRenderer(columnCount) {
        return ({ columnIndex, key, rowIndex, style }) => {
            const {
                collection,
                dimensions: { width, height },
            } = this.props;
            const index = (rowIndex * columnCount) + columnIndex;
            const color = getItemColor(index);
            const item = collection[index];
            if (index >= collection.length) {
                return null;
            }
            return (
                <VirtualCard
                    key={key}
                    style={{
                        ...style,
                        backgroundColor: color,
                        width,
                        height,
                    }}
                >
                    {item}
                </VirtualCard>
            );
        };
    }

    render() {
        const { columnWidth, rowHeight } = this.state;
        return (
            <AutoSizer disableHeight>
                {
                    ({ width }) => {
                        const columnCount = this.getColumnCount(width, columnWidth);
                        const rowCount = this.getRowCount(columnCount);
                        const cellRenderer = this.cellRenderer(columnCount);
                        return (
                            <WindowScroller>
                                {
                                    ({ height, isScrolling, scrollTop }) => (
                                        <Grid
                                            autoHeight
                                            isScrolling={isScrolling}
                                            scrollTop={scrollTop}
                                            cellRenderer={cellRenderer}
                                            columnCount={columnCount}
                                            columnWidth={columnWidth}
                                            rowCount={rowCount}
                                            rowHeight={rowHeight}
                                            estimatedColumnSizex
                                            overscanRowCount={3}
                                            height={height}
                                            width={width}
                                        />
                                    )
                                }
                            </WindowScroller>
                        );
                    }
                }
            </AutoSizer>
        );
    }
}