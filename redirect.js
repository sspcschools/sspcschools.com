function checkDeviceAndRedirect() {
  // Check if the device is a mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // Redirect to the mobile site
    window.location.href = "https://mobile.sspcschools.com";
  }
}
