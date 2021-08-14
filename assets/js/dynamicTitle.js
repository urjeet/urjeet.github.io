window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;

  document.addEventListener("visibilitychange", function (e) {
    document.title = pageTitle;
    favicon.href = "./assets/images/dp_male.svg";
  });

  document.addEventListener("visibilitychange", function (e) {
    document.title = pageTitle;
    favicon.href = "./assets/images/dp_male.svg";
  }); 
};
