import React from "react";
import "./Home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div classNmae="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
      </div>
      <div className="home_row">
        <Product
          id="00001"
          title="The learn startup "
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SX400_.jpg"
          price={29.99}
          rating={5}
        />
        <Product
          id="00002"
          title="Kenwood Titanium Kitchen Machine"
          image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UL320_.jpg"
          price={499.95}
          rating={4}
        />
        <Product
          id="00003"
          title="Samsung 49' Curved LED Gaming Monitor"
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_Sx466_.jpg"
          price={199.99}
          rating={3}
        />
        <Product
          id="00004"
          title="Harman Kardon Onyx Studio 4 Wireless Bluetooth"
          image="https://m.media-amazon.com/images/I/81A0BZaFwyL._AC_UY218_.jpg"
          price={212.99}
          rating={5}
        />
      </div>

      <div className="home_row">
        <Product
          id="00005"
          title="Roll over image to zoom in Samsung Electronics"
          image="https://m.media-amazon.com/images/I/81AczAgBE1L._AC_UY218_.jpg"
          price={799.99}
          rating={5}
        />
        <Product
          id="00006"
          title="JBL FLIP 5 - Waterproof Portable Bluetooth"
          image="https://m.media-amazon.com/images/I/81AQKpDB9lL._AC_UY218_.jpg"
          price={199.99}
          rating={3}
        />
        <Product
          id="00007"
          title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage)"
          image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UY218_.jpg"
          price={199.99}
          rating={3}
        />
        <Product
          id="00003"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_Sx466_.jpg"
          price={199.99}
          rating={3}
        />
      </div>

      <div className="home_row">
        <Product
          id="00003"
          title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
          image="https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY218_.jpg"
          price={999.99}
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
