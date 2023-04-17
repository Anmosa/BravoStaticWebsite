//First question 

  var rect = document.getElementById("my-rect");

  document.getElementById("red-button").addEventListener("click", function() {
    rect.setAttribute("fill", "red");
  });
  document.getElementById("green-button").addEventListener("click", function() {
    rect.setAttribute("fill", "green");
  });
  document.getElementById("yellow-button").addEventListener("click", function() {
    rect.setAttribute("fill", "yellow");
  });
  document.getElementById("pink-button").addEventListener("click", function() {
    rect.setAttribute("fill", "pink");
  });
  document.getElementById("black-button").addEventListener("click", function() {
    rect.setAttribute("fill", "black");
  });

// Second Question
dict = {
primeraimegen: "images/Image1.jpg"

}


var image = document.getElementById("my-image");

document.getElementById("changeImage1").addEventListener("click", function() {
    // image.src = "images/Image1.jpg";
    image.src = dict[primeraimegen];

});

document.getElementById("changeImage2").addEventListener("click", function() {
    image.src = "images/Image2.jpg";
});

document.getElementById("changeImage3").addEventListener("click", function() {
    image.src = "images/Image3.jpg";
});


// Third question
var count = 0;

document.getElementById("increment-button").addEventListener("click", function() {
  count++;
  document.getElementById("count").innerHTML = count;
});

document.getElementById("decrement-button").addEventListener("click", function() {
  count--;
  document.getElementById("count").innerHTML = count;
});

document.getElementById("reset-button").addEventListener("click", function() {
  count = 0;
  document.getElementById("count").innerHTML = count;
});