import React from "react";
import Header from './components/Header'
import Button from "./components/Button";
import TextInput from "./components/TextInput";



function App() {
    return (
    <div className="container">
        <Header title="Leeftijdsverificatie" />
        <Button color={'green'} text={"Generate QR"} onClick={generateQR} />
        <TextInput placeholder="Typ some text" />
    </div>

  );
}

// Generate QR
const generateQR = () => {
    console.log("QR")
}

export default App