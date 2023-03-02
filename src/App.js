const Pet = (props) =>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App=() =>{
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet,
            {
                name: "Rey",
                animal: "Dog",
                breed: "Australian Shepherd",
            }
            ),
        React.createElement(Pet,{
            name: "Wednesday",
            animal: "Dog",
            breed: "Brown Lab",
        }
        ),
        React.createElement(Pet,{
            name: "Jack",
            animal: "Cat",
            breed: "Siamese",
        }
        ),
        ]
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));