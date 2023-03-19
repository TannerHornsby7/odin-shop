// create basic about page with a header and a paragragh
// in front of a background image that covers the whole page
import about_bg from '../assets/about_bg.jpg';

export default function About() {
  return (
    <div style={{
        backgroundImage: {about_bg}
    }}>
      <h1>About</h1>
      <p>
        Welcome, adventurer! I am the village trader, and I offer the finest
        Minecraft goods to help you on your journey. Whether you're a novice or
        an experienced player, my shop has everything you need to thrive in this
        blocky world. From powerful tools and weapons to rare items and
        enchantments, I have it all. My selection of skins and character packs
        will make you stand out in the crowd, while my mods and add-ons will
        take your gameplay to the next level. Need a custom map or a server to
        join? Look no further, I have it all! My years of experience in this
        trade mean that I can help you find the perfect item for your needs and
        offer advice on how to make the most out of your Minecraft adventure. So
        come and visit my shop, and let's start trading!
      </p>
    </div>
  );
}
