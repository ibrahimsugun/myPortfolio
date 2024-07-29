  // Kullanıcının IP adresini almak için bir HTTP isteği 
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    // IP adresini kullanabilir veya gönderebilirsiniz
    console.log('Say Hi ' + ipAddress);
    
  })
  .catch(error => {
    console.error('IP adresi alınamadı: ' + error);
  });