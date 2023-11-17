import { Tabs } from "antd";
import { useState } from "react";
import { CustomTabBar } from "./customTabBar";

export const CustomTabs = ({
  panes,
  onChangeTab,
  tabBarClasses,
  activeTabBarClasses,
  classes,
}) => {
  const [activeKey, setActiveKey] = useState(panes[0].key);
  const handleTabClick = (key) => {
    setActiveKey(key);
    onChangeTab(key);
  };
  return (
    <Tabs
      activeKey={activeKey}
      renderTabBar={(props) => (
        <CustomTabBar
          classes={classes}
          tabBarClasses={tabBarClasses}
          activeTabBarClasses={activeTabBarClasses}
          {...props}
          panes={panes}
          onTabClick={handleTabClick}
        />
      )}
      items={panes}
    />
  );
};
