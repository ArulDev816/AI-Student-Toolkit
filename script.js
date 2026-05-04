function copyPrompt(button) {
  const promptText = button.previousElementSibling.textContent;

  navigator.clipboard.writeText(promptText);

  button.textContent = "Copied!";

  setTimeout(() => {
    button.textContent = "Copy Prompt";
  }, 1500);
}

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function () {
  const filter = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.prompt-card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
