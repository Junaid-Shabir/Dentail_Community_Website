// $(window).scroll(function () {
//   $(".navigation_Menu").toggleClass("hidden", $(this).scrollTop() > 5);
//   $(".navigation_Menu").toggleClass("fix", $(this).scrollTop() > 5);
//   $(".top_header").toggleClass("fix_1", $(this).scrollTop() > 5);
// });
window.addEventListener("scroll", function () {
  var sticky_nabbar = document.querySelector("sticky_nabbar");
  sticky_nabbar.classList.toggle("sticky", window.scrollY > 0);
});
