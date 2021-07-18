import brewersDiary from "../Images/Projects/brewersDiary.jpg";
import giphy from "../Images/Projects/giphy.jpg";
import kingOfTech from "../Images/Projects/kingOfTech.jpg";

export const projects = [
  {
    title: "Brewers Diary",
    image: brewersDiary,
    excerpt: "A recipe logging and sharing site built on the MERN stack.",
    description: `I dabble in home-brewing beer and I wanted to create a place where people could share 
    recipes and keep brewing notes, so in comes brewers diary! It is built on React + Node, using axios 
    for API calls and redux to manage data. Current features are full CRUD functionality and an auth system 
    with Google sign in. I learned a TON from this, far too much to possibly list but I could go days without any real 
    progress from all the research I was having to put in.`,
    code: "https://github.com/WhiskyToad/brewers-diary",
    preview: "https://www.brewersdiary.com/recipes",
  },
  {
    title: "Giphy",
    image: giphy,
    excerpt: "A Giphy clone built on React.",
    description: `After learning a lot and improving my coding skills with various bigger sized projects I wanted to go back and practice my new
    found skills and techniques on something smaller and try to copy an existing website. Built using Giphy's simple API and using React with Chakra UI for speed and
    ease of use. I tried to follow the DRY principle a lot whilst also keeping my code clean, simple and easy to follow.`,
    code: "https://github.com/WhiskyToad/giphy",
    preview: "https://whiskytoad.github.io/giphy/",
  },
  {
    title: "King of Tech",
    image: kingOfTech,
    excerpt: "My blog, built on Django and React",
    description: `I wanted to try and enhance my learning by writing about it. After starting my coding career 
    learning basic Python I decided to go back since I knew Django was great for things like blogs. I kept this really clean and simple 
    and it is probably my favorite design so far.`,
    code: "https://github.com/WhiskyToad/blog",
    preview: "https://king-of.tech/blog",
  },
];
