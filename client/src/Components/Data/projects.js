import BrewersDiary from "../Images/Projects/BrewersDiary.jpg";
import lartsy from "../Images/Projects/lartsy.jpg";
import memory from "../Images/Projects/memory.jpg";

export const projects = [
  {
    title: "Brewers Diary",
    image: BrewersDiary,
    description: `I dabble in homebrewing beer and I wanted to create a place where people could share 
    recipes and keep brewing notes, so in comes brewers diary! It is built on React + Node, using axios 
    for API calls and redux to manage data. Current features are full CRUD functionality and an auth system 
    with Google sign in. I learned a TON from this, far too much to possibly list but I could go days without any real 
    progress from all the research I was having to put in.`,
    code: "https://github.com/WhiskyToad/brewers-diary",
    preview: "https://www.brewersdiary.com/recipes",
  },
  {
    title: "Lartsy",
    image: lartsy,
    description: `An example of a shop page, includes a random meme generator (as a way to practice promises).
    Was supposed to just be a shopping cart multi page function but I
    wanted to go beyond and try to teach myself a few more techniques
    including redux and try to style it to look like an actual e-commerce site.`,
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
