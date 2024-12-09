const menuButton = document.querySelector('.menu-button');
const dropdown = document.getElementById('dropdownMenu');
const closeButton = document.getElementById('closeDropdown');

function closeDropdown() {
    // Find the dropdown content and hide it
    dropdown.classList.remove('active');
  }

menuButton.addEventListener('click', () => {
    dropdown.classList.add('active');
});

closeButton.addEventListener('click', () => {
    dropdown.classList.remove('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== menuButton) {
        dropdown.classList.remove('active');
    }
});
