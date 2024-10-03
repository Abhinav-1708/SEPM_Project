document.addEventListener('DOMContentLoaded', () => {
    const userRole = localStorage.getItem('role') || 'faculty'; // Example role management
    document.getElementById('roleLabel').textContent = capitalize(userRole);

    // Display the relevant dashboard section based on the user's role
    displayDashboard(userRole);

    // Logout functionality (Placeholder, for actual implementation you'd clear session data)
    document.querySelector('.logout-btn').addEventListener('click', () => {
        alert('Logging out...');
        window.location.href = 'login.html'; // Redirect to login page
    });
});

// Capitalizes the first letter of the user role
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to display the relevant section based on the user role
function displayDashboard(role) {
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => section.classList.add('hidden'));

    switch (role.toLowerCase()) {
        case 'student':
            document.getElementById('student-section').classList.remove('hidden');
            break;
        case 'parent':
            document.getElementById('parent-section').classList.remove('hidden');
            break;
        case 'faculty':
            document.getElementById('faculty-section').classList.remove('hidden');
            break;
        case 'academics':
            document.getElementById('academics-section').classList.remove('hidden');
            break;
        default:
            document.getElementById('student-section').classList.remove('hidden');
    }
}
