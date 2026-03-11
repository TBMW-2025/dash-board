// ===================================================================
// PLACEMENT MONITOR DASHBOARD - MASTER JAVASCRIPT FILE
// Combined functionality for: Companies, Placements, Settings
// Chart functionality is in separate charts.js file
// ===================================================================

// ===== COMMON FUNCTIONALITY FOR ALL PAGES =====

/**
 * Initialize search functionality for table rows
 */
function initSearch() {
    const searchBar = document.querySelector('.search-bar');
    const tableRows = document.querySelectorAll('.table-row');

    if (searchBar && tableRows.length > 0) {
        searchBar.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }
}

/**
 * Initialize add button functionality
 */
function initAddButton() {
    const addBtn = document.querySelector('.btn-add');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            const contentTitle = document.querySelector('.content-title');
            let pageType = 'Item';
            
            if (contentTitle) {
                if (contentTitle.textContent.includes('Companies')) {
                    pageType = 'Company';
                } else if (contentTitle.textContent.includes('Placements')) {
                    pageType = 'Placement';
                }
            }
            
            alert(`Add ${pageType} form would open here`);
        });
    }
}

/**
 * Initialize action button functionality
 */
function initActionButtons() {
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Options menu would appear here');
        });
    });
}

// ===== SETTINGS PAGE FUNCTIONALITY =====

/**
 * Switch between different settings tabs
 * @param {string} tabName - The ID of the tab to switch to
 */
function switchTab(tabName) {
    // Hide all content sections
    const contents = document.querySelectorAll('.settings-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.settings-nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Show selected content
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to clicked nav item
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

/**
 * Update admin profile information
 * Validates form inputs and shows success message
 */
function updateProfile() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    if (!firstName || !lastName || !email || !phone) {
        alert('Please fill in all fields');
        return;
    }

    if (!firstName.value || !lastName.value || !email.value || !phone.value) {
        alert('Please fill in all fields');
        return;
    }

    const alertEl = document.getElementById('profileAlert');
    if (alertEl) {
        alertEl.textContent = '✓ Profile updated successfully!';
        alertEl.classList.add('show');

        setTimeout(() => {
            alertEl.classList.remove('show');
        }, 3000);
    }
}

/**
 * Reset admin profile form to default values
 */
function resetProfileForm() {
    const firstNameEl = document.getElementById('firstName');
    const lastNameEl = document.getElementById('lastName');
    const emailEl = document.getElementById('email');
    const phoneEl = document.getElementById('phone');

    if (firstNameEl) firstNameEl.value = 'Arsh';
    if (lastNameEl) lastNameEl.value = 'G';
    if (emailEl) emailEl.value = 'arsh.g@university.edu';
    if (phoneEl) phoneEl.value = '+91 9876543210';
}

/**
 * Check password strength and update visual indicator
 * Evaluates: length, uppercase, numbers, special characters
 */
function checkPasswordStrength() {
    const passwordInput = document.getElementById('newPassword');
    if (!passwordInput) return;

    const password = passwordInput.value;
    const bars = document.querySelectorAll('#strengthIndicator .strength-bar');
    const text = document.getElementById('strengthText');

    let strength = 0;

    // Check password criteria
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;

    // Reset all bars
    bars.forEach(bar => bar.classList.remove('weak', 'medium', 'strong'));

    // Update strength indicator based on criteria met
    if (strength < 2) {
        if (text) {
            text.textContent = 'Password strength: Weak';
            text.classList.remove('medium', 'strong');
            text.classList.add('weak');
        }
        if (bars[0]) bars[0].classList.add('weak');
    } else if (strength < 4) {
        if (text) {
            text.textContent = 'Password strength: Medium';
            text.classList.remove('weak', 'strong');
            text.classList.add('medium');
        }
        if (bars[0]) bars[0].classList.add('medium');
        if (bars[1]) bars[1].classList.add('medium');
    } else {
        if (text) {
            text.textContent = 'Password strength: Strong';
            text.classList.remove('weak', 'medium');
            text.classList.add('strong');
        }
        if (bars[0]) bars[0].classList.add('strong');
        if (bars[1]) bars[1].classList.add('strong');
        if (bars[2]) bars[2].classList.add('strong');
    }
}

/**
 * Update admin password
 * Validates password requirements and shows confirmation message
 */
function updateAdminPassword() {
    const currentPassword = document.getElementById('currentPassword');
    const newPassword = document.getElementById('newPassword');
    const confirmPassword = document.getElementById('confirmPassword');

    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill in all password fields');
        return;
    }

    const currentPwd = currentPassword.value;
    const newPwd = newPassword.value;
    const confirmPwd = confirmPassword.value;

    if (!currentPwd || !newPwd || !confirmPwd) {
        alert('Please fill in all password fields');
        return;
    }

    if (newPwd !== confirmPwd) {
        alert('New passwords do not match');
        return;
    }

    if (newPwd.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }

    const alertEl = document.getElementById('passwordAlert');
    if (alertEl) {
        alertEl.textContent = '✓ Password changed successfully!';
        alertEl.classList.add('show');

        resetPasswordForm();

        setTimeout(() => {
            alertEl.classList.remove('show');
        }, 3000);
    }
}

/**
 * Reset password form to empty state
 */
function resetPasswordForm() {
    const currentPasswordEl = document.getElementById('currentPassword');
    const newPasswordEl = document.getElementById('newPassword');
    const confirmPasswordEl = document.getElementById('confirmPassword');
    const strengthText = document.getElementById('strengthText');

    if (currentPasswordEl) currentPasswordEl.value = '';
    if (newPasswordEl) newPasswordEl.value = '';
    if (confirmPasswordEl) confirmPasswordEl.value = '';
    if (strengthText) {
        strengthText.textContent = 'Password strength: Weak';
        strengthText.classList.remove('medium', 'strong');
        strengthText.classList.add('weak');
    }

    // Reset strength bars
    const bars = document.querySelectorAll('#strengthIndicator .strength-bar');
    bars.forEach(bar => {
        bar.classList.remove('weak', 'medium', 'strong');
    });
}

/**
 * Load student details when selected from dropdown
 * Displays student info: name, enrollment number, email
 */
function loadStudentDetails() {
    const select = document.getElementById('studentSelect');
    const details = document.getElementById('studentDetails');

    if (!select || !select.value) {
        if (details) details.style.display = 'none';
        return;
    }

    if (details) details.style.display = 'block';

    // Student database
    const students = {
        'ENR2023001': { name: 'John Doe', email: 'john.doe@university.edu' },
        'ENR2023002': { name: 'Jane Smith', email: 'jane.smith@university.edu' },
        'ENR2023003': { name: 'Alex Jones', email: 'alex.jones@university.edu' },
        'ENR2023004': { name: 'Sam Wilson', email: 'sam.wilson@university.edu' },
        'ENR2023005': { name: 'Emily Brown', email: 'emily.brown@university.edu' }
    };

    const student = students[select.value];
    if (student) {
        const studentNameEl = document.getElementById('studentName');
        const studentEnrollmentEl = document.getElementById('studentEnrollment');
        const studentEmailEl = document.getElementById('studentEmail');

        if (studentNameEl) studentNameEl.textContent = student.name;
        if (studentEnrollmentEl) studentEnrollmentEl.textContent = select.value;
        if (studentEmailEl) studentEmailEl.textContent = student.email;
    }
}

/**
 * Reset student password with temporary password
 * Shows success message and clears form
 */
function resetStudentPassword() {
    const student = document.getElementById('studentSelect');
    const tempPassword = document.getElementById('tempPassword');

    if (!student || !tempPassword) {
        alert('Please select a student and enter a temporary password');
        return;
    }

    if (!student.value || !tempPassword.value) {
        alert('Please select a student and enter a temporary password');
        return;
    }

    const studentNameEl = document.getElementById('studentName');
    const alert = document.getElementById('studentPasswordAlert');
    
    if (alert) {
        const studentName = studentNameEl ? studentNameEl.textContent : 'the student';
        alert.textContent = `✓ Password for ${studentName} has been reset!`;
        alert.classList.add('show');

        clearStudentForm();

        setTimeout(() => {
            alert.classList.remove('show');
        }, 3000);
    }
}

/**
 * Clear student password reset form
 */
function clearStudentForm() {
    const selectEl = document.getElementById('studentSelect');
    const passwordEl = document.getElementById('tempPassword');
    const detailsEl = document.getElementById('studentDetails');

    if (selectEl) selectEl.value = '';
    if (passwordEl) passwordEl.value = '';
    if (detailsEl) detailsEl.style.display = 'none';
}

/**
 * Update notification preferences
 * Shows confirmation message
 */
function updateNotifications() {
    alert('Notification preferences saved');
}

/**
 * Enable two-factor authentication
 * Shows setup dialog
 */
function enableTwoFA() {
    alert('Two-Factor Authentication setup would open here');
}

/**
 * Revoke an active session
 * Shows confirmation message
 */
function revokeSession() {
    alert('Session revoked successfully');
}

/**
 * Open delete account confirmation dialog
 * Requires user confirmation before deletion
 */
function openDeleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        alert('Account deletion initiated');
    }
}

// ===================================================================
// DOM CONTENT LOADED - Initialize all functionality
// ===================================================================

/**
 * Main initialization function
 * Runs when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize common functionality for all pages
    initSearch();
    initAddButton();
    initActionButtons();
});