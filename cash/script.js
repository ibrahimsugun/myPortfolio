// Form elemanlarına referanslar oluştur
var cashmiktarInput = document.getElementById("cashmiktar");  //kaç cash var
var cashfiyatInput = document.getElementById("cashfiyat");      // cash kaç para
var itemParaInput = document.getElementById("itemPara");        //item kaç cash

var mKacTLInput = document.getElementById("mKacTL")         //1 M Oyun parası kaç TL
var itemKacMInput = document.getElementById("itemKacM")            //itemin oyun içi fiyatı

var cashmiktarInput2 = document.getElementById("cashmiktar2");  //kaç cash var
var cashfiyatInput2 = document.getElementById("cashfiyat2");      // cash kaç para
var itemKacMInput2 = document.getElementById("itemKacM2")            //itemin oyun içi fiyatı
var mKacTLInput2 = document.getElementById("mKacTL2")            //1 M Oyun parası kaç TL



//Butonlara referans oluştur
var calculateButton = document.getElementById("calculateButton");
var calculateButton2 = document.getElementById("calculateButton2");
var calculateButton3 = document.getElementById("calculateButton3")

var resetButton = document.getElementById("resetButton");
var resetButton2 = document.getElementById("resetButton2");
var resetButton3 = document.getElementById("resetButton3");



//Sonuç alanlarına referans oluştur.
var resultDiv = document.getElementById("result");
var resultDiv2 = document.getElementById("result2");
var resultDiv3 = document.getElementById("result3")



// Hesaplama fonksiyonlarını tanımla
function hesapla() {
  // Form elemanlarından değerleri al
  var cashmiktar = Number(cashmiktarInput.value); //Kaç cash var
  var cashfiyat = Number(cashfiyatInput.value);     //cash kaç para
  var itemPara = Number(itemParaInput.value);       //item kaç cash
  if (!cashmiktar || !cashfiyat || !itemPara) {
    resultDiv.innerHTML = "İlgili alanları boş bırakmayın"
    return;
  }
  // Hesaplamaları yap
  var birimItemPara = cashfiyat / cashmiktar;       //1 cash kaç TL 

  var itemparaTL = birimItemPara * itemPara
 
  // Sonuçları HTML etiketlerine yazdır
  resultDiv.innerHTML = "Alacağınız item " + itemparaTL + " TL'ye geliyor."
}
calculateButton.addEventListener("click", hesapla);




function hesapla2() {
    // Form elemanlarından değerleri al
    var mToTL = Number(mKacTLInput.value);          //1 M Oyun parası kaç TL
    var itemToM = Number(itemKacMInput.value);     //itemin oyun içi fiyatı
    if (!mToTL || !itemToM) {
      resultDiv2.innerHTML = "İlgili alanları boş bırakmayın"
      return;
    }
    // Hesaplamaları yap

    var itemToTL = (mToTL * itemToM) //item kaç TL

   
    // Sonuçları HTML etiketlerine yazdır
    resultDiv2.innerHTML = "Alacağınız item " + itemToTL + " TL'ye geliyor."

  }
// Hesapla düğmesine tıklanınca hesaplamaları yap
calculateButton2.addEventListener("click", hesapla2);



// Hesaplama fonksiyonunu tanımla
function hesapla3() {
  // Form elemanlarından değerleri al
  var cashmiktar2 = Number(cashmiktarInput2.value); //Kaç cash var
  var cashfiyat2 = Number(cashfiyatInput2.value);     //cash kaç para
  var itemToM2 = Number(itemKacMInput2.value);     //itemin oyun içi fiyatı
  var mToTL2 = Number(mKacTLInput2.value);          //1 M Oyun parası kaç TL
/*   if (!cashmiktar2 || !cashfiyat2 || !itemToM2 || !mToT2L) {
    resultDiv3.innerHTML = "İlgili alanları boş bırakmayın"
    return;
  } */
  // Hesaplamaları yap
  var birimItemPara = cashfiyat2 / cashmiktar2;       //1 cash kaç TL 
  var itemToTL = (mToTL2 * itemToM2)  // item kaç TL

  var itemToCash = itemToTL * birimItemPara   //teim kaç cash
 
  // Sonuçları HTML etiketlerine yazdır
  resultDiv3.innerHTML = "Alacağınız item " + itemToCash + " Cash'e geliyor."
}
// Hesapla düğmesine tıklanınca hesaplamaları yap
calculateButton3.addEventListener("click", hesapla3);


// İlgini alanları sıfırlama

resetButton.addEventListener("click", function() {
  cashmiktar.value = "";
  cashfiyat.value = "";
  itemPara.value = "";
  result.innerHTML = "";
});

resetButton2.addEventListener("click", function() {
  mKacTL.value = "";
  itemKacM.value = "";
  result2.innerHTML = "";
});


resetButton3.addEventListener("click", function() {
  cashmiktar2.value = "";
  cashfiyat2.value = "";
  itemKacM2.value = "";
  mKacTL2.value = "";
  result3.innerHTML = "";
});