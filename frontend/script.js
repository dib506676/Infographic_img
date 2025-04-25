document.getElementById("screenshotBtn").addEventListener("click", function() {
  // Target only the infographic container
  const element = document.querySelector(".infographic");
  
  // Use html2canvas to capture just the infographic
  html2canvas(element, {
    scale: 2, //this is to download the image in high quality
    logging: false,
    useCORS: true,
    allowTaint: true,
    scrollX: 0,
    scrollY: -window.scrollY
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "infographic-screenshot.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }).catch(error => {
    console.error("Error capturing screenshot:", error);
    alert("Failed to capture screenshot. Please try again.");
  });
});


const btn = document.getElementById('screenshotBtn');
    const toast = document.getElementById('toast');

    btn.addEventListener('click', () => {
      html2canvas(document.body).then(canvas => {
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL();
        link.click();
        showToast();
      });
    });

    function showToast() {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }