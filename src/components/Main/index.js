import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
} from "reactstrap";
import classnames from "classnames";
import {
  Basic as BasicCollection,
  PlaceholderOnScroll,
  WithDynamicCardSize,
  WithInfiniteLoader,
} from "../collections";
import "./Main.scss";

const collection = Array(1000)
  .fill(1)
  .map((item, index) => index + 1);

const tabs = [
  {
    title: "Basic",
    description: "Basic example of a grid with items having static size",
    source:
      "https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/Basic.js"
  },
  {
    title: "Placeholder on scroll (optimized)",
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

const Main = () => {
  const [activeTab, setActiveTab] = useState(1);
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const activeTabObj = tabs[activeTab - 1];

  let Collection = BasicCollection;
  switch (activeTab) {
    case 1:
      Collection = BasicCollection;
      break;
    case 2:
      Collection = PlaceholderOnScroll;
      break;
    case 3:
      Collection = WithDynamicCardSize;
      break;
    case 4:
      Collection = WithInfiniteLoader;
      break;
    default:
      return (Collection = BasicCollection);
  }
  return (
    <main id="main">
      <Nav tabs>
        {tabs.map((tab, index) => (
          <NavItem key={index}>
            <NavLink
              className={classnames({ active: activeTab === index + 1 })}
              onClick={() => {
                toggle(index + 1);
              }}
            >
              {tab.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={activeTab}>
          <Jumbotron>
            {activeTabObj.description}
            <div>
              <a
                href={activeTabObj.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                source
              </a>
            </div>
          </Jumbotron>
          <Collection collection={collection} />
        </TabPane>
      </TabContent>
    </main>
  );
};

export default Main;
