import { useState } from "react";
import Numbers from "../components/Numbers";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import "../styles/Home.css"


const Home = () =>{

    const[option,setOption] =useState(1)

    return(
        <>
            <div className="HomeCont">
                <div className="leftside">
                    <Numbers option={option}/>
                </div>
                <div className="rightside">
                    {option===1?<Step1 setOption={setOption}/>:""}
                    {option===2?<Step2 setOption={setOption}/>:""}
                    {option===3?<Step3 setOption={setOption}/>:""}
                    {option===4?<Step4 setOption={setOption}/>:""}

                </div>
            </div>
        </>
    )
}

export default Home;