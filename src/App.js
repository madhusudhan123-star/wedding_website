import React from "react";
import "./App.css";
import {
  Header,
  Explore,
  Weddingcat,
  Gallery,
  Blog,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <Weddingcat />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
