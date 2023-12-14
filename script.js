document.addEventListener("DOMContentLoaded", function () {
    var changeMeParagraph = document.getElementById("changeMe");
var changeButton = document.getElementById("changeButton");
    var santaButton = document.getElementById("santaButton");
var brokeSantaButton = document.getElementById("brokeSantaButton");
    var snowButton = document.getElementById("snowButton"); // New button reference for snow effect
var collageSection = document.getElementById("collageSection");

changeButton.addEventListener("click", function () {
changeMeParagraph.textContent = "ain't no Santa Here";
        createFloatingMessage("Happy Christmas");
    });

santaButton.addEventListener("click", function () {
    createFloatingMessageWithImage("Santa.png");
    });

brokeSantaButton.addEventListener("click", function () {
    createFloatingMessage("Santa is broke");
    });

snowButton.addEventListener("click", function () {
    createSnowfall();
    });

function createFloatingMessage(message) {
    var floatingMessage = document.createElement("div");
floatingMessage.textContent = message;
floatingMessage.className = "floating-message";
        document.body.appendChild(floatingMessage);

var randomX = Math.random() * window.innerWidth;
    var randomY = window.innerHeight;

    floatingMessage.style.left = randomX + "px";
floatingMessage.style.top = randomY + "px";

floatingMessage.animate([
            { transform: "translateY(0)", opacity: 1 },
            { transform: "translateY(-100vh)", opacity: 0 }
], {
    duration: 3000,
            easing: "ease-out",
    fill: "forwards"
        });

        setTimeout(function () {
document.body.removeChild(floatingMessage);
        }, 3000);
    }

    function createFloatingMessageWithImage(imageSrc) {
var floatingMessage = document.createElement("div");
        var image = document.createElement("img");
image.src = imageSrc;

floatingMessage.appendChild(image);
        floatingMessage.className = "floating-message";
document.body.appendChild(floatingMessage);

var randomX = Math.random() * window.innerWidth;
    var randomY = window.innerHeight;

        floatingMessage.style.left = randomX + "px";
floatingMessage.style.top = randomY + "px";

        floatingMessage.animate([
{ transform: "translateY(0)", opacity: 1 },
    { transform: "translateY(-100vh)", opacity: 0 }
        ], {
duration: 3000,
            easing: "ease-out",
    fill: "forwards"
        });

setTimeout(function () {
            document.body.removeChild(floatingMessage);
        }, 3000);
    }

function createSnowfall() {
        var snowflakesContainer = document.createElement("div");
snowflakesContainer.className = "snowfall-container";
        document.body.appendChild(snowflakesContainer);

for (var i = 0; i < 50; i++) {
        var snowflake = document.createElement("div");
    snowflake.className = "snowflake";
snowflakesContainer.appendChild(snowflake);

var randomX = Math.random() * window.innerWidth;
    var randomY = Math.random() * window.innerHeight;

snowflake.style.left = randomX + "px";
snowflake.style.top = randomY + "px";

            snowflake.animate([
    { transform: "translateY(0)", opacity: 1 },
    { transform: "translateY(100vh)", opacity: 0 }
            ], {
duration: Math.random() * 5000 + 5000, // Vary duration for a natural look
    easing: "linear",
iterations: Infinity
    });
        }
    }
});
