/* ++ = pro přidání nové měny napište x
XXX = měna
xxxyy = kód převodu (např.: eurkc)
-- = zde tyto úpravy končí (pokud není ohraničeno složenou závorkou, ve které je komentář umístěn)
if- = pokud je splněna věc v -//něco#
"}" = něco, co již bylo napsané
ZTML x= něco z html, x je číslo odkazu do souboru HTML
příklad: 
 // ++ xxxyy = new Prevod(request.response.rates.XXX);
 // kód
 // --
 ale:
  if (some) {
    // ++ xxxyy = new Prevod(request.response.rates.XXX);
    // kód
  }
 */

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
  let menu = document.getElementById("menu");
  let h1 = document.getElementById("h1");

  const requestURL =
    "https://api.exchangerate.host/latest?base=CZK&symbols=EUR,USD,GBP,UAH,CHF,SEK,JPY,CAD,AUD,MXN,BRL,HRK,PLN";
  let request = new XMLHttpRequest();
  request.responseType = "json";
  request.onload = () => {
    console.log(request.response);
    // ++ xxxyy = new Prevod(request.response.rates.XXX);
    eurkc = new Prevod(request.response.rates.EUR);
    usdkc = new Prevod(request.response.rates.USD);
    gbpkc = new Prevod(request.response.rates.GBP);
    uahkc = new Prevod(request.response.rates.UAH);
    chfkc = new Prevod(request.response.rates.CHF);
    sekkc = new Prevod(request.response.rates.SEK);
    jpykc = new Prevod(request.response.rates.JPY);
    cadkc = new Prevod(request.response.rates.CAD);
    audkc = new Prevod(request.response.rates.AUD);
    mxnkc = new Prevod(request.response.rates.MXN);
    brlkc = new Prevod(request.response.rates.BRL);
    hrkkc = new Prevod(request.response.rates.HRK);
    plnkc = new Prevod(request.response.rates.PLN);
  };
  request.open("GET", requestURL);
  request.send();

  slctEvropa.value = 0;
  slctZbytek.value = 0;

  vlevo.value = null;
  vpravo.value = null;

  vlevo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      vpravo.value = null;
      btnPrevod.click();
    }
  });

  vpravo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      vlevo.value = null;
      btnPrevod.click();
    }
  });

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

  if (window.innerWidth < 1060) {
    menu.className = "malemenu";
    h1.className = "malemenu";
  } else {
    menu.className = "menu";
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
    /* ++ if- že to je evropská měna# 
    "}" else if(slctEvropa.value == ZTML 1) {
      lvlevo.innerHTML = "ZTML 2"
      lvpravo.innerHTML = "ZTML 3"
    }
    */
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
    } else if (slctEvropa.value == 6) {
      lvlevo.innerHTML = "kn";
      lvpravo.innerHTML = "Kč";
    } else if (slctEvropa.value == 7) {
      lvlevo.innerHTML = "zł";
      lvpravo.innerHTML = "Kč";
    }
  };

  slctZbytek.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    /* ++ if- že to je neevropská měna# 
    "}" else if(slctEvropa.value == ZTML 1) {
      lvlevo.innerHTML = "ZTML 2"
      lvpravo.innerHTML = "ZTML 3"
    }
    */
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
    } else if (slctZbytek.value == 4) {
      lvlevo.innerHTML = "A$";
      lvpravo.innerHTML = "Kč";
    } else if (slctZbytek.value == 5) {
      lvlevo.innerHTML = "Mex$";
      lvpravo.innerHTML = "Kč";
    } else if (slctZbytek.value == 6) {
      lvlevo.innerHTML = "R$";
      lvpravo.innerHTML = "Kč";
    }
  };

  function vyberEvropa() {
    upozorneni.innerHTML = "";
    /* ++ if- v případě, že to je evropská měna#
    "}" else if (slctEvropa.value == ZTML 1) {
      xxxyy.meny();
    }  
    */
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
    } else if (slctEvropa.value == 6) {
      hrkkc.meny();
    } else if (slctEvropa.value == 7) {
      plnkc.meny();
    }
  }

  function vyberZbytek() {
    /* ++ if- v případě, že to je neevropská měna#
    "}" else if (slctEvropa.value == ZTML 1) {
      xxxyy.meny();
    }  
    */
    upozorneni.innerHTML = "";
    if (slctZbytek.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctZbytek.value == 1) {
      usdkc.meny();
    } else if (slctZbytek.value == 2) {
      jpykc.meny();
    } else if (slctZbytek.value == 3) {
      cadkc.meny();
    } else if (slctZbytek.value == 4) {
      audkc.meny();
    } else if (slctZbytek.value == 5) {
      mxnkc.meny();
    } else if (slctZbytek.value == 6) {
      brlkc.meny();
    }
  }
};
