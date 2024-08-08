let head = document.querySelector(".bckbtn");

        window.addEventListener("scroll", function () {
          console.log('jgjhfy');
          if (window.pageYOffset > 150) {
            head.style.display = "block"
          } else if (window.pageYOffset < 150) {
            head.style.display = "none"
          }
        })