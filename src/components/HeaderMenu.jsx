import * as React from "react";
import { Link } from "react-router-dom";
import linkUp from "../assets/script/linkUp";

function HeaderMenu() {
  const arr2 = [
    { id: "1", name: "главная", link: "/" },
    { id: "2", name: "Маша", link: "/About" },
    { id: "3", name: "Вокал", link: "/Vocal" },
    { id: "4", name: "Теория", link: "/Teory" },
    { id: "5", name: "Мероприятия", link: "/Event" },
  ];

  return (
    <header>
      <div className="header_main">
        {arr2.map((item) => (
          <div className="nav_menu">
            <Link className="nav_menu_link" to={item.link} onClick={linkUp}>
              <div className="nav_menu_item">{item.name}</div>
            </Link>
          </div>
        ))}
        <div className="lang">ru</div>
      </div>
    </header>
  );
}

export default HeaderMenu;

// через .map
