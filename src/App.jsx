import React from "react";
import ListaDeTareas from "./componentes/ListaDeTareas/ListaDeTareas";

class App extends React.Component {

    render() {
    return(
        <div className="container">
            <h1>Hello Dojo!</h1>
            <h2>Things I need to do:</h2>
            <ListaDeTareas />
        </div>
    );
    }

}

export default App;