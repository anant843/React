import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    username: "Anant",
    age: 22,
  };
  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-green-400 text-blackcp-4 rounded-xl">
        {" "}
        Tailwind Props
      </h1>
      <Card username="Chai aur code" btnText="Reading More" />
      <br />
      <Card username="Another User" /*btnText="Learn More" *//>
    </>
  );
}

export default App;
