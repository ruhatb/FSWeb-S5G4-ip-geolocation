//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
 function ipAdresimiAl() {
   axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
// Make a request for a user with a given ID
function getIpLocationData(ip) {
  axios
    .get("https://apis.ergineer.com/ipgeoapi/" + ip)
    .then(function (response) {
      // handle success
      console.log(response);
      cardCreator(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

// getIpLocationData("77.111.244.38");
// getIpLocationData(benimIP);

async function runApp() {
  console.log("runApp çalıştı");
  console.log("benimIP 1", benimIP);
  await ipAdresimiAl();
  console.log("benimIP 2", benimIP);
  getIpLocationData(benimIP);
}

runApp();

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/

const sampleStaticData = {
  sorgu: "88.238.166.138",
  durum: "OK",
  kıta: "Asia",
  ülke: "Turkey",
  ülkeKodu: "TR",
  ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
  bölge: "06",
  bölgeAdı: "Ankara",
  şehir: "Cankaya",
  zip: "06510",
  enlem: 39.9111,
  boylam: 32.8157,
  saatdilimi: "Europe/Istanbul",
  parabirimi: "TRY",
  isp: "TurkTelecom",
  organizasyon: "Turk Telekomunikasyon A.S",
  as: "AS47331 TTNet A.S.",
};

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

function cardCreator(data) {
  console.log("cardCreator çalıştı");
  const card = `<div class="card">
				<img src="https://flagcdn.com/w320/${data["ülkeKodu"].toLowerCase()}.png" />
				<div class="card-info">
					<h3 class="ip">${data.sorgu}</h3>
					<p class="ulke">${data["ülkeKodu"]}</p>
					<p>Enlem: ${data.enlem} Boylam: ${data.boylam}</p>
					<p>Şehir: ${data["şehir"]}</p>
					<p>Saat dilimi: ${data.saatdilimi}</p>
					<p>Para birimi: ${data.parabirimi}</p>
					<p>ISP: ${data.isp}</p>
				</div>`;

  document.querySelector(".cards").innerHTML = card;
}

// cardCreator(sampleStaticData);

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
