import React from "react";
import {
  StyledTabs,
  TabItem,
  TabItemActive,
  TabItemContent,
  TabItemIcon,
} from "./Tabs.styled";

function Tabs({ currentTab, listTabItem, onClick }) {
  return (
    <StyledTabs>
      {listTabItem &&
        listTabItem.map((item, index) => {
          if (index === currentTab) {
            return (
              <TabItemActive onClick={() => onClick(index)}>
                <TabItemIcon>
                  <i className={item.icon}></i>
                </TabItemIcon>
                <TabItemContent>{item.content}</TabItemContent>
              </TabItemActive>
            );
          } else {
            return (
              <TabItem onClick={() => onClick(index)}>
                <TabItemIcon>
                  <i className={item.icon}></i>
                </TabItemIcon>
                <TabItemContent>{item.content}</TabItemContent>
              </TabItem>
            );
          }
        })}
    </StyledTabs>
  );
}

export default Tabs;
