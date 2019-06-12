import React, { Component } from "react";
import { number, arrayOf, object } from "prop-types";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import {
  defaultCellRangeRenderer,
  Grid,
  WindowScroller,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized";
import { getItemColor } from "../../utils";
import VirtualCard from "./VirtualCard";

const sizes = ["Small", "Default", "Large", "Random"];
const dimensions = {
  [sizes[0]]: { width: 100, height: 200, label: sizes[0] },
  [sizes[1]]: { width: 150, height: 300, label: sizes[1] },
  [sizes[2]]: { width: 215, height: 400, label: sizes[2] }
};

export default class WithDynamicCardSize extends Component {
  static propTypes = {
    distance: number,
    collection: arrayOf(object).isRequired
  };
  static defaultProps = {
    distance: 20
  };

  visibleRowsRange = null;
  Grid = React.createRef();
  state = this.getState();

  onSelectItemSize(size) {
    const state = this.getState(size);
    this.setState(state, () => {
      // positioning cells after dimensions recalculating
      this.Grid.current.recomputeGridSize();
    });
  }

  getState(size) {
    const itemSize = size ? dimensions[size] : dimensions["Default"];
    const columnWidth = this.getColumnWidth(itemSize);
    const estimatedRowHeight = this.getRowHeight(itemSize);
    const useAutoHeight = itemSize.label === sizes[3];
    return {
      itemSize,
      columnWidth,
      estimatedRowHeight,
      useAutoHeight,
      cache: this.getCache(columnWidth, estimatedRowHeight, useAutoHeight)
    };
  }

  getCache(defaultWidth, defaultHeight, useAutoHeight) {
    let config = {
      defaultWidth,
      fixedWidth: true,
      keyMapper: () => 1 // recommended optimization
    };
    if (!useAutoHeight) {
      config = {
        ...config,
        defaultHeight,
        fixedHeight: true
      };
    }
    return new CellMeasurerCache(config);
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

  cellRangeRenderer = props => {
    const children = defaultCellRangeRenderer(props);
    this.rowStartIndex = props.rowStartIndex;
    this.rowStopIndex = props.rowStopIndex;
    return children;
  };

  cellRenderer(columnCount, columnWidth) {
    return ({
      columnIndex,
      key,
      rowIndex,
      style,
      isScrolling,
      isVisible,
      parent
    }) => {
      const { collection } = this.props;
      const {
        itemSize: { width, height }
      } = this.state;
      const index = rowIndex * columnCount + columnIndex;
      const color = getItemColor(index);
      const item = collection[index];
      let content = null;
      if (index >= collection.length) {
        return content;
      }
      // For performance optimization we should show a placeholder when scrolling
      else if (
        (isScrolling && !isVisible) ||
        // that is to aoivd replacing items, which are right now in the DOM, with placeholder
        (isScrolling &&
          (rowIndex < this.visibleRowsRange.rowStartIndex ||
            rowIndex > this.visibleRowsRange.rowStopIndex))
      ) {
        content = (
          <VirtualCard
            style={{
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
            style={{
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
      return (
        <CellMeasurer
          cache={this.state.cache}
          columnIndex={columnIndex}
          key={key}
          parent={parent}
          rowIndex={rowIndex}
        >
          <div
            style={{
              ...style,
              width: columnWidth
            }}
          >
            {content}
          </div>
        </CellMeasurer>
      );
    };
  }

  render() {
    const {
      columnWidth,
      itemSize,
      estimatedRowHeight,
      useAutoHeight,
      cache
    } = this.state;
    return (
      <div>
        <UncontrolledDropdown
          setActiveFromChild
          style={{ display: "flex", marginBottom: "20px" }}
        >
          <DropdownToggle caret>{itemSize.label}</DropdownToggle>
          <DropdownMenu>
            {sizes.map(size => (
              <DropdownItem
                key={size}
                disabled={size === sizes[3]}
                onClick={() => this.onSelectItemSize(size)}
              >
                {size}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
        <WindowScroller>
          {({ height, isScrolling, scrollTop }) => (
            <AutoSizer disableHeight>
              {({ width }) => {
                const columnCount = this.getColumnCount(width, columnWidth);
                const rowCount = this.getRowCount(columnCount);
                const cellRenderer = this.cellRenderer(
                  columnCount,
                  columnWidth
                );
                const rowHeight = useAutoHeight
                  ? cache.rowHeight
                  : estimatedRowHeight;
                return (
                  <Grid
                    ref={this.Grid}
                    autoHeight
                    isScrolling={isScrolling}
                    scrollTop={scrollTop}
                    deferredMeasurementCache={cache}
                    estimatedRowSize={estimatedRowHeight}
                    cellRenderer={cellRenderer}
                    cellRangeRenderer={this.cellRangeRenderer}
                    scrollingResetTimeInterval={0}
                    columnCount={columnCount}
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
      </div>
    );
  }
}
