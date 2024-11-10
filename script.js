// Initialize Flatpickr for the Stay Dates input
flatpickr("#stay-dates-input", {
    mode: "range",
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr, instance) {
        // Handle date selection if needed
        document.getElementById("stay-dates-input").value = dateStr;
    }
});

// Guest Count Variables
let roomCount = 1;
let adultCount = 2;
let childCount = 0;

// Function to update guest counts
function updateGuestCount(type, increment) {
    console.log('dipanggil')
    if (type === 'rooms') {
        roomCount = Math.max(1, roomCount + increment); // Minimum 1 room
        document.getElementById('room-count').textContent = roomCount;
    } else if (type === 'adults') {
        adultCount = Math.max(1, adultCount + increment); // Minimum 1 adult
        document.getElementById('adult-count').textContent = adultCount;
    } else if (type === 'children') {
        childCount = Math.max(0, childCount + increment); // Minimum 0 children
        document.getElementById('child-count').textContent = childCount;
    }
    // Update input field with current guest details
    document.getElementById("rooms-guests-input").value = `${roomCount} Room, ${adultCount} Adults, ${childCount} Child`;
}

// Function to generate the URL and redirect
function generateURL() {
    const dateInput = document.getElementById('stay-dates-input').value.split(" to ");
    const checkInDate = dateInput[0];
    const checkOutDate = dateInput[1] || checkInDate; // If only one date is selected, default to same-day checkout
    
    // URL with selected parameters
    const url = `https://www.artotelwanderlust.com/hotel/artotel-gelora-senayan/g/jakarta-en.html?checkIn=${checkInDate}&checkOut=${checkOutDate}&rm=${roomCount}&rg=${adultCount}:${childCount}&id=MA05110755-MA2403000005&encodeId=TUEyNDAzMDAwMDA1`;
    
    // Redirect to the URL
    window.location.href = url;
}

// Toggle Guest Picker visibility
document.getElementById('rooms-guests-input').addEventListener('click', function() {
    const guestPicker = document.getElementById('guest-picker');
    guestPicker.style.display = guestPicker.style.display === 'block' ? 'none' : 'block';
});
// Initialize Flatpickr for date input
flatpickr("#stay-dates-input", {
    mode: "range",
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr) {
        document.getElementById("stay-dates-input").value = dateStr;
    }
});



// Open and Close Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Event Listener for Rooms & Guests input to open modal
document.getElementById("rooms-guests-input").addEventListener("click", function() {
    openModal("guest-modal");
});

// Update guest count and display it in the input field
function updateGuestCount(type, increment) {
    if (type === 'rooms') {
        roomCount = Math.max(1, roomCount + increment);
    } else if (type === 'adults') {
        adultCount = Math.max(1, adultCount + increment);
    } else if (type === 'children') {
        childCount = Math.max(0, childCount + increment);
    }
    document.getElementById("room-count").textContent = roomCount;
    document.getElementById("adult-count").textContent = adultCount;
    document.getElementById("child-count").textContent = childCount;

    // Update the main input field
    document.getElementById("rooms-guests-input").value = `${roomCount} Room, ${adultCount} Adults, ${childCount} Child`;
}

// Function to generate URL and navigate
function generateURL() {
    const dates = document.getElementById("stay-dates-input").value.split(" to ");
    const checkInDate = dates[0];
    const checkOutDate = dates[1] || checkInDate;

    const url = `https://www.artotelwanderlust.com/hotel/artotel-gelora-senayan/g/jakarta-en.html?checkIn=${checkInDate}&checkOut=${checkOutDate}&rm=${roomCount}&rg=${adultCount}:${childCount}&id=MA05110755-MA2403000005&encodeId=TUEyNDAzMDAwMDA1`;

    // Log the generated URL (for testing)
    console.log("Generated URL:", url);

    // Redirect to the generated URL
    window.location.href = url;
}

// Function to open and close modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Initialize Flatpickr for date selection
flatpickr("#stay-dates-input", {
    mode: "range",
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr) {
        document.getElementById("stay-dates-input").value = dateStr;
    }
});

// URL generation and form submission logic
function generateURL() {
    const dates = document.getElementById("stay-dates-input").value.split(" to ");
    const checkInDate = dates[0];
    const checkOutDate = dates[1] || checkInDate;

    const url = `https://www.artotelwanderlust.com/hotel/artotel-gelora-senayan/g/jakarta-en.html?checkIn=${checkInDate}&checkOut=${checkOutDate}&rm=${roomCount}&rg=${adultCount}:${childCount}&id=MA05110755-MA2403000005&encodeId=TUEyNDAzMDAwMDA1`;

    window.location.href = url;
}
