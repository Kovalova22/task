import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import Header from "./components/Header/header";
import MainSection from "./components/main/main";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <h1>Spare Parts</h1>
        </Container>
        <Container className="section">
          <Sidebar />
          <MainSection />
        </Container>
      </main>
    </div>
  );
}

export default App;
