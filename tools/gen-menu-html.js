const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

// Load MENU array from menu-data.js without needing a browser/DOM
const src = fs.readFileSync(path.join(ROOT, "menu-data.js"), "utf8");
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(src + "\nthis.MENU = MENU;", sandbox);
const MENU = sandbox.MENU;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const dietIcon = { veg: "veg_mark", vegan: "vegan_mark", nonveg: "nonveg_mark" };
const dietLabel = { veg: "Vegetarian", vegan: "Vegan", nonveg: "Contains meat or seafood" };

let nav = "";
let body = "";

MENU.forEach((section) => {
  const id = slug(section.section);
  nav += `      <a href="#${id}">${esc(section.section)}</a>\n`;

  body += `<section class="menu-section" id="${id}">\n`;
  body += `  <h2>${esc(section.section)}</h2>\n`;
  body += `  <div class="rule">\u2756</div>\n`;

  section.items.forEach((item) => {
    if (item.sub) {
      body += `  <div class="menu-subhead">${esc(item.sub)}</div>\n`;
      return;
    }
    body += `  <div class="menu-row">\n`;
    body += `    <img class="icon" src="assets/icons/${item.icon}.png" alt="">\n`;
    body += `    <div class="menu-row-body">\n`;
    body += `      <div class="menu-row-top">\n`;
    body += `        <span class="name">${esc(item.name)}</span>\n`;
    if (item.diet) {
      body += `        <img class="diet" src="assets/icons/${dietIcon[item.diet]}.png" alt="${dietLabel[item.diet]}">\n`;
    }
    body += `        <span class="fill"></span>\n`;
    body += `        <span class="price">${esc(item.price)}</span>\n`;
    body += `      </div>\n`;
    if (item.desc) {
      body += `      <div class="menu-row-desc">${esc(item.desc)}</div>\n`;
    }
    body += `    </div>\n`;
    body += `  </div>\n`;
  });

  body += `</section>\n\n`;
});

fs.writeFileSync(path.join(ROOT, "tools", ".gen-nav.html"), nav);
fs.writeFileSync(path.join(ROOT, "tools", ".gen-body.html"), body);
console.log("Generated nav (" + nav.split("\n").length + " lines) and body (" + body.split("\n").length + " lines)");
console.log("Paste these into menu.html's #catnav and #menuRoot blocks (see README).");
