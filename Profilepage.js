document.getElementById('profilePictureInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profilePicture = document.getElementById('preview');
            profilePicture.src = e.target.result;
            profilePicture.style.display = 'block'; // Show the uploaded image
            localStorage.setItem('Profile Picture', e.target.result); // Save to localStorage
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('backgroundphotoInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const backgroundPhoto = document.getElementById('BGP');
            backgroundPhoto.src = e.target.result;
            backgroundPhoto.style.display = 'block'; // Show the uploaded 
             image
            localStorage.setItem('backgroundPhoto', e.target.result); // Save to localStorage
        };
        reader.readAsDataURL(file);
    }
});

// Load the images from localStorage on page load
window.onload = function() {
    const savedProfilePicture = localStorage.getItem('profilePicture');
    if (savedProfilePicture) {
        const profilePicture = document.getElementById('preview');
        profilePicture.src = savedProfilePicture;
        profilePicture.style.display = 'block'; // Show the saved image
    }

    const savedBackgroundPhoto = localStorage.getItem('backgroundPhoto');
    if (savedBackgroundPhoto) {
        const backgroundPhoto = document.getElementById('BGP');
        backgroundPhoto.src = savedBackgroundPhoto;
        backgroundPhoto.style.display = 'block'; // Show the saved image
    }
};
