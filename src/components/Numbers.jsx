import { useEffect } from "react";

import "../styles/Numbers.css"

const Numbers = ({option}) =>{

    useEffect(() => {

        //for para resetear los estilos
        for(let i=1;i<=4;i++){
            document.getElementById("Num"+i).style.backgroundColor="rgba(0,0,0,0)";
            document.getElementById("Num"+i+"Text").style.color="white";
        }

        //se le da color al numero correspondiente
            document.getElementById("Num"+option).style.backgroundColor="hsl(206, 94%, 87%)";
            document.getElementById("Num"+option+"Text").style.color="hsl(213, 96%, 18%)";
        },[option]); //se asigna variable option a useffect para que actualice el color cada que actualice el estado
    
    return(
        <>
            <div className="StepsCont">

                <div className="Steps">
                    <div>
                        <div className="NumberBox" id="Num1"><span className="Number" id="Num1Text">1</span></div>
                    </div>
                    <div>
                        <div className="desctitl"><span>STEP 1</span></div>
                        <div className="descnumb"><span>YOUR INFO</span></div>
                    </div>
                </div>

                <div className="Steps">
                    <div>
                        <div className="NumberBox" id="Num2"><span id="Num2Text">2</span></div>
                    </div>
                    <div>
                        <div className="desctitl"><span>STEP 2</span></div>
                        <div className="descnumb"><span>SELECT PLAN</span></div>
                    </div>
                </div>

                <div className="Steps">
                    <div>
                        <div className="NumberBox"  id="Num3"><span id="Num3Text">3</span></div>
                    </div>
                    <div>
                        <div className="desctitl"><span>STEP 3</span></div>
                        <div className="descnumb"><span>ADD-ONS</span></div>
                    </div>
                </div>

                <div className="Steps">
                    <div>
                        <div className="NumberBox" id="Num4"><span id="Num4Text">4</span></div>
                    </div>
                    <div>
                        <div className="desctitl"><span>STEP 4</span></div>
                        <div className="descnumb"><span>SUMMARY</span></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Numbers;