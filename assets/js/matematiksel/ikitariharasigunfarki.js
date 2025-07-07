function gunFarkiHesapla() {
  const baslangicStr = document.getElementById("baslangic").value;
  const bitisStr = document.getElementById("bitis").value;

  if (!baslangicStr || !bitisStr) {
    alert("Lütfen her iki tarihi de seçiniz.");
    return;
  }

  const baslangic = new Date(baslangicStr);
  const bitis = new Date(bitisStr);

  if (bitis < baslangic) {
    alert("Bitiş tarihi başlangıç tarihinden önce olamaz.");
    return;
  }

  const msFarki = bitis - baslangic;
  const gunFarki = Math.floor(msFarki / (1000 * 60 * 60 * 24)); // milisaniyeyi güne çevir

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      İki tarih arasındaki gün farkı: <strong>${gunFarki} gün</strong>
    </div>
  `;
}
