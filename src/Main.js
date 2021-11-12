import { useState } from "react";
import Boxes from "./components/Boxes";
import Report from "./components/Report";
const Main = () => {

    const [option, setOption] = useState(["weekly"]);  

    return (
        <div className="main">
            <Report  option={option} setOption={setOption} />
            <Boxes   option={option} setOption={setOption} /> 
        </div>
    )
}

export default Main;