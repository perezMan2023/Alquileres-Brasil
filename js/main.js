function initializeSlider(_slider-frame-., options) {
  
    const slider-frame = document.getElementById(containerId);
    
   
    $(slider-frame).slick(options);
  }
  
  initializeSlider("slider-frame", {
    slidesToShow: 3,
    autoplay: true,
  });
  
/*  La idea es utilizar este codigo para no hacer SLIDER en cada publicidad (re-utilizar codigo)
estoy pensando que cada publicidad tiene distintas fotos entonces NO SE SI SIRVE ESTO*/
  