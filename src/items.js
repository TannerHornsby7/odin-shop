// create and export an array of objects that contains the data for each minecraft item in the store
import links from "./links";

export const items = [
  {
    name: "Wooden Sword",
    link: links["wooden sword"],
    alt: "wooden sword",
    description:
      "This wooden sword may not be the best, but it's affordable and gets the job done when fighting off those pesky zombies!",
    price: 4,
    aquantity: 16,
    cquantity: 0,
  },
  {
    name: "Stone Sword",
    link: links["stone sword"],
    alt: "stone sword",
    description:
      "Upgrade from your wooden sword to our stone sword! It's a durable and affordable option for taking on tougher Minecraft foes.",
    price: 8,
    aquantity: 8,
    cquantity: 0,
  },
  {
    name: "Iron Sword",
    link: links["iron sword"],
    alt: "iron sword",
    description: "Ready to take your Minecraft battles to the next level? Our iron sword is a durable and reliable choice for serious adventurers.",
    price: 16,
    aquantity: 4,
    cquantity: 0,
  },
    {
    name: "Diamond Sword",
    link: links["diamond sword"],
    alt: "diamond sword",
    description: "Our diamond sword is the ultimate weapon for Minecraft adventurers. It's durable, reliable, and will help you take on any foe.",
    price: 32,
    aquantity: 2,
    cquantity: 0,
    },
];
