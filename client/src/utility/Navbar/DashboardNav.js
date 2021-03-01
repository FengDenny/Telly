import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const DashboardNav = () => {
  const data = [
    {
      id: "1",
      tabTitle: (
        <NavLink
          activeStyle={{
            borderBottom: "1px solid #414f63 ",
          }}
          exact
          to='/user_dashboard'
        >
          Your booking
        </NavLink>
      ),
    },
    {
      id: "2",
      tabTitle: (
        <NavLink
          activeStyle={{
            borderBottom: "1px solid #414f63 ",
          }}
          exact
          to='/user_dashboard/seller'
        >
          Your hotels
        </NavLink>
      ),
    },
  ];
  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      key={item.id}
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
      }
    >
      {item.tabTitle}
    </li>
  ));

  return (
    <div className='tabs margin-top-20'>
      <ul className='tabs-titles'>{listTitles}</ul>
    </div>
  );
};

export default DashboardNav;
