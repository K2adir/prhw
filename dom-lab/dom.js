const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");

// data
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// data part 2

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

//// part 2

const subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
// data on top.

var topMenuLinks = topMenuEl.getElementsByTagName("a");
var showingSubMenu = false;

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  const activeLink = topMenuEl.querySelector(".active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }
  event.target.classList.add("active");
});

console.log(subMenuEl);

// on part 5.5
