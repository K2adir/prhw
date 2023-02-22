const menuLinks = [
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

const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");
const subMenuEl = document.getElementById("sub-menu");
const mainInnerText = document.createElement("h1");
const topMenuLinks = topMenuEl.getElementsByTagName("a");
let showingSubMenu = false;

mainEl.style.backgroundColor = "var(--main-bg)";
mainInnerText.textContent = "SEI Rocks!";
mainEl.appendChild(mainInnerText);
mainEl.classList.add("flex-ctr");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link) => {
  const menuLink = document.createElement("a");
  menuLink.href = link.href;
  menuLink.textContent = link.text;
  topMenuEl.appendChild(menuLink);
});

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedLink = event.target;
  if (clickedLink.tagName !== "A") {
    return;
  }

  if (clickedLink.textContent === "about") {
    mainEl.innerHTML = `<h1>about</h1>`;
  }

  const mainContent = clickedLink.getAttribute("href");
  const activeLink = topMenuEl.querySelector(".active");

  if (activeLink) {
    activeLink.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  }

  clickedLink.classList.add("active");

  const linkObject = menuLinks.find(
    (link) => link.text === clickedLink.textContent
  );

  if (linkObject.subLinks) {
    showingSubMenu = true;
    buildSubMenu(linkObject.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }
});

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
  const subMenuLinks = subLinks.map((link) => {
    const subMenuLink = document.createElement("a");
    subMenuLink.setAttribute("href", link.href);
    subMenuLink.textContent = link.text;
    return subMenuLink;
  });
  subMenuEl.append(...subMenuLinks);
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  showingSubMenu = false;
  subMenuEl.style.top = "0";

  for (const link of topMenuLinks) {
    link.classList.remove("active");
  }

  const clickedLink = event.target;
  const mainContent = clickedLink.getAttribute("href");

  mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>`;
});
