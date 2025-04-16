const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');

// Load saved contacts from localStorage
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Render the saved contacts in the list
function renderContacts() {
  contactList.innerHTML = '';
  contacts.forEach((contact, index) => {
    const li = document.createElement('li');
    li.textContent = `${contact.name} - ${contact.email} - ${contact.phone}`;
    contactList.appendChild(li);
  });
}

// Event listener for form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !email || !phone) return;

  // Create a new contact object
  const newContact = { name, email, phone };

  // Add the new contact to the contacts array
  contacts.push(newContact);

  // Save the updated contacts list to localStorage
  localStorage.setItem('contacts', JSON.stringify(contacts));

  // Re-render the contacts list
  renderContacts();

  // Clear the form
  form.reset();
});

// Initial render of contacts when the page loads
renderContacts();
