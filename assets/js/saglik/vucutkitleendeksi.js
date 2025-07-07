function bmiHesapla() {
  const kilo = parseFloat(document.getElementById("kilo").value);
  const boy = parseFloat(document.getElementById("boy").value);

  if (isNaN(kilo) || isNaN(boy) || kilo <= 0 || boy <= 0) {
    alert("Lütfen geçerli kilo ve boy bilgilerini giriniz.");
    return;
  }

  const bmi = kilo / (boy * boy);
  let yorum = "";

  if (bmi < 18.5) {
    yorum = "Zayıf";
  } else if (bmi >= 18.5 && bmi < 25) {
    yorum = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    yorum = "Fazla Kilolu";
  } else if (bmi >= 30 && bmi < 35) {
    yorum = "Obez (1. derece)";
  } else if (bmi >= 35 && bmi < 40) {
    yorum = "Obez (2. derece)";
  } else {
    yorum = "Morbid Obez (3. derece)";
  }

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-info">
      <strong>BMI:</strong> ${bmi.toFixed(2)}<br>
      <strong>Durum:</strong> ${yorum}
    </div>
  `;
}
