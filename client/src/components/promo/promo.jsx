import styles from "./promo.module.css";

const Promo = ({ imgPromo, fullPrice, discount }) => {
  return (
    <div className={styles.card}>
      <img src={imgPromo} alt="" />
      <div className={styles.box}>
        <h3> Oferta exclusiva </h3>
        <div className={styles.info}>
          <div className={styles.disc}>-{discount}%</div>
          <div className={styles.price}>
            <p>R${fullPrice}</p>
            <h4>R${(fullPrice - fullPrice * (discount / 100)).toFixed(2)}</h4>
          </div>
        </div>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default Promo;