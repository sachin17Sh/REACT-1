import { useState } from "react";

import ReactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import CoreComponents from "./Components/Corecomponents.jsx";
import TabButtons from "./Components/TabButtons.jsx";



// const FilterData = CORE_CONCEPTS.filter(item => item.description.includes('data'));

function App() {
  const[selectedData, setselectedData] = useState("Please click me")


  function handleClick(selectedButton) {
    setselectedData(selectedButton)
    console.log(selectedData);
  }



  return (
    <div>
      <header>
        <img src={ReactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
          <h2>Core Components</h2>
          <ul>
            {CORE_CONCEPTS.map((value, index) => (
              <CoreComponents
                key={index}
                title={value.title}
                image={value.img}
                description={value.description}
              />
            ))}

            {/* {FilterData.map((item, index) => (
              <CoreComponents
                key={index}
                title={item.title}
                image={item.img}
                description={item.description}
              />
            ))}
         */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleClick("component")}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleClick('jsx')}>JSX</TabButtons>
            <TabButtons onSelect={() => handleClick("props")}>Props</TabButtons>
            <TabButtons onSelect={() => handleClick("state")}>State</TabButtons>
          </menu>
          {selectedData}
        </section>
      </main>
    </div>
  );
}

export default App;
