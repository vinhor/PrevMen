window.onload = function () {
  let slctEvropa = document.getElementById("slctEvropa");
  let slctZbytek = document.getElementById("slctZbytek");
  let btnEvropa = document.getElementById("btnEvropa");
  let btnZbytek = document.getElementById("btnZbytek");
  upozorneni = document.getElementById("upozorneni");
  let btnPrevod = document.getElementById("btnPrevod");
  let divt = document.getElementById("divt");
  let br = document.createElement("br");

  const requestURL =
    "https://api.exchangerate.host/latest?base=CZK&symbols=EUR,USD,GBP,UAH,CHF,SEK";
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
  };
};
