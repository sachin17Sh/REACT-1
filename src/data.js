import componentsImage from "./assets/components.png";
import jsxImage from "./assets/jsx-ui.png";
import propImage from "./assets/config.png";
import stateImage from "./assets/state-mgmt.png";
export const CORE_CONCEPTS = [
    {
        img: componentsImage,
        title: "Components",
        description: "The main building blocks of core UI"
    },

    {
        img: jsxImage,
        title: "JSX",
        description: "Return (potentially dynamic) HTML code to define the actual markup that will be rendered"

    },
    

    {
        img: propImage,
        title: "Props",
        description: "Make component configurable ( and therefore reusable) by passing input data to them"
    },

    {
        img: stateImage,
        title: "State",
        description: "React managed data which, when changed, cause component to re-render & the UI to update"
    }
]

export const EXAMPLE = {
    Component: {
        title: "Components",
        description: "The main building blocks of core UI. A component is the self contained module that render some output",
        code:`class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`
    },
    JSX: {
        title: "JSX",
        description: "The main buReact JSX is a syntax extension of JavaScript for writing React Code in a simple way. Using JSX it is easier to create reusable UI components with fewer lines of code in a template-type language with the power of JavaScriptilding blocks of core UI",
       code:`const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);`
    },
    Props: {
        title: "Props",
        description: "The main buReact allows us to pass information to a Component using something called props (which stands for properties). Props are objects which can be used inside a component.lding blocks of core UI",
       code:`function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}`
    },
    State: {
        title: "States",
        description: "The main building blocks of cThe State is a way to store and manage the information or data while creating a React Application. The state is a JavaScript object that contains the real-time data or information on the webpage.ore UI",
      code:`class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }`
    }
}