import "./js/app";
import "bootstrap";

import fullpage from "fullpage.js";
console.log("index.js");
console.log("index.js 2");
new fullpage("#fullpage", {
   navigation: true,
   sectionsColor: ["#ff5f45", "#0798ec", "#fc6c7c", "grey"],
});
