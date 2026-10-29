var pos = 0;

let pageWidth = window.innerWidth;

const pacArray = [
    ["images/PacMan1.jpeg", "images/PacMan2.jpeg"],
    ["images/PacMan3.jpeg", "images/PacMan4.jpeg"]
];

var direction = 0;
var focus = 0;

function Run() {

    let img = document.getElementById("PacMan");

    let imgWidth = img.width;

    // Change PacMan image
    focus = (focus + 1) % 2;

    // Check screen boundary
    direction = checkPageBounds(
        direction,
        imgWidth,
        pos,
        pageWidth
    );

    // Change image based on direction
    img.src = pacArray[direction][focus];

    // Move PacMan
    if (direction) {

        // Move left
        pos -= 20;
        img.style.left = pos + "px";

    } else {

        // Move right
        pos += 20;
        img.style.left = pos + "px";
    }
}

// Run every 200 milliseconds
setInterval(Run, 200);


// Check whether PacMan reaches screen edge
function checkPageBounds(direction, imgWidth, pos, pageWidth) {

    // Right edge
    if (pos + imgWidth > pageWidth) {
        direction = 1;
    }

    // Left edge
    if (pos < 0) {
        direction = 0;
    }

    return direction;
}