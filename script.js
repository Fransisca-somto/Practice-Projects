import inquirer from "inquirer";
import fs from 'fs';
import qr from 'qr-image';
const { type } = require("os");

inquirer
  .prompt([
    {
      type: 'input',
      message: "Type in your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); 
  })
  .catch((error) => {
    if (error.isTtyError) {

    } else {

    }
  })