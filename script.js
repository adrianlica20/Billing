const lis = document.querySelectorAll("#menu li");

lis.forEach(li => {
  li.addEventListener("click", () => {
    textGray();
    if (li.classList.contains("text-gray-500")) {
      li.classList.remove("text-gray-500");
      li.classList.add("text-black", "font-semibold");
    }
  });
});

function textGray() {
  lis.forEach(li => {
    li.classList.remove("text-black", "font-semibold");
    li.classList.add("text-gray-500");
  });
}

const hamburger = document.getElementById("hamburger");
const lines = document.querySelectorAll("#hamburger div");
const mobileModal = document.querySelector(".mobile-modal");

hamburger.addEventListener("click", () => {
  lines[0].classList.add("-rotate-45");
  lines[1].classList.add("opacity-0");
  lines[2].classList.add("rotate-45");
  setTimeout(() => {
    mobileModal.classList.remove("hidden");
    mobileMenu.classList.remove("hidden");
  }, 600);
});

const closeMobileBtn = document.querySelector(".close-mobile");
const mobileMenu = document.getElementById("mobile-menu");

closeMobileBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  mobileModal.classList.add("hidden");

  lines[0].classList.remove("-rotate-45");
  lines[1].classList.remove("opacity-0");
  lines[2].classList.remove("rotate-45");
});

const removeCard = document.querySelector(".remove-card");
const cardInfo = document.querySelector(".card-info");

removeCard.addEventListener("click", () => {
  cardInfo.classList.toggle("hidden");
  removeCard.innerHTML =
    removeCard.innerHTML === "Add Card" ? "Remove" : "Add Card";
});

const planInfo = document.querySelector(".plan-info");
const cancelSubWarn = document.querySelector(".cancel-sub-warn");
const cancelSubFinal = document.querySelector(".cancel-sub-final");
const keepSub = document.querySelector(".keep-sub");
const modalWarning = document.querySelector(".modal-warning");
const overlay = document.querySelector(".overlay");

cancelSubWarn.addEventListener("click", () => {
  modalWarning.classList.remove("hidden");
  overlay.classList.remove("hidden");
  cancelSubFinal.addEventListener("click", () => {
    planInfo.classList.add("hidden");
    modalWarning.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  keepSub.addEventListener("click", () => {
    modalWarning.classList.add("hidden");
    overlay.classList.add("hidden");
  });
});
