const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");

// data
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// gray background
mainEl.style.backgroundColor = "var(--main-bg)";
// --
const mainInnerText = document.createElement("h1");
mainInnerText.textContent = "SEI Rocks!";
mainEl.appendChild(mainInnerText);
///
mainEl.classList.add("flex-ctr");

//
// nav bar
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//
// nav links
menuLinks.forEach((link) => {
  const menuLink = document.createElement("a");
  menuLink.setAttribute("href", link.href);
  menuLink.textContent = link.text;
  topMenuEl.appendChild(menuLink);
});
