/*------------------blog--------------*/
// Function to create a new blog post from input text
function createBlog() {
    var blogText = document.getElementById('Blogs').value.trim();
    
    if (blogText === "") {
        return null;
    }

    var blogContainer = document.getElementById('blogContainer');
    var newBlogPost = document.createElement('div');
    newBlogPost.className = 'blogPost';
    newBlogPost.innerText = blogText;

    blogContainer.appendChild(newBlogPost);
    document.getElementById('Blogs').value = ''; // clear the input field
}

// Event listener for Enter key press to create blog post
document.getElementById('Blogs').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        createBlog();
    }
});

// Function to add a new blog post with message and image
let count = 0;

function addBlogPost() {
    count++;

    // Create new div element
    let container = document.getElementById("blogContainer");
    let newDiv = document.createElement("div");
    newDiv.classList.add("blog-post");

    // Example: Adding a message
    let message = document.createElement("p");
    message.textContent = `This is blog post ${count}`;
    newDiv.appendChild(message);

    // Example: Adding an image
    let image = document.createElement("img");
    image.src = "path_to_your_image.jpg";
    newDiv.appendChild(image);

    // Append the new div to the container
    container.appendChild(newDiv);
}


// Story Script
let currentDivId = null;

document.getElementById('Storybutton').addEventListener('click', function() {
    currentDivId = null; // Reset currentDivId to indicate the default behavior
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            if (currentDivId) {
                // Directly upload to the clicked div if currentDivId is set
                const div = document.getElementById(currentDivId);
                div.style.backgroundImage = `url(${e.target.result})`;
            } else {
                // Otherwise, find the next available div
                const uploadDivs = document.getElementsByClassName('upload-div');
                let uploaded = false;
                for (let i = 0; i < uploadDivs.length; i++) {
                    const div = uploadDivs[i];
                    if (!div.style.backgroundImage) { // Check if the div is empty
                        div.style.backgroundImage = `url(${e.target.result})`;
                        uploaded = true;
                        break;
                    }
                }
                if (!uploaded) {
                    alert('All divs are already occupied with images.');
                }
            }
        };
        reader.readAsDataURL(file);
    }
});

document.querySelectorAll('.upload-div').forEach(div => {
    div.addEventListener('click', function() {
        // Check if the div already has a background image
        if (!this.style.backgroundImage) {
            currentDivId = this.id;
            document.getElementById('fileInput').click();
        }
    });
});



$(document).ready(function() {
    // Array to keep track of image sources
    const imageSources = [];

    $('#core-memories-button').on('click', function() {
        $('#Input').click();
    });

    $('#Input').on('change', function(event) {
        const files = event.target.files;
        if (files.length > 0) {
            const images = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
                reader.onload = function(e) {
                    images.push(e.target.result);
                    if (images.length === files.length) {
                        // Assign images to each div
                        $('.box div').each(function(index) {
                            if (index < images.length) {
                                $(this).find('img').attr('src', images[index]);
                            }
                        });
                        // Keep the remaining images for future use
                        imageSources.push(...images.slice(images.length));
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    });
    let uploaded = false;
                for (let i = 0; i < CoreUpload.length; i++) {
                    const div = CoreUpload[i];
                    if (!div.style.backgroundImage) { // Check if the div is empty
                        div.style.backgroundImage = `url(${e.target.result})`;
                        uploaded = true;
                        break;
                    }
                }

    document.querySelectorAll('.CoreUpload').forEach(div => {
        div.addEventListener('click', function() {
            // Check if the div already has a background image
            if (!this.style.backgroundImage) {
                currentDivId = this.id;
                document.getElementById('fileInput').click();
            }
        });
    });

    $(document).on('click', '.box div', function() {
        if ($(this).hasClass('spin')) {
            $('.box div').removeClass('spin');
        } else {
            $('.box div').removeClass('spin');
            $(this).addClass('spin');
        }
    });
});
