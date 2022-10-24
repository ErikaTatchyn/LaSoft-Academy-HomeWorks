window.onload = function (e) {
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar");
  burger.onclick = () => {
    burger.classList.toggle("change");
    sidebar.classList.toggle("hidden");
  };
};
