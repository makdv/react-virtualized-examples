import React from "react";
import { number } from 'prop-types';
import {
  TabContent,
  TabPane,
  Jumbotron,
} from "reactstrap";
import {
  Basic as BasicCollection,
  PlaceholderOnScroll,
  WithDynamicCardSize,
  WithInfiniteLoader,
} from "../collections";
import { tabs } from '../../utils';
import "./Main.scss";

const collection = Array(1000)
  .fill(1)
  .map((item, index) => index + 1);

const Main = ({ activeTab }) => {
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

Main.propTypes = {
  activeTab: number.isRequired,
};

export default Main;
