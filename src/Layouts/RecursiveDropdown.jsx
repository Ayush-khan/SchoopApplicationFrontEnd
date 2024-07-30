import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RecursiveDropdown = ({ items }) => {
  const navigate = useNavigate();

  const renderDropdown = (item) => {
    if (item.sub_menus && item.sub_menus.length > 0) {
      return (
        <NavDropdown
          key={item.menu_id}
          title={item.name}
          id="sub-view-dropdown"
          className="text-[.9em] font-bold  "
        >
          {item.sub_menus.map((subItem) => renderDropdown(subItem))}
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown.Item
          //   className="dropend"
          id="sub-view-dropdown"
          key={item.menu_id}
          onClick={() => {
            if (item.url) {
              navigate(item.url);
            }
          }}
        >
          {item.name}
        </NavDropdown.Item>
      );
    }
  };

  return <>{items.map((item) => renderDropdown(item))}</>;
};

export default RecursiveDropdown;
