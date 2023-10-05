import "./App.css";

import Menu from "../components/menu/menu";
import Promo from "../components/promo/promo";
import Games from "../components/games/games";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

const App = () => {
  return (
    <div className="body">
        <Menu></Menu>

      <div className="promoContainer">
        <h2>Promoções</h2>
        <div className="promos">
          <Promo
          imgPromo={img1}
          fullPrice={199.99}
          discount={30}
          />
          <Promo
          imgPromo={img2}
          fullPrice={199.99}
          discount={40}
          />
          <Promo
          imgPromo={img3}
          fullPrice={199.99}
          discount={50}
          />
        </div>
      </div>
      <div className="gamesContainer">
        <h2>Outros Jogos</h2>
        <Games
        imgJogo={img4}
        title={"Conter Strike: Global Offensive"}
        info={"Ação, Estratégia, Multijogador"}
        price={99.90}
        />
        <Games
        imgJogo={img4}
        title={"Conter Strike: Global Offensive"}
        info={"Ação, Estratégia, Multijogador"}
        price={99.90}
        /><Games
        imgJogo={img4}
        title={"Conter Strike: Global Offensive"}
        info={"Ação, Estratégia, Multijogador"}
        price={99.90}
        />
      </div>
    </div>
  );
};

export default App;
