window.onload = function () {
    const stage1 = document.getElementById('stage1');
    const stage2 = document.getElementById('stage2');
    const popup = document.getElementById('popup');
  
    // Switch to Silver Jubilee text after 5 seconds
    setTimeout(() => {
      stage1.classList.add('hidden');
      stage2.classList.remove('hidden');
    }, 5000);
  
    // Hide popup after 10 seconds
    setTimeout(() => {
      popup.style.display = 'none';
    }, 10000);
  };
  