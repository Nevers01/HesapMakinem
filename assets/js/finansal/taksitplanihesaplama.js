function taksitPlanHesapla() {
  const borc = parseFloat(document.getElementById("borc").value);
  const faiz = parseFloat(document.getElementById("faizOrani").value);
  const taksitSayisi = parseInt(document.getElementById("taksitSayisi").value);

  if (isNaN(borc) || isNaN(faiz) || isNaN(taksitSayisi) || borc <= 0 || taksitSayisi <= 0) {
    alert("Lütfen geçerli değerler giriniz.");
    return;
  }

  const aylikFaiz = faiz / 100;
  const taksit = (borc * aylikFaiz * Math.pow(1 + aylikFaiz, taksitSayisi)) / 
                 (Math.pow(1 + aylikFaiz, taksitSayisi) - 1);

  const toplamOdeme = taksit * taksitSayisi;
  const toplamFaiz = toplamOdeme - borc;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <strong>Aylık Taksit:</strong> ${taksit.toFixed(2)} ₺<br>
      <strong>Toplam Ödeme:</strong> ${toplamOdeme.toFixed(2)} ₺<br>
      <strong>Toplam Faiz:</strong> ${toplamFaiz.toFixed(2)} ₺
    </div>
  `;
}
