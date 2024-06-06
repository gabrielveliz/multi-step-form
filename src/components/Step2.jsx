import icon1 from "../images/icon-arcade.svg"
import icon2 from "../images/icon-advanced.svg"
import icon3 from "../images/icon-pro.svg"
import "../styles/Step2.css"

const Step2 = () =>{
    return(
        <>
                <div className="seg tit">
                    <h2>Select your plan</h2>
                    <span>You have the option of monthly or yearly billing</span>
                </div>
                <div className="seg plans">

                    <div className="plansbox">
                        <div>
                            <img src={icon1} alt="Arcade icon" />
                        </div>
                        <div className="plansdesc">
                            <div><span>Arcade</span></div>
                            <div><span>$9/mo</span></div>
                        </div>
                    </div>
                    <div className="plansbox">
                        <div>
                            <img src={icon2} alt="Advanced icon" />
                        </div>
                        <div className="plansdesc">
                            <div><span>Advanced</span></div>
                            <div><span>$12/mo</span></div>
                        </div>
                    </div>
                    <div className="plansbox">
                        <div>
                            <img src={icon3} alt="Pro icon" />
                        </div>
                        <div className="plansdesc">
                            <div><span>Pro</span></div>
                            <div><span>$15/mo</span></div>
                        </div>
                    </div>

                </div>
                <div className="seg">
                    <div className="membbox">
                        <span>Monthly</span>
                        <div className="ballbox">
                            <div className="opbox">
                                <div className="ball"></div>
                            </div>
                            <div className="opbox">
                                <div className="ball"></div>
                            </div>
                        </div>
                        <span>Yearly</span>
                    </div>
                </div>
                <div className="seg segend">
                    <button>Next Step</button>
                </div>
        </>
    )
}

export default Step2;