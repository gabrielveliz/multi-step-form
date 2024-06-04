import "../styles/Step1.css";

const Step1 = () =>{
    return(
        <>
                <div className="seg tit">
                    <h2>Personal info</h2>
                    <span>Please provide your name, email address, and phone number.</span>
                </div>
                <div className="seg for">
                    <span className="lab">Name</span>
                    <input type="text" placeholder="e. g. Stephen King"/>
                </div>
                <div className="seg">
                    <span className="lab">Email Address</span>
                    <input type="text" placeholder="e. g. stephenking@lorem.com"/>
                </div>
                <div className="seg">
                    <span className="lab">Phone Number</span>
                    <input type="text" placeholder="e. g. +1 234 567 890" />
                </div>
                <div className="seg segend">
                    <button>Next Step</button>
                </div>

        </>
    )
}

export default Step1;