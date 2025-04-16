const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !email || !phone) return;

  const li = document.createElement('li');
  li.textContent = `${name} - ${email} - ${phone}`;

  contactList.appendChild(li);

  // Clear the form
  form.reset();
});
