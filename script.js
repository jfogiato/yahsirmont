console.log("Deployed from GH Pages");

// Global Variables
const mainImage = document.getElementById("main-image");
const body = document.body;


// Functions
function changeMainImage() {

    if (mainImage.src.includes("/Assets/yahsir_funny_helmet.jpeg")) {
        mainImage.src = "/Assets/yahsir_tree.jpeg";
        mainImage.alt = "An image of Yahsir hanging from a tree while hiking."
    } else if (mainImage.src.includes("/Assets/yahsir_tree.jpeg")) {
        mainImage.src = "/Assets/yahsir_and_joe.jpeg";
        mainImage.alt = "An image of Yahsir and Joe.";
    } else {
        mainImage.src = "/Assets/yahsir_funny_helmet.jpeg";
        mainImage.alt = "An image of Yahsir making a funny face while wearing a bike helmet.";
    }

};

function goCrazy() {

    // Change the background color randomly
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    body.style.backgroundColor = randomColor;

    // Rotate the main image
    const randomRotation = Math.floor(Math.random() * 360);
    mainImage.style.transform = `rotate(${randomRotation}deg)`;

    // Show a random funny message
    const messages = [
        "Why did you click? 🤪",
        "Woah, things are getting crazy! 🌈",
        "Look at you, being all curious! 🕵️",
        "Buckle up, it's zany time! 🎉",
        "Oops, I think you broke something! 🔧",
        "One click closer to chaos! 🔥"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Display the message in an alert
    alert(randomMessage);
};