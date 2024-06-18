import CoreComponents from "../Components/Corecomponents.jsx";
import {CORE_CONCEPTS} from "../data.js";
export default function Coreconcept(){
    return  <section id="core-concepts">
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
}