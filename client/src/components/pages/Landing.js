import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="content-container">
                        <div className="content-layover d-flex align-items-center justify-content-center">
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
            <div className="manager">click <Link to='/manage' className="here">here</Link> to manage a game</div>
        </section>
    )
}

export default Landing;