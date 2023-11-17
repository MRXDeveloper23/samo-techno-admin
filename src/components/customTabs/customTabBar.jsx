export const CustomTabBar = (props) => {
  const {
    panes,
    activeKey,
    onTabClick,
    classes,
    tabBarClasses,
    activeTabBarClasses,
  } = props;
  return (
    <div className={classes}>
      <div className="mx-auto max-w-[1366px]">
        <div className="flex gap-2">
          {panes.map((pane) => (
            <div
              key={pane.key}
              className={`cursor-pointer rounded-[13px] ${tabBarClasses} ${
                pane.key === activeKey ? activeTabBarClasses : ""
              }`}
              onClick={() => onTabClick(pane.key)}
            >
              {pane.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
