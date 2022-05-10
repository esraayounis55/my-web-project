document.querySelector(".bars-menu").addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});

document.getElementById("knowMore").onclick = function () {
  document.getElementById("moreInfo").innerHTML = "ES is a specialized solar company with wide Experience....";
};
