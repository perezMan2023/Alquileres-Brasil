function initializeSlider(_slider-frame-., options) {
    // Obtener el contenedor del slider
    const slider-frame = document.getElementById(containerId);
    
    // Lógica para inicializar el slider usando la librería o código que prefieras
    // Por ejemplo, aquí asumimos que estás utilizando una librería como Slick Slider
    $(slider-frame).slick(options);
  }
  // Inicializar un slider en el contenedor "slider-container-1"
  initializeSlider("slider-container-1", {
    slidesToShow: 3,
    autoplay: true,
    // Otras opciones
  });
  
  // Inicializar otro slider en el contenedor "slider-container-2"
  initializeSlider("slider-container-2", {
    slidesToShow: 2,
    autoplay: false,
    // Otras opciones
  });
  