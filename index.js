var features = document.querySelector("#features");
var company = document.querySelector("#company");
var features_images = document.querySelectorAll("#features > img");
var company_images = document.querySelectorAll("#company > img");

features.addEventListener("click", function() {
    for(count = 0; count < features_images.length; count++) {
        features_images[count].classList.toggle("hidden");
    }
    document.querySelector("#features > .innerList").classList.toggle("hidden");
})

company.addEventListener("click", function() {
    for(count = 0; count < company_images.length; count++) {
        company_images[count].classList.toggle("hidden");
    }
    document.querySelector("#company > .innerList").classList.toggle("hidden");
})