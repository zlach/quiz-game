import '../stylesheets/Landing.css';

const Landing = () => {
    return (
        <div className="landing-comp d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="action-container">
                        <div className="zaction-container d-flex align-items-center justify-content-center">
                            <form>
                            <label>
                                <span>Game Code:</span>
                                <br />
                                <input type="text" name="name" />
                            </label>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                        </div>
                    </div>
                    <div className="magic-container"></div>
                </div>
            </div>
            <div className="manager">click here to manage</div>
        </div>
    )
}

export default Landing;