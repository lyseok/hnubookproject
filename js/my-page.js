document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const profileUsername = document.getElementById('profile-username');
  const profileEmail = document.getElementById('profile-email');
  const profileJoinDate = document.getElementById('profile-join-date');
  const usernameDisplay = document.getElementById('username');
  const orderList = document.getElementById('order-list');
  const editForm = document.getElementById('edit-profile-form');

  if (username) {
    usernameDisplay.textContent = username;
    profileUsername.textContent = username;
    profileEmail.textContent = localStorage.getItem('email'); // Assuming email is saved
    profileJoinDate.textContent = '2024-12-14'; // Placeholder for join date, adjust as needed

    // Fetch and display order history (dummy data for now)
    const orders = [
      { id: 1, date: '2024-12-10', items: 3, total: '3000원' },
      { id: 2, date: '2024-12-12', items: 1, total: '1500원' },
    ];

    orders.forEach(order => {
      const orderItem = document.createElement('li');
      orderItem.innerHTML = `Order #${order.id} - Date: ${order.date} - Items: ${order.items} - Total: ${order.total}`;
      orderList.appendChild(orderItem);
    });

    // Edit profile form submission
    editForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent form submission

      // Fetch updated information (dummy data for now)
      const newUsername = editForm.elements['username'].value;
      const newEmail = editForm.elements['email'].value;

      // Update localStorage
      localStorage.setItem('username', newUsername);
      localStorage.setItem('email', newEmail);

      // Update the UI
      profileUsername.textContent = newUsername;
      profileEmail.textContent = newEmail;

      alert('Profile updated successfully!');
    });
  } else {
    alert('User not logged in.');
    window.location.href = './login.html'; // Redirect to login page
  }
});
