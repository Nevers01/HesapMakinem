function idealKiloHesapla() {
  const boy = parseFloat(document.getElementById("boy").value);
  const cinsiyet = document.getElementById("cinsiyet").value;

  if (isNaN(boy) || boy < 100) {
    alert("Lütfen geçerli bir boy giriniz (en az 100 cm).");
    return;
  }

  let idealKilo;
  const boyFark = boy - 100;

  if (cinsiyet === "erkek") {
    idealKilo = boyFark - (boyFark * 0.10); // %10 çıkar
  } else if (cinsiyet === "kadin") {
    idealKilo = boyFark - (boyFark * 0.15); // %15 çıkar
  }

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <strong>İdeal Kilonuz:</strong> ${idealKilo.toFixed(1)} kg
    </div>
  `;
}
