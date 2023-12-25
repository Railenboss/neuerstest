document.addEventListener('DOMContentLoaded', (event) => {
  const body = document.body;
  const themeToggleDark = document.getElementById('theme-toggle-dark');
  const themeToggleLight = document.getElementById('theme-toggle-light');
  const downloadButton = document.getElementById('download-pdf');


  if (downloadButton) {
    document.getElementById('download-pdf').addEventListener('click', function() {
  const scale = window.devicePixelRatio; // Geräte-Pixel-Verhältnis verwenden
  html2canvas(document.querySelector('.card'), {
    scale: scale,
    useCORS: true
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width / scale, canvas.height / scale]
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / scale, canvas.height / scale);
    pdf.save('visitenkarte.pdf');
  });
});

  } 

  // Funktion, um den Dark Mode zu aktivieren
  function enableDarkMode() {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggleLight.style.display = 'block';
    themeToggleDark.style.display = 'none';
    localStorage.setItem('darkMode', 'enabled');
  }

  // Funktion, um den Light Mode zu aktivieren
  function disableDarkMode() {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggleDark.style.display = 'block';
    themeToggleLight.style.display = 'none';
    localStorage.setItem('darkMode', 'disabled');
  }

  // Überprüfen des Zustands beim Laden der Seite
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  } else {
    enableDarkMode();
  }

  themeToggleDark.addEventListener('click', enableDarkMode);
  themeToggleLight.addEventListener('click', disableDarkMode);

  // PDF-Download-Funktionalität


  

});
