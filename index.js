
window.addEventListener("load", function() {
  setTimeout(function() {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".cont").style.display = "block";
  }, 1000);
});










document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('s1').classList.add('visible');
  }, 500);
});
$("#button2").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s2').classList.add('visible');
    }, 500);
  });
});
$("#button3").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s3').classList.add('visible');
    }, 500);
  });
});
$("#button4").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s4').classList.add('visible');
    }, 500);
  });
});
$("#button5").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s5').classList.add('visible');
    }, 500);
  });
});
$("#button6").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s6').classList.add('visible');
    }, 500);
  });
});
$("#button7").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s7').classList.add('visible');
    }, 500);
  });
});
$("#button8").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s8').classList.add('visible');
    }, 500);
  });
});
$("#button9").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s9').classList.add('visible');
    }, 500);
  });
});
$("#button10").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s10').classList.add('visible');
    }, 500);
  });
});
$("#button11").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s11').classList.add('visible');
    }, 500);
  });
});
$("#button12").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s12').classList.add('visible');
    }, 500);
  });
});
$("#button13").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s13').classList.add('visible');
    }, 500);
  });
});
$("#button14").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s14').classList.add('visible');
    }, 500);
  });
});
$("#button15").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s15').classList.add('visible');
    }, 500);
  });
});
$("#button16").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s16').classList.add('visible');
    }, 500);
  });
});
$("#button17").click(function() {
  document.addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('s17').classList.add('visible');
    }, 500);
  });
});




   const images = document.querySelectorAll('.gal');
   let currentIndex = 0;
   
   function cycleImages() {
     images.forEach((image, index) => {
       if (index === currentIndex) {
         image.style.transform = 'translateZ(100px)';
         image.style.opacity=1;
       } else {
         image.style.transform = 'none';
         image.style.opacity=0.5;
       }
     });
     currentIndex = (currentIndex + 1) % images.length;
   }
   
   setInterval(cycleImages, 1000);
   
   
   
   
   $("#button1").click(function() {
        $("#code1").show();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button2").click(function() {
        $("#code1").hide();
        $("#code2").show();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button3").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").show();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button4").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").show();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button5").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").show();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button6").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").show();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button7").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").show();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button8").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").show();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button9").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").show();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button10").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").show();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button11").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").show();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button12").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").show();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button13").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").show();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button14").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").show();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button15").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").show();
        $("#code16").hide();
        $("#code17").hide();
      });
      $("#button16").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").show();
        $("#code17").hide();
      });
      $("#button17").click(function() {
        $("#code1").hide();
        $("#code2").hide();
        $("#code3").hide();
        $("#code4").hide();
        $("#code5").hide();
        $("#code6").hide();
        $("#code7").hide();
        $("#code8").hide();
        $("#code9").hide();
        $("#code10").hide();
        $("#code11").hide();
        $("#code12").hide();
        $("#code13").hide();
        $("#code14").hide();
        $("#code15").hide();
        $("#code16").hide();
        $("#code17").show();
      });

  
    
      const mediaQuery = window.matchMedia("(max-width: 600px)");
      const contentElement = document.getElementById("content");
      
      function handleMediaQueryChange(mediaQuery) {
        if (mediaQuery.matches) {
      
          contentElement.style.display = "block";
          const d=document.getElementById("homea");
          d.setAttribute("src","Home3.jpg")
          const div = document.getElementById("change");
          div.setAttribute("href","#contact");
          
        } else {
          contentElement.style.display = "none";
        }
      }
      
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
