function showPhoneNumber() {
    // Display the phone number in an alert
    alert("The contact phone number is: 0969194193");
}

function confirmLogout(event) {
    // Prevent the default behavior of the link
    event.preventDefault();
    
    // Display a confirmation dialog
    const isConfirmed = confirm("Are you sure you want to log out?");
    
    // If the user confirms, redirect to the login.html page
    if (isConfirmed) {
        window.location.href = "login.html";  // Redirect to the login page
    } else {
        // If the user cancels, do nothing (stay on the current page)
        console.log("Logout canceled.");
    }
}

let currentPage = 0; // Variable to store the current page

// Function to display the current page
function showPage(pageIndex) {
    const rooms = document.querySelectorAll('.rooms');
    const dots = document.querySelectorAll('.dots span');

    rooms.forEach((room, index) => {
        room.classList.remove('active');
        if (index === pageIndex) {
            room.classList.add('active');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === pageIndex) {
            dot.classList.add('active');
        }
    });
}

// Function to navigate to the previous page
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Function to navigate to the next page
function nextPage() {
    const rooms = document.querySelectorAll('.rooms');
    if (currentPage < rooms.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

// Call the `showPage` function when the page is loaded for the first time
window.onload = function() {
    showPage(currentPage);
};
