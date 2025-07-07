function faizHesapla() {
  const anapara = parseFloat(document.getElementById("anapara").value);
  const faizOrani = parseFloat(document.getElementById("faizOrani").value);
  const vade = parseFloat(document.getElementById("vade").value);
  const yontem = document.getElementById("yontem").value;

  if (isNaN(anapara) || isNaN(faizOrani) || isNaN(vade)) {
    alert("Lütfen geçerli tüm değerleri giriniz.");
    return;
  }

  const oran = faizOrani / 100;
  let faiz = 0;
  let toplam = 0;

  if (yontem === "basit") {
    faiz = anapara * oran * vade;
    toplam = anapara + faiz;

    document.getElementById("sonuc").innerHTML = `
      <div class="alert alert-success">
        <strong>Basit Faiz:</strong> ${faiz.toFixed(2)} ₺<br>
        <strong>Toplam Geri Ödeme:</strong> ${toplam.toFixed(2)} ₺
      </div>
    `;
  } else if (yontem === "bilesik") {
    toplam = anapara * Math.pow((1 + oran), vade);
    faiz = toplam - anapara;

    document.getElementById("sonuc").innerHTML = `
      <div class="alert alert-success">
        <strong>Bileşik Faiz:</strong> ${faiz.toFixed(2)} ₺<br>
        <strong>Toplam Geri Ödeme:</strong> ${toplam.toFixed(2)} ₺
      </div>
    `;
  }
}
