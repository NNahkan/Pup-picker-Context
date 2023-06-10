import React from "react";
import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";
import { DogsProvider } from "./Provider/DogsProvider";

function App() {
  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <DogsProvider>
        <Section label={"Dogs: "}>
          <Dogs label={"All Dogs"} />
          <CreateDogForm />
        </Section>
      </DogsProvider>
    </div>
  );
}

export default App;
