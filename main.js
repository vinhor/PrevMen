window.onload = function () {
  let slctEvropa = document.getElementById("slctEvropa");
  let slctZbytek = document.getElementById("slctZbytek");
  let btnEvropa = document.getElementById("btnEvropa");
  let btnZbytek = document.getElementById("btnZbytek");
  upozorneni = document.getElementById("upozorneni");
  let btnPrevod = document.getElementById("btnPrevod");
  let divt = document.getElementById("divt");
  let br = document.createElement("br");
  let pInput = document.getElementById("pInput");

  const requestURL =
    "https://api.exchangerate.host/latest?base=CZK&symbols=EUR,USD,GBP,UAH,CHF,SEK,JPY,CAD";
  let request = new XMLHttpRequest();
  request.responseType = "json";
  request.onload = () => {
    console.log(request.response);
    eurkc = new Prevod(request.response.rates.EUR);
    usdkc = new Prevod(request.response.rates.USD);
    gbpkc = new Prevod(request.response.rates.GBP);
    uahkc = new Prevod(request.response.rates.UAH);
    chfkc = new Prevod(request.response.rates.CHF);
    sekkc = new Prevod(request.response.rates.SEK);
    jpykc = new Prevod(request.response.rates.JPY);
    cadkc = new Prevod(request.response.rates.CAD);
  };
  request.open("GET", requestURL);
  request.send();

  slctEvropa.value = 0;
  slctZbytek.value = 0;

  vlevo.value = null;
  vpravo.value = null;

  vlevo.onfocus = function () {
    vpravo.value = null;
  };

  vpravo.onfocus = function () {
    vlevo.value = null;
  };

  if (window.innerWidth < 475) {
    divt.className = "malatlacitka";
    divt.insertBefore(br, btnZbytek);
  } else {
    divt.className = "tlacitka";
  }

  btnEvropa.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctEvropa.value = 0;
    slctEvropa.style.display = "inline";
    slctZbytek.style.display = "none";
    btnEvropa.className = "one aktivni";
    btnZbytek.className = "two neaktivni";
    pInput.style.display = "inline";
    btnPrevod.onclick = vyberEvropa;
  };

  btnZbytek.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctZbytek.value = 0;
    slctEvropa.style.display = "none";
    slctZbytek.style.display = "inline";
    btnEvropa.className = "one neaktivni";
    btnZbytek.className = "two aktivni";
    pInput.style.display = "inline";
    btnPrevod.onclick = vyberZbytek;
  };

  slctEvropa.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    if (slctEvropa.value == 0) {
      lvlevo.innerHTML = "";
      lvpravo.innerHTML = "";
    } else if (slctEvropa.value == 1) {
      lvlevo.innerHTML = "€";
      lvpravo.innerHTML = "Kč";
    } else if (slctEvropa.value == 2) {
      lvlevo.innerHTML = "&pound";
      lvpravo.innerHTML = "Kč";
    } else if (slctEvropa.value == 3) {
      lvlevo.innerHTML = "₴";
      lvpravo.innerHTML = "Kč";
    } else if (slctEvropa.value == 4) {
      lvlevo.innerHTML = "Fr.";
      lvpravo.innerHTML = "Kč";
    } else if (slctEvropa.value == 5) {
      lvlevo.innerHTML = "kr";
      lvpravo.innerHTML = "Kč";
    }
  };

  slctZbytek.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    if (slctZbytek.value == 0) {
      lvlevo.innerHTML = "";
      lvpravo.innerHTML = "";
    } else if (slctZbytek.value == 1) {
      lvlevo.innerHTML = "$";
      lvpravo.innerHTML = "Kč";
    } else if (slctZbytek.value == 2) {
      lvlevo.innerHTML = "&yen";
      lvpravo.innerHTML = "Kč";
    } else if (slctZbytek.value == 3) {
      lvlevo.innerHTML = "C$";
      lvpravo.innerHTML = "Kč";
    }
  };

  function vyberEvropa() {
    upozorneni.innerHTML = "";
    if (slctEvropa.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctEvropa.value == 1) {
      eurkc.meny();
    } else if (slctEvropa.value == 2) {
      gbpkc.meny();
    } else if (slctEvropa.value == 3) {
      uahkc.meny();
    } else if (slctEvropa.value == 4) {
      chfkc.meny();
    } else if (slctEvropa.value == 5) {
      sekkc.meny();
    }
  }

  function vyberZbytek() {
    upozorneni.innerHTML = "Nevybrali jste si převod!";
    if (slctZbytek.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctZbytek.value == 1) {
      usdkc.meny();
    } else if (slctZbytek.value == 2) {
      jpykc.meny();
    } else if (slctZbytek.value == 3) {
      cadkc.meny();
    }
  }
};
