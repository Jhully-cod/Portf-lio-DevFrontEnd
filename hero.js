const text = `Jhullyana Soares\nDesenvolvedora Front-End`;
const typedText = document.getElementById("typed-text");
let index = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayAfterTyped = 1500;

function type() {
  if (!isDeleting && index <= text.length) {
    typedText.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
      // Depois de digitar tudo, espera e começa a apagar
      setTimeout(() => {
        isDeleting = true;
        type();
      }, delayAfterTyped);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else if (isDeleting) {
    typedText.textContent = text.slice(0, index);
    index--;

    if (index < 0) {
      // Depois de apagar tudo, recomeça a digitação
      isDeleting = false;
      index = 0; // garantir reset total
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const container = typedText.parentElement;
  container.style.opacity = 0;
  container.style.transition = "opacity 1s ease";

  // Aplica fade-in antes de começar a digitar
  setTimeout(() => {
    container.style.opacity = 1;
    type();
  }, 200); // delay curto antes de iniciar fade-in
});
