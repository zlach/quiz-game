import '../stylesheets/Landing.css';

const Landing = () => {
    return (
        <div className="landing-comp d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="action-container d-flex flex-column justify-content-center align-items-center">
                        <form>
                            <label>
                                <span>Game Code:</span>
                                <br/>
                                <input type="text" name="name" />
                            </label>
                            <br/>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="manager">click here to manage</div>
        </div>
    )
}

export default Landing;