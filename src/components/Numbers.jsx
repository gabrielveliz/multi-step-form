
import "../styles/Numbers.css"

const Numbers = () =>{
    return(
        <>
            <div className="StepsCont">

                <div className="Steps">
                    <div>
                        <div className="NumberBox"><span className="Number">1</span></div>
                    </div>
                    <div>
                        <div><span>STEP 1</span></div>
                        <div><span>YOUR INFO</span></div>
                    </div>
                </div>

                <div className="Steps">
                    <div>
                        <div className="NumberBox"><span>2</span></div>
                    </div>
                    <div>
                        <div><span>STEP 2</span></div>
                        <div><span>SELECT PLAN</span></div>
                    </div>
                </div>

                <div className="Steps">
                    <div>
                        <div className="NumberBox"><span>3</span></div>
                    </div>
                    <div>
                        <div><span>STEP 3</span></div>
                        <div><span>ADD-ONS</span></div>
                    </div>
                </div>

                <div className="Steps">
                    <div>
                        <div className="NumberBox"><span>4</span></div>
                    </div>
                    <div>
                        <div><span>STEP 4</span></div>
                        <div><span>SUMMARY</span></div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Numbers;