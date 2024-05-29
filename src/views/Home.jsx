import Numbers from "../components/Numbers";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import "../styles/Home.css"




const Home = () =>{
    return(
        <>
            <div className="HomeCont">
                <div className="leftside">
                    <Numbers/>
                </div>
                <div className="rightside">
                    <Step1/>
                    <Step2/>
                    <Step3/>
                    <Step4/>
                </div>
            </div>
        </>
    )
}

export default Home;