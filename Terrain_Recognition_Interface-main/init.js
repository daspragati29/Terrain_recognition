$(function() {
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
});

jQuery(document).ready(function($) {
  

  var alterClass = function() {
      var ww = $(window).width(); // Use jQuery to get the window width
     
          $('#wrapper').addClass('toggled');
      
  };

  $(window).resize(function() {
      alterClass();
  });

  // Fire it when the page first loads:
  alterClass();

  $(".button-38").click(function() { 
      var inputName = $(".z").val(); 
      //console.log(inputName);
      $(".img").attr("src", "images/1/"+inputName+".png");
      console.log("images/1"+inputName+".png")
  });
  $(".im img").click(function() { 
    var inputName = $(".z").val(); 
    var $img = $(this); // Store the image element in a variable
    var currentSrc = $img.attr("src"); // Get the current source
    
    // Check the current source and toggle between the two values
    if (currentSrc === "images/1/" + inputName + ".png") {
        $img.attr("src", "images/1/" + inputName + "out" + ".png");
    } else {
        $img.attr("src", "images/1/" + inputName + ".png");
    }
    
    console.log("Current source: " + $img.attr("src"));
});

  function clickMe() {
    var text = document.getElementById("popupZ");
    text.classList.toggle("hide");
    text.classList.toggle("show");
  }
  $("#chat").click(function() {
    clickMe();
  });
  function autoGrowTextarea() {
    const textarea = document.getElementById("popupZ");
    textarea.style.height = "auto"; // Reset the height
    textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the content's scroll height
}

// Attach the auto-grow function to the textarea's input event
const textarea = document.getElementById("popupZ");
textarea.addEventListener("input", autoGrowTextarea);

// Trigger the auto-grow function initially
autoGrowTextarea();

document.querySelector('.im img').addEventListener('mouseover', function() {
  this.classList.add('centered');
  document.getElementById('sidebar-wrapper').style.display = 'none';
});

document.querySelector('.im img').addEventListener('mouseout', function() {
  this.classList.remove('centered');
  document.getElementById('sidebar-wrapper').style.display = 'block';
});

})

$(document).ready(cHeight);
$(window).resize(cHeight);

function cHeight() {
  var docHeight = $(window).outerHeight();
  var headerHeight = $("header").outerHeight();
  var sidebarWidth = $("#sidebar-wrapper").outerWidth();
  var sidebarHeight = docHeight - headerHeight + 'px';
  $('.sidebar-brand').css('min-width', sidebarWidth - 15 + 'px'); // Removed single quotes around 15
  $('#sidebar-wrapper').css('height', sidebarHeight);
}
