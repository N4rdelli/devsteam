import styles from "./games.module.css";

const Games = ({imgJogo, title, info, price}) => {
    return(
        <div className={styles.card}>
            <img src={imgJogo} alt="" />
            <div className={styles.box}>
                <h3>{title}</h3>
                <p>{info}</p>
                <div className={styles.buy}>
                    <h4>R${price.toFixed(2)}</h4>
                    <button>Adicionar ao carrinho </button>
                </div>
            </div>

        </div>
    )
}

export default Games