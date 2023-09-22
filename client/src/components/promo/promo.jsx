import styles from "./promo.module.css";

const Promo = ({imgPromo}) => {
  return (
    <div className={styles.card}>
      <img src={imgPromo} alt="" />
      <h3> Oferta exclusiva </h3>
      <div className={styles.box}>
        <div className={styles.desc}> <p>-50%</p> </div>
        <div className={styles.preco}>
            <p>R$199,80</p>
            <h4>R$99,90</h4>
        </div>
      </div>
      <button>Adicionar ao carrinho</button>
    </div>
  );
};

export default Promo;