  // Kullanıcının IP adresini almak için bir HTTP isteği 
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    // IP adresini kullanabilir veya gönderebilirsiniz
    console.log('Say Hi ' + ipAddress);
    // Burada e-posta göndermek yerine, kullanıcıya izin isteyen bir iletişim formu veya bildirim gösterebilirsiniz.
  })
  .catch(error => {
    console.error('IP adresi alınamadı: ' + error);
  });