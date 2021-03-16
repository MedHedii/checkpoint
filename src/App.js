import { Fragment } from "react";
import img2 from "./image_2.png";
import "./style.css";

function App() {
    return (
        <Fragment>
            <nav className="navbar">
                <h1 className="title red">Mohamed Hedi Attia</h1>
            </nav>
            <div
                style={{ border: "solid 1 black", maxWidth: "100vw" }}
                className="items"
            >
                <br />
                <img src={img2} alt="img2" className="imgClass" />
                <br />
                <img src="image_1.png" alt="IMG1" className="imgClass" />
            </div>
            <video width="320" height="240" controls className="vid">
                <source src="myVideo.mp4" type="video/mp4" />
            </video>
            <footer>
                <nav className="navbar">
                    <h1 className="title red">Footer</h1>
                </nav>
            </footer>
        </Fragment>
    );
}

export default App;
