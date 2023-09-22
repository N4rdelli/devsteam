import styles from "./menu.module.css";
import logo from "../../assets/logo.svg";
import iconCar from "../../assets/iconCar.svg";
import { useState } from "react";
import Modal from "../modal/modal";

const Menu = () => {
  const [enable, setEnable] = useState(true); //Mostra se o modal está ativo

  const handleCart = () => {
    setEnable(!enable);
  }; //Muda o estado do useState

  return (
    <div className={styles.nav}>
      <div className={styles.logoT}>
        <img src={logo} alt="" />
        <h1> DevSteam </h1>
      </div>
      <div className={styles.search}>
        {" "}
        <input type="text" placeholder="Buscar" />{" "}
      </div>
      <div className={styles.iconCar} onClick={handleCart}>
        <img src={iconCar} alt="" />
        {enable && <Modal/>}
      </div>
    </div>
  );
};

export default Menu;
