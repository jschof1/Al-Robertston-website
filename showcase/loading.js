function init() {
    var imgDefer = document.querySelectorAll(".img-wrap");
    var lastLoadIndex = 0;
    function loadNextImage() {
      if (imgDefer.length === lastLoadIndex) {
        return;
      }
      imgDefer[lastLoadIndex].addEventListener("load", loadNextImage);
      imgDefer[lastLoadIndex].setAttribute(
        "src",
        imgDefer[lastLoadIndex].getAttribute("data-src")
      );
      lastLoadIndex += 1;
    };
    loadNextImage();
  }
  window.onload = init;