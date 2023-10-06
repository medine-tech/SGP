import menu from "./sidebar.module.scss";


const Menu = () => {

  return (
    <div className={menu["sidebar"]}>
      <ul className={menu["menu"]} id="idMenuSidebar">
        <li className={menu["menu_option"]} >
          <a href="ggggg">Option 1</a>
        </li>
        <li className={menu["menu_option"]} >
          <a href="ggggg">Option 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
