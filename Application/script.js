// For capturing the photo using webcam
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Access webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing camera: ", err);
    });

// Capture the photo
function capturePhoto() {
    canvas.style.display = 'block';
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
}
