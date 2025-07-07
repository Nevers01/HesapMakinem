function gunBul() {
  const tarihInput = document.getElementById("tarih").value;

  if (!tarihInput) {
    alert("Lütfen bir tarih seçiniz.");
    return;
  }

  const tarih = new Date(tarihInput);
  const gunler = [
    "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"
  ];
  const gun = gunler[tarih.getDay()];

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-info">
      Seçtiğiniz tarih: <strong>${tarihInput}</strong><br>
      Haftanın günü: <strong>${gun}</strong>
    </div>
  `;
}
