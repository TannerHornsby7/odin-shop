// create a minecraft themed not found page based on an enderman
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NotFound.css";
import enderman from "../assets/enderman.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="body">
            <h2>404</h2>

            <div className="enderman">
                <img src={enderman} alt="enderman" />
            </div>

            <h4>Not Found</h4>
            <p>
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable. Please try again
                after defeating the ender dragon.
            </p>
            <Link to="/" className="btn btn-secondary">
                Back to Home
            </Link>
        </div>
    );
}
