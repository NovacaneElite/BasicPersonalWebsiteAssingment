
function aboutme(e){
    var switches = document.getElementsByClassName("switches");

    var i;
    if(e.innerHTML == "I want more info"){
        for(i = 0; i < switches.length; i++){
            switches[i].style.display = "inline-block";
        }
        e.innerHTML = "Show less";
    }
    else{
        for(i = 0; i < switches.length; i++){
            switches[i].children[0].checked = false;
            switches[i].style.display = "none";
            document.getElementById("hobbiesTable").style.visibility = "hidden";
            document.getElementById("interestsTable").style.visibility = "hidden";
            document.getElementById("expectationsTable").style.visibility = "hidden";
            document.getElementById("strugglesTable").style.visibility = "hidden";
        }
        e.innerHTML = "I want more info";
    }
    document.getElementById("para").innerHTML = document.URL;
}

function checkboxChange(checkbox){
    var checkboxName = checkbox.name;

    var tableToSwitch;
    switch(checkboxName){
        case "hobbies":
            tableToSwitch = document.getElementById("hobbiesTable");
            break;
        case "interests":
            tableToSwitch = document.getElementById("interestsTable");
            break;
        case "expectations":
            tableToSwitch = document.getElementById("expectationsTable");
            break;
        case "struggles":
            tableToSwitch = document.getElementById("strugglesTable");
            break;
    }
    if(checkbox.checked == true){
        tableToSwitch.style.display = "table";
        tableToSwitch.style.visibility = "visible";
    }
    else{
        tableToSwitch.style.visibility = "hidden";
    }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
