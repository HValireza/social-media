import { useState } from "react";
import Nav from "./components/Nav";
import Stories from "./components/Stories";
import Container from "./components/Container";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Nav />
      <Stories />
      <Container />
    </div>
  );
}

export default App;
