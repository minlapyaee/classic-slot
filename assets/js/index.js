let user = {};
let balance = 999999;
function updateBalance() {
    const balanceElement = document.getElementById("balance");
    if(balanceElement) {
        balanceElement.innerHTML =
          balance + '<span class="balance-unit">Balance</span>';
    }
}

// particle
particlesJS.load("particles-js", "assets/particlesjs-config.json", function () {
    console.log("callback - particles.js config loaded");
});
  // end particle