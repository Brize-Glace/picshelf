var brightnessSlider = document.getElementById("brightnessSlider");
var myImage = document.getElementById("myImage");

brightnessSlider.oninput = function() {
  var brightnessValue = (this.value - 100) / 100; 
  myImage.style.filter = "brightness(" + (1 + brightnessValue) + ")";
};

var contrastSlider = document.getElementById("contrastSlider");

contrastSlider.oninput = function () {
    var contrastValue = (this.value - 100) / 100;
    myImage.style.filter = "contrast(" + (1 + contrastValue) + ")";
}
var resetButton = document.getElementById('resetbutton');

resetButton.addEventListener('click', () => {
  brightnessSlider.value = 100;
  contrastSlider.value = 100;
  location.reload();
})