
import ReactImg from "./assets/react-core-concepts.png";
import Coreconcept from "./Components/CoreConcept.jsx";
import Example from "./Components/Example.jsx";


function App() {
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
       <Coreconcept/>
       <Example/>
      </main>
    </div>
  );
}
export default App;
