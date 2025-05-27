
// Mobile nav toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact form (fake success message)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Message sent successfully!";
  this.reset();
});

// Product popup
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('p').textContent;

    showPopup(title, desc);
  });
});

function showPopup(title, desc) {
  const popup = document.createElement('div');
  popup.classList.add('popup', 'active');
  popup.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <button class="btn" id="close-popup">Close</button>
  `;
  document.body.appendChild(popup);

  document.getElementById('close-popup').addEventListener('click', () => {
    popup.classList.remove('active');
    popup.remove();
  });
}