import "./App.css";
import Card from "./component/Card";

function App() {
  function click(e) {
    navigator.clipboard.writeText(e.target.textContent);
  }

  const colorDetail = [
    {
      hexCode: "#000000",
      name: "Black",
    },
    {
      hexCode: "#333333",
      name: "Gray",
    },
    {
      hexCode: "#FF6663",
      name: "Pink",
    },
    {
      hexCode: "#C90B0B",
      name: "Red",
    },
    {
      hexCode: "#FF8000",
      name: "Orange",
    },
    {
      hexCode: "#FFF500",
      name: "Yellow",
    },
    {
      hexCode: "#CCCCCC",
      name: "Light Gray",
    },
    {
      hexCode: "#7E42A2",
      name: "Purple",
    },
    {
      hexCode: "#C14912",
      name: "Brown",
    },
    {
      hexCode: "#00FFFF",
      name: "Cyan",
    },
    {
      hexCode: "#008000",
      name: "Green",
    },
    {
      hexCode: "#0000FF",
      name: "Blue",
    },
    {
      hexCode: "#8A2BE2",
      name: "Blue Violet",
    },
    {
      hexCode: "#A52A2A",
      name: "Auburn",
    },
    {
      hexCode: "#DEB887",
      name: "Burlywood",
    },
    {
      hexCode: "#5F9EA0",
      name: "Cadet Blue",
    },
    {
      hexCode: "#7FFF00",
      name: "Chartreuse",
    },
    {
      hexCode: "#D2691E",
      name: "Chocolate",
    },
    {
      hexCode: "#FF7F50",
      name: "Coral",
    },
    {
      hexCode: "#6495ED",
      name: "Cornflower Blue",
    },
    {
      hexCode: "#DC143C",
      name: "Crimson",
    },
    {
      hexCode: "#00FF7F",
      name: "Spring Green",
    },
    {
      hexCode: "#4682B4",
      name: "Steel Blue",
    },
    {
      hexCode: "#D2B48C",
      name: "Tan",
    },
    {
      hexCode: "#008080",
      name: "Teal",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <h1>Color Picker</h1>
        <div className="card-div">
          {colorDetail.map((ele, idx) => {
            return (
              <Card
                key={idx}
                hexCode={ele.hexCode}
                name={ele.name}
                onClick={(e) => {
                  click(e);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
