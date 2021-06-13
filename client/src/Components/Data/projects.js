import BrewersDiary from "../Images/Projects/BrewersDiary.jpg";
import lartsy from "../Images/Projects/lartsy.jpg";
import memory from "../Images/Projects/memory.jpg";

export const projects = [
  {
    title: "Brewers Diary",
    image: BrewersDiary,
    description: `My long term full stack project to create a recipe and brew log sharing
    website. Built on the MERN stack and using Chakra UI for the styling. Currently it is functional for CRUD operations. 
    I have lots of development plans for this such as adding brew diaries for recipes, comment system, auth system, ratings,
     suggestions for recipes and many more, this is essentially my playground to learn and create before moving onto
     more complicated projects I have in mind.`,
    code: "https://github.com/WhiskyToad/brewers-diary",
    preview: "https://www.brewersdiary.com/recipes",
  },
  {
    title: "Lartsy",
    image: lartsy,
    description: `An example of a shop page, includes a random meme generator (cause why not?).
    Was supposed to just be a shopping cart multi page function but I
    wanted to go beyond and try to teach myself a few more techniques
    including redux and try to make it look like a legit e-commerce site.`,
    code: "https://github.com/WhiskyToad/shopping-cart",
    preview: "https://whiskytoad.github.io/shopping-cart/#/",
  },
  {
    title: "Memory Game",
    image: memory,
    description: `A little game of memory, pick each one only once! 
    The original project was supposed to display all cards at once and shuffle
     after you have made a choice, however I wanted to try and make it more game like, I
      especially liked the problem solving challenge of ensuring at least one card 
      every round hadn't been picked before. Built on React and it was this project where I finally
      started to click with React and understand and enjoy building things with it
       and of course I loved picking the images for this one!`,
    code: "https://github.com/WhiskyToad/memory-game",
    preview: "https://whiskytoad.github.io/memory-game",
  },
];
