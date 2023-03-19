// create a basic react homepage with a link to the about page

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* add a link to the about page  not using the Link component*/}
        <a href="#/about">About</a>
    </div>
  );
}