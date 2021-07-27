/*Creating the Typing effect*/

const typeWrite = function (txtEle, words, wait = 2000) {
  this.txtEle = txtEle;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDel = false;
};
typeWrite.prototype.type = function () {
  const ind = this.wordIndex % this.words.length;

  const fulltxt = this.words[ind];

  if (this.isDel) {
    this.txt = fulltxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fulltxt.substring(0, this.txt.length + 1);
  }

  this.txtEle.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 200;
  if (this.isDel) {
    typeSpeed /= 2;
  }
  if (!this.isDel && this.txt == fulltxt) {
    typeSpeed = this.wait;
    this.isDel = true;
  } else if (this.isDel && this.txt === "") {
    this.isDel = false;
    this.wordIndex++;
    typeSpeed = 200;
  }
  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtEle = document.querySelector(".text");
  const words = JSON.parse(txtEle.getAttribute("data-words"));
  const wait = txtEle.getAttribute("data-wait");

  new typeWrite(txtEle, words, wait);
}

/* Applying CSS to navbar on scolling */

const header = document.querySelector(".navbar");
const section = document.querySelector(".mainSection");

const options = {
  rootMargin: "200px 0px 0px 0px",
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("space_back");
      document.querySelector(".quickViewCard").classList.remove("visible");
      document.querySelector(".AK").style.visibility = "visible";
      document.querySelector(".logo").style.visibility = "hidden";
    } else {
      header.classList.remove("space_back");
      document.querySelector(".logo").style.visibility = "visible";
      document.querySelector(".AK").style.visibility = "hidden";
    }
  });
}, options);

observer.observe(section);

document.querySelector(".cell1").addEventListener("mouseover", function () {
  document.querySelector(".pro1").classList.add("box--show");
});
document.querySelector(".cell2").addEventListener("mouseover", function () {
  document.querySelector(".pro2").classList.add("box--show");
});
document.querySelector(".cell3").addEventListener("mouseover", function () {
  document.querySelector(".pro3").classList.add("box--show");
});
document.querySelector(".cell1").addEventListener("mouseout", function () {
  document.querySelector(".pro1").classList.remove("box--show");
});
document.querySelector(".cell2").addEventListener("mouseout", function () {
  document.querySelector(".pro2").classList.remove("box--show");
});
document.querySelector(".cell3").addEventListener("mouseout", function () {
  document.querySelector(".pro3").classList.remove("box--show");
});
document.querySelector(".logo").addEventListener("click", function () {
  document.querySelector(".quickViewCard").classList.toggle("visible");
});

function rotate() {
  document.querySelector(".content").classList.toggle("rotate");
}

function display() {
  document.querySelector(".navigation").classList.toggle("visible");
  document.querySelector(".quickLinks").classList.toggle("visible");
}




window.addEventListener('scroll',function(){
  var scroll = this.document.querySelector('.myButton');
  scroll.classList.toggle("active",window.scrollY > 50);
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}