import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    WindowScroller,
    AutoSizer,
} from 'react-virtualized';

const itemStyle = {
    backgroundColor: 'rgb(244, 67, 54)',
    borderRadius: '0.5rem',
    height: '300px',
    marginBottom: '0.5rem',
    width: '100%',
    fontSize: '20px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
export default class VirtualCollectionBasic extends Component {
    static propTypes = {
        distance: PropTypes.number,
        dimensions: PropTypes.object,
        collection: PropTypes.arrayOf(PropTypes.object).isRequired,
    };
    static defaultProps = {
        distance: 20,
        dimensions: {width: 200, height: 400},
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
        return ({columnIndex, key, rowIndex, style}) => {
            const {
                collection,
                dimensions: {width, height},
            } = this.props;
            const index = (rowIndex * columnCount) + columnIndex;
            const item = collection[index];
            if (index >= collection.length) {
                return null;
            } 
            return (
                    <div
                        key={key}
                        style={{
                            ...style,
                            ...itemStyle,
                            width, 
                            height,
                        }}
                    >
                        {item}
                    </div>
            );
        };
    }

    render() {
        const {columnWidth, rowHeight} = this.state;
        return (
            <AutoSizer disableHeight>
                {
                    ({width}) => {
                        const columnCount = this.getColumnCount(width, columnWidth);
                        const rowCount = this.getRowCount(columnCount);
                        const cellRenderer = this.cellRenderer(columnCount, columnWidth);
                        return (
                            <WindowScroller>
                                {
                                    ({height, isScrolling, scrollTop}) => (
                                        <Grid
                                            autoHeight
                                            isScrolling={isScrolling}
                                            scrollTop={scrollTop}    
                                            cellRenderer={cellRenderer}
                                            cellRangeRenderer={this.cellRangeRenderer}
                                            columnCount={columnCount}
                                            columnWidth={columnWidth}
                                            rowCount={rowCount}
                                            rowHeight={rowHeight}
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