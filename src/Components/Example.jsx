import TabButtons from "../Components/TabButtons.jsx";
import { useState } from "react";
import { EXAMPLE } from "../data.js";
import Section from "./section.jsx";



export default function Example(){
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
    return <Section title="" id="examples">
    
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
  </Section>
}