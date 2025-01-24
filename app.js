const productImg = document.getElementById("productImg");
const btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", () => {
  productImg.src = "Images/image1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
btn[1].addEventListener("click", () => {
  productImg.src = "Images/image2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
btn[2].addEventListener("click", () => {
  productImg.src = "Images/image3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
