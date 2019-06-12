const BADGE_COLORS = [
  "#f44336",
  "#3f51b5",
  "#4caf50",
  "#ff9800",
  "#2196f3",
  "#374046",
  "#cddc39",
  "#2196f3",
  "#9c27b0",
  "#ffc107",
  "#009688",
  "#673ab7",
  "#ffeb3b",
  "#cddc39",
  "#795548"
];

export const tabs = [
  {
    title: "Basic",
    description: "Basic example of a grid with items having static size",
    source:
      "https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/Basic.js"
  },
  {
    title: "With placeholder",
    description:
      "Optimized example of using placeholder instead of a real item when scrolling. It's usefull for performance optimizations. Placeholder does not replace items which are already mounted into the DOM and appears only for items, which are outside of the visible part. If you scroll very fast - you will see the placeholder",
    source:
      "https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/PlaceholderOnScroll.js"
  },
  {
    title: "Dynamic item size",
    description:
      "Example of grid, where size of items can be changed, including non-static size. It's using CellMeasurer component to show how to calculate item size and CellMeasurerCache component for an optimization. (In general, CellMeasurer can be avoided for known static sizes)",
    source:
      "https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/WithDynamicCardSize.js"
  },
  {
    title: "Infinite Loader",
    description:
      "Example with InfiniteLoader component, loading items on scroll",
    source:
      "https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/WithInfiniteLoader.js"
  }
];

export const getItemColor = i => BADGE_COLORS[i % BADGE_COLORS.length];

export const arrayUniq = arr => {
  const temp = {};
  arr.forEach(item => {
    temp[item] = item;
  });
  return Object.values(temp);
};
