function yasHesapla() {
  const dogumTarihiStr = document.getElementById("dogumTarihi").value;
  if (!dogumTarihiStr) {
    alert("Lütfen doğum tarihinizi seçin.");
    return;
  }

  const dogumTarihi = new Date(dogumTarihiStr);
  const bugun = new Date();

  if (dogumTarihi > bugun) {
    alert("Doğum tarihiniz bugünden büyük olamaz!");
    return;
  }

  // Yıl farkı
  let yilFarki = bugun.getFullYear() - dogumTarihi.getFullYear();
  let ayFarki = bugun.getMonth() - dogumTarihi.getMonth();
  let gunFarki = bugun.getDate() - dogumTarihi.getDate();

  // Eğer ay farkı negatifse veya ay aynı ama gün negatifse yıl farkını 1 azalt
  if (ayFarki < 0 || (ayFarki === 0 && gunFarki < 0)) {
    yilFarki--;
    ayFarki += 12;
  }

  if (gunFarki < 0) {
    // Önceki aydaki gün sayısını bul
    const oncekiAy = new Date(bugun.getFullYear(), bugun.getMonth(), 0).getDate();
    gunFarki += oncekiAy;
    ayFarki--;
  }

  // Sonraki doğum günü
  let sonrakiDogumGunu = new Date(bugun.getFullYear(), dogumTarihi.getMonth(), dogumTarihi.getDate());
  if (sonrakiDogumGunu < bugun) {
    sonrakiDogumGunu.setFullYear(bugun.getFullYear() + 1);
  }

  // Kalan gün sayısı
  const farkMs = sonrakiDogumGunu - bugun;
  const kalanGun = Math.ceil(farkMs / (1000 * 60 * 60 * 24));

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <p>Yaşınız: <strong>${yilFarki} yıl, ${ayFarki} ay, ${gunFarki} gün</strong></p>
      <p>Bir sonraki doğum gününüze <strong>${kalanGun} gün</strong> kaldı.</p>
    </div>
  `;
}
