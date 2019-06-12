import React, { Component } from "react";
import { number, arrayOf, object, shape } from "prop-types";
import {
  defaultCellRangeRenderer,
  InfiniteLoader,
  Grid,
  AutoSizer,
  WindowScroller
} from "react-virtualized";
import { getItemColor } from "../../utils";
import VirtualCard from "./VirtualCard";
import { arrayUniq } from "../../utils";

const STATUS_LOADING = 1;
const STATUS_LOADED = 2;

export default class WithInfiniteLoader extends Component {
  static propTypes = {
    distance: number,
    dimensions: shape({
      width: number,
      height: number
    }),
    collection: arrayOf(object).isRequired
  };
  static defaultProps = {
    distance: 20,
    dimensions: { width: 150, height: 300 }
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
      data: {
        totalCount: 0,
        items: []
      },
      loading: true,
      loadedRowsMap: {}
    };
  }

  render() {
    const { columnWidth, rowHeight } = this.state;
    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        rowCount={this.state.data.totalCount || 30}
      >
        {({ onRowsRendered, registerChild }) => {
          this.onRowsRendered = onRowsRendered;
          return (
            <WindowScroller>
              {({ height, isScrolling, scrollTop }) => (
                <AutoSizer disableHeight>
                  {({ width }) => {
                    this.columnCount = this.getColumnCount(width, columnWidth);
                    const rowCount = this.getRowCount(this.columnCount);
                    const cellRenderer = this.cellRenderer(this.columnCount);
                    return (
                      <Grid
                        autoHeight
                        onSectionRendered={this.onSectionRendered}
                        ref={registerChild}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                        cellRenderer={cellRenderer}
                        cellRangeRenderer={this.cellRangeRenderer}
                        columnCount={this.columnCount}
                        columnWidth={columnWidth}
                        rowCount={rowCount}
                        rowHeight={rowHeight}
                        overscanRowCount={3}
                        height={height}
                        width={width}
                      />
                    );
                  }}
                </AutoSizer>
              )}
            </WindowScroller>
          );
        }}
      </InfiniteLoader>
    );
  }

  loadMoreRows = async ({ startIndex, stopIndex }) => {
    this.setState({
      loadedRowsMap: this.getLoadedRowsMap({
        startIndex,
        stopIndex,
        status: STATUS_LOADING
      })
    });
    const data = await new Promise(ok => {
      setTimeout(() => {
        const items = this.props.collection.slice(startIndex, stopIndex + 1);
        ok({
          items: arrayUniq([...this.state.data.items, ...items]),
          totalCount: this.props.collection.length
        });
      }, 400);
    });

    this.setState({
      data,
      loadedRowsMap: this.getLoadedRowsMap({
        startIndex,
        stopIndex,
        status: STATUS_LOADED,
      })
    });
  };

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
    return Math.ceil((this.state.data.totalCount || 30) / columnCount);
  }

  cellRangeRenderer = props => {
    const children = defaultCellRangeRenderer(props);
    this.rowStartIndex = props.rowStartIndex;
    this.rowStopIndex = props.rowStopIndex;
    return children;
  };

  cellRenderer(columnCount) {
    return ({ columnIndex, key, rowIndex, style, isScrolling, isVisible }) => {
      const {
        dimensions: { width, height },
      } = this.props;
      const {
        data: { items, totalCount },
        loadedRowsMap,
      } = this.state;
      const index = rowIndex * columnCount + columnIndex;
      let content = null;
      if (index >= totalCount) {
        return content;
      }

      const color = getItemColor(index);
      const item = items[index];
      const isLoading = loadedRowsMap[index] === STATUS_LOADING;
      // For performance optimization we should show a placeholder when scrolling
      if (
        isLoading ||
        (isScrolling && !isVisible) ||
        // that is to aoivd replacing items, which are right now in the DOM, with placeholder
        (isScrolling &&
          (rowIndex < this.visibleRowsRange.rowStartIndex ||
            rowIndex > this.visibleRowsRange.rowStopIndex))
      ) {
        content = (
          <VirtualCard
            key={key}
            style={{
              ...style,
              backgroundColor: "#374046",
              width,
              height
            }}
          >
            Loading...
          </VirtualCard>
        );
      } else {
        content = (
          <VirtualCard
            key={key}
            style={{
              ...style,
              backgroundColor: color,
              width,
              height
            }}
          >
            {item}
          </VirtualCard>
        );
      }
      // To track items , which are already in the DOM to avoid replacing
      // them with placeholder when scrolling
      this.visibleRowsRange = {
        rowStopIndex: this.rowStopIndex,
        rowStartIndex: this.rowStartIndex
      };
      return content;
    };
  }

  isRowLoaded = ({ index }) => {
    const { loadedRowsMap } = this.state;
    return !!loadedRowsMap[index]; // STATUS_LOADING or STATUS_LOADED
  };

  getLoadedRowsMap({ startIndex, stopIndex, status }) {
    let tempMap = {};
    const { loadedRowsMap } = this.state;
    for (let i = startIndex; i <= stopIndex; i++) {
      tempMap[i] = status;
    }
    return { ...loadedRowsMap, ...tempMap };
  }

  onSectionRendered = ({
    columnStartIndex,
    columnStopIndex,
    rowStartIndex,
    rowStopIndex
  }) => {
    const startIndex = rowStartIndex * this.columnCount + columnStartIndex;
    const stopIndex = rowStopIndex * this.columnCount + columnStopIndex;
    this.onRowsRendered({
      startIndex,
      stopIndex
    });
  };
}
