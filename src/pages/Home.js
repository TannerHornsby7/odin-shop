// create a basic react homepage with a link to the about page
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* create a link to the about page*/}
        <Link to="about">About</Link>
    </div>
  );
}