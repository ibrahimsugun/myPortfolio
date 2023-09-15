// Kullanıcının IP adresini almak için bir HTTP isteği yapın
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    // IP adresini kullanabilir veya gönderebilirsiniz
    console.log('Kullanıcının IP adresi: ' + ipAddress);
    // Burada e-posta göndermek yerine, kullanıcıya izin isteyen bir iletişim formu veya bildirim gösterebilirsiniz.
  })
  .catch(error => {
    console.error('IP adresi alınamadı: ' + error);
  });
  'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0
    ;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname  ,':',   alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
    }
  });
});