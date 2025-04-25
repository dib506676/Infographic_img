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