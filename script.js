console.log("Deployed from GH Pages");

// Global Variables
const mainImage = document.getElementById("main-image");

function changeMainImage() {

    if (mainImage.src.includes("/Asssets/yahsir_funny_helmet.jpeg")) {
        mainImage.src = "/Asssets/yahsir_tree.jpeg";
        mainImage.alt = "An image of Yahsir hanging from a tree while hiking."
    } else {
        mainImage.src = "/Asssets/yahsir_funny_helmet.jpeg";
        mainImage.alt = "An image of Yahsir making a funny face while wearing a bike helmet.";
    }

};