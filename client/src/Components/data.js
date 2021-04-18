import BrewersDiary from "./Images/BrewersDiary.png";
import lartsy from "./Images/lartsy.png";
import memory from "./Images/memory.png";
import toadoo from "./Images/toadoo.png";

export const projects = [
  {
    title: "Brewers Diary",
    image: BrewersDiary,
    description: `My long term project to create a recipe and brew log sharing
    website, I'm slowly building this out and adding more features,
    currently it is fully working for CRUD operations. One day I aim
    to bring this to full production.`,
    code: "https://github.com/WhiskyToad/brewers-diary",
    preview: "https://www.brewersdiary.com/recipes",
  },
  {
    title: "Lartsy",
    image: lartsy,
    description: `An example of a shop page, includes a meme generator (why not?).
    Was supposed to just be a shopping cart multi page function but I
    wanted to go beyond and try to teach myself a few more techniques
    including redux.`,
    code: "https://github.com/WhiskyToad/shopping-cart",
    preview: "https://whiskytoad.github.io/shopping-cart/#/",
  },
  {
    title: "Memory Game",
    image: memory,
    description: `A little game of memory, pick each one only once! I tried to jazz
    it up and make it a bit more card and game like than what the
    inital project idea was looking for, oh and I got to include some
    ace mountain bike photos! Enjoyed the simplicity and problem
    solving to get 3 different cards with one not chosen!`,
    code: "https://github.com/WhiskyToad/memory-game",
    preview: "https://whiskytoad.github.io/memory-game",
  },
  {
    title: "ToaDoo List",
    image: toadoo,
    description: `A simple todo list, added a dynamically created filter, animation
    for the sidebar and a hover over description. (and a stupid play
    on the name!)`,
    code: "https://github.com/WhiskyToad/toadoo-list",
    preview: "https://whiskytoad.github.io/toadoo-list",
  },
];
