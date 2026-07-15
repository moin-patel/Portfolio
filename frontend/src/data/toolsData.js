// src/data/toolsData.js

import bootstrap from "../assets/tools/bootstrap.svg";
 import css from "../assets/tools/css3-original.svg";
 import express from "../assets/tools/express-original.svg";
 import git from "../assets/tools/git.svg";
 import github from "../assets/tools/github-original.svg";
 import html from "../assets/tools/html5-original.svg";
 import java from "../assets/tools/java.svg";
 import javascript from "../assets/tools/javascript-original.svg"; 
 import leetcode from "../assets/tools/leetcode-original.svg";
 import mongodb from "../assets/tools/mongodb-original.svg";
 import node from "../assets/tools/nodejs-original.svg";
 import postman from "../assets/tools/postman-original.svg";
 import reacti from "../assets/tools/react-original.svg";
 import tailwind from "../assets/tools/tailwindcss-original.svg";
 import vscode from "../assets/tools/vscode.svg";
 import netlify from "../assets/tools/netlify-original.svg";
 import redux from "../assets/tools/redux-original.svg";
 import render from "../assets/tools/render.svg"

 
 export const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", image: reacti },
      { name: "Redux", image: redux },
      { name: "JavaScript", image: javascript },
      { name: "HTML5", image: html },
      { name: "CSS3", image: css },
      { name: "Tailwind CSS", image: tailwind },
      { name: "Bootstrap", image: bootstrap },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", image: node },
      { name: "Express.js", image: express },
      { name: "Java", image: java }, 
      { name: "MongoDB", image: mongodb },
      
    ],
  },

  {
    title: "Devlopment  Tools",
    items: [
      { name: "VS Code", image: vscode },
      { name: "Git", image: git },
      { name: "GitHub", image: github },
      { name: "Postman", image: postman },
     
    ],
  },

    {
    title: "Problem Solving & Deployment Tools ",
    items: [
      { name: "LeetCode", image: leetcode },
      { name: "Netlify", image: netlify },
       { name: "Render", image: render },
       
    ],
  },
];