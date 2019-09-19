var sizeRange = document.getElementById('sizeRange');
var currentRatio = document.getElementById('currentRatio');

sizeRange.addEventListener('change', function (e) {
  let size = sizeRange.value + "%";
  currentRatio.innerHTML = size;
  let target = document.getElementsByClassName("fig");
  for (var i = 0; i < target.length; i++) {
    target[i].style.width = size;
  }
});

var sizeInput = document.getElementById('sizeInput');
var currentSize = document.getElementById('currentSize');

sizeInput.addEventListener('change', function (e) {
  let size = sizeInput.value + "px";
  currentSize.innerHTML = size;
  let target = document.getElementsByClassName("fig");
  for (var i = 0; i < target.length; i++) {
    target[i].style.width = size;
  }
});
