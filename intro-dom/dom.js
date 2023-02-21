const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.innerHTML = "biiic";
  title.style.backgroundColor = "red";
  title.innerHTML = title.innerHTML + " aaa";
});
