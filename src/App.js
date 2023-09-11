import React from "react";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Brand from "./component/Brand/Brand";
import Top from "./component/TopSelection/Top";
import Best from "./component/BestSeller/Best";
import Order from "./component/Order/Order";
import Sub from "./component/Subscribe/Sub";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Brand />
      <Top />
      <Best />
      <Order />
      <Sub />
      <Footer />
    </div>
  );
}

export default App;
