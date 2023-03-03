var experiencesel = document.getElementById('experience');

var tst = document.getElementById('tst');


experiencesel.onload = function() {
    // tst.innerText = experiencesel.value;
    getExperiencesList(experiencesel.value);
}
experiencesel.onchange = function() {
    // tst.innerText = experiencesel.value;
    getExperiencesList(experiencesel.value);
}

function getExperiencesList(value) {
    document.getElementById(value).hidden = false;

    document.getElementById('sap').hidden = true;
    document.getElementById('ddn').hidden = true;
    document.getElementById('upmc').hidden = true;
    document.getElementById('swanson').hidden = true;
}

// show fullscreen noti
window.addEventListener("load", (event) => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
})