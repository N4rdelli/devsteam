import styles from "./games.module.css";

const Games = ({imgJogo}) => {
    return(
        <div className={styles.card}>
            <img src={imgJogo} alt="" />
            <div className={styles.box}>
                <h3>Counter strike: Global offensive</h3>
                <p>Ação, estratégia, multijogador.</p>
                <div className={styles.buy}>
                    <h4> R$99,90 </h4>
                    <button>Adicionar ao carrinho </button>
                </div>
            </div>

        </div>
    )
}

export default Games