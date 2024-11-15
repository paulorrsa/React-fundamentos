import logo from "../assets/react-core-concepts.png"
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandonInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandonInt(2)];
  return (
    <header>
      
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;