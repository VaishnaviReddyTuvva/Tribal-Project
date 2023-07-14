

const readMoreBtns = document.querySelectorAll(".read-more");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const content = e.target.previousSibling.previousSibling;
    content.classList.toggle("show-more");
    if (content.classList.contains("show-more")) {
      e.target.textContent = "Read Less  ";
    } else {
      e.target.textContent = "Read More ";
    }
  });
});



