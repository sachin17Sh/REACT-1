import { useState } from "react";
import ReactImg from "./assets/react-core-concepts.png";
import CoreComponents from "./Components/Corecomponents.jsx";
import TabButtons from "./Components/TabButtons.jsx";
import { EXAMPLE ,CORE_CONCEPTS} from "./data.js";


function App() {
  const [selectedData, setSelectedData] = useState(null);

  
  function handleClick(selectedButton) {
    setSelectedData(selectedButton);
  }
  let tabContent = <p>Please select the topic about which you want to learn</p>;
  if (selectedData) {
    // accessing value from EXAMPLE
    tabContent = (
      <div id="tab-content">  
        <h3>{EXAMPLE[selectedData].title}</h3>
        <p>{EXAMPLE[selectedData].description}</p>
        <pre>
          <h3>{EXAMPLE[selectedData].code}</h3>
        </pre>
      </div>
    );
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
            {/* displaying dynamic content */}
            {CORE_CONCEPTS.map((value, index) => (
              <CoreComponents
                key={index}
                title={value.title}
                image={value.img}
                description={value.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* accessing TabButtons component */}
            <TabButtons isSelected={selectedData==="Component"} onSelect={() => handleClick("Component")}>
              Components
            </TabButtons>
            <TabButtons isSelected={selectedData==="JSX"} onSelect={() => handleClick('JSX')}>JSX</TabButtons>
            <TabButtons isSelected={selectedData==="Props"} onSelect={() => handleClick("Props")}>Props</TabButtons>
            <TabButtons isSelected={selectedData==="State"} onSelect={() => handleClick("State")}>State</TabButtons>
          </menu>
         {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
