// create a basic react homepage with a link to the about page

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* create a link to the about page*/}
        <a href="/about">About</a>
    </div>
  );
}