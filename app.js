const inputCurrency1 = document.getElementById('inputCurrency1')
const inputCurrency2 = document.getElementById('inputCurrency2')
let options1 = document.getElementById('select-1')
let options2 = document.getElementById('select-2')
const swapBtn = document.getElementById('swap')
let currencyConverted = 0

inputCurrency1.addEventListener('input', () => {

  currencyConverted = inputCurrency1.value
  let err = document.getElementById('error')

  if (isNaN(currencyConverted)) {
    err.style.display = "inline-block";
    inputCurrency2.style.color = "red";
    inputCurrency2.value = "Formato Inválido!"
  } else if (!isNaN(currencyConverted)) {

    err.style.display = "none";
    inputCurrency1.style.color = "black";
    inputCurrency2.style.color = "green"
    inputCurrency2.value = currencyConverted
  }

  console.log(currencyConverted)

})


function mudarBandeira () {
  const flagObj = { 
      0: "Images/icons8-money-32.png",
      1: "Images/br.jpg",
      2: "Images/us.png",
      3: "Images/eu.png",
      4: "Images/uk.png",
      5: "Images/in.png"
  
      }
  const flagImg = document.getElementById('img1').src = flagObj[options1.selectedIndex];
  const flagImg2 = document.getElementById('img2').src = flagObj[options2.selectedIndex];

}

options1.addEventListener ("change", mudarBandeira);
options2.addEventListener("change", mudarBandeira);


swapBtn.addEventListener('click', () => {
  const brlInverted = {
    usdEEbrl: currencyConverted * 5.731,
    eurEEbrl: currencyConverted * 5.995,
    gbpEEbrl: currencyConverted * 7.241,
    inrEEbrl: currencyConverted * 0.0661,
  }

  const usdInverted = {
    brlEEusd: currencyConverted * 0.1745,
    eurEEusd: currencyConverted * 1.046,
    gbpEEusd: currencyConverted * 1.26,
    inrEEusd: currencyConverted * 0.0115,

  }

  const eurInverted = {
    brlEEeur: currencyConverted * 0.166,
    usdEEeur: currencyConverted * 0.9560,
    gbpEEeur: currencyConverted * 1.21,
    inrEEeur: currencyConverted * 0.0110,
  }

  const gbpInverted = {
    brlEEgbp: currencyConverted * 0.138,
    usdEEgbp: currencyConverted * 0.791,
    eurEEgbp: currencyConverted * 0.828,
    inrEEgbp: currencyConverted * 0.00913,

  }

  const inrInverted = {
    brlEEinr: currencyConverted * 15.12,
    usdEEinr: currencyConverted * 86.75,
    eurEEinr: currencyConverted * 90.64,
    gbpEEinr: currencyConverted * 109.48
  }

  let swap = null
  let res = null

  //----------------------BRL------------------------------------------

  if (options1[1].selected && options2[2].selected) {
    swap = options1[2].selected && options2[1].selected
    res = brlInverted.usdEEbrl
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted
  }

  if (options1[1].selected && options2[3].selected) {
    swap = options1[3].selected && options2[1].selected
    res = brlInverted.eurEEbrl
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted
   
  }

  if (options1[1].selected && options2[4].selected) {
    swap = options1[4].selected && options2[1].selected
    res = brlInverted.gbpEEbrl
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted
  }

  if (options1[1].selected && options2[5].selected) {
    swap = options1[5].selected && options2[1].selected
    res = brlInverted.inrEEbrl
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted
  }

  //------------------------------------USD---------------------------

  if (options1[2].selected && options2[1].selected) {
    swap = options1[1].selected && options2[2].selected
    res = usdInverted.brlEEusd
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[2].selected && options2[3].selected) {
    swap = options1[3].selected && options2[2].selected
    res = usdInverted.eurEEusd
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[2].selected && options2[4].selected) {
    swap = options1[4].selected && options2[2].selected
    res = usdInverted.gbpEEusd
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[2].selected && options2[5].selected) {
    swap = options1[5].selected && options2[2].selected
    res = usdInverted.inrEEusd
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  //------------------EUR-----------------------------------------------


  if (options1[3].selected && options2[1].selected) {
    swap = options1[1].selected && options2[3].selected
    res = eurInverted.brlEEeur
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[3].selected && options2[2].selected) {
    swap = options1[2].selected && options2[3].selected
    res = eurInverted.usdEEeur
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[3].selected && options2[4].selected) {
    swap = options1[4].selected && options2[3].selected
    res = eurInverted.gbpEEeur
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[3].selected && options2[5].selected) {
    swap = options1[5].selected && options2[3].selected
    res = eurInverted.inrEEeur
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  //-----------------------GBP-----------------------------------

  if (options1[4].selected && options2[1].selected) {
    swap = options1[1].selected && options2[4].selected
    res = gbpInverted.brlEEgbp
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[4].selected && options2[2].selected) {
    swap = options1[2].selected && options2[4].selected
    res = gbpInverted.usdEEgbp
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[4].selected && options2[3].selected) {
    swap = options1[3].selected && options2[4].selected
    res = gbpInverted.eurEEgbp
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[4].selected && options2[5].selected) {
    swap = options1[5].selected && options2[4].selected
    res = gbpInverted.inrEEgbp
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  //----------------------INR----------------------------------------------

  if (options1[5].selected && options2[1].selected) {
    swap = options1[1].selected && options2[5].selected
    res = inrInverted.brlEEinr
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

  if (options1[5].selected && options2[2].selected) {
    swap = options1[2].selected && options2[5].selected
    res = inrInverted.usdEEinr
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted

  }

  if (options1[5].selected && options2[3].selected) {
    swap = options1[3].selected && options2[5].selected
    res = inrInverted.eurEEinr
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted

  }

  if (options1[5].selected && options2[4].selected) {
    swap = options1[4].selected && options2[5].selected
    res = inrInverted.gbpEEinr
    inputCurrency1.value = res
    inputCurrency2.value = currencyConverted


  }

})



options2.addEventListener('change', () => {
  const brl = {
    brlEEbrl: currencyConverted * 1,
    brlEEusd: currencyConverted * 0.1745,
    brlEEeur: currencyConverted * 0.166,
    brlEEgbp: currencyConverted * 0.138,
    brlEEinr: currencyConverted * 15.12

  }

  const usd = {
    usdEEbrl: currencyConverted * 5.731,
    usdEEusd: currencyConverted * 1,
    usdEEeur: currencyConverted * 0.9560,
    usdEEgbp: currencyConverted * 0.791,
    usdEEinr: currencyConverted * 86.75
  }

  const eur = {
    eurEEbrl: currencyConverted * 5.995,
    eurEEusd: currencyConverted * 1.046,
    eurEEeur: currencyConverted * 1,
    eurEEgbp: currencyConverted * 0.828,
    eurEEinr: currencyConverted * 90.64
  }

  const gbp = {
    gbpEEbrl: currencyConverted * 7.241,
    gbpEEusd: currencyConverted * 1.26,
    gbpEEeur: currencyConverted * 1.21,
    gbpEEgbp: currencyConverted * 1,
    gbpEEinr: currencyConverted * 109.48

  }

  const inr = {
    inrEEbrl: currencyConverted * 0.0661,
    inrEEusd: currencyConverted * 0.0115,
    inrEEeur: currencyConverted * 0.0110,
    inrEEgbp: currencyConverted * 0.00913,
    inrEEinr: currencyConverted * 1
  }

  let result = null

  //------------BRL---------------------------------------

  if (options1[1].selected && options2[1].selected) {
    result = brl.brlEEbrl
    inputCurrency2.value = result



  }

  if (options1[1].selected && options2[2].selected) {
    result = brl.brlEEusd
    inputCurrency2.value = result
    




  }

  if (options1[1].selected && options2[3].selected) {
    result = brl.brlEEeur
    inputCurrency2.value = result

  }

  if (options1[1].selected && options2[4].selected) {
    result = brl.brlEEgbp
    inputCurrency2.value = result

  }

  if (options1[1].selected && options2[5].selected) {
    result = brl.brlEEinr
    inputCurrency2.value = result

  }

  //---------------USD-----------------------------------------

  if (options1[2].selected && options2[1].selected) {
    result = usd.usdEEbrl
    inputCurrency2.value = result

  }

  if (options1[2].selected && options2[2].selected) {
    result = usd.usdEEusd
    inputCurrency2.value = result

  }

  if (options1[2].selected && options2[3].selected) {
    result = usd.usdEEeur
    inputCurrency2.value = result

  }

  if (options1[2].selected && options2[4].selected) {
    result = usd.usdEEgbp
    inputCurrency2.value = result

  }

  if (options1[2].selected && options2[5].selected) {
    result = usd.usdEEinr
    inputCurrency2.value = result

  }

  //--------------EUR-------------------------------------------------

  if (options1[3].selected && options2[1].selected) {
    result = eur.eurEEbrl
    inputCurrency2.value = result

  }

  if (options1[3].selected && options2[2].selected) {
    result = eur.eurEEusd
    inputCurrency2.value = result

  }

  if (options1[3].selected && options2[3].selected) {
    result = eur.eurEEeur
    inputCurrency2.value = result

  }

  if (options1[3].selected && options2[4].selected) {
    result = eur.eurEEgbp
    inputCurrency2.value = result

  }

  if (options1[3].selected && options2[5].selected) {
    result = eur.eurEEinr
    inputCurrency2.value = result

  }

  //--------------------GBP-------------------------------------------------

  if (options1[4].selected && options2[1].selected) {
    result = gbp.gbpEEbrl
    inputCurrency2.value = result

  }

  if (options1[4].selected && options2[2].selected) {
    result = gbp.gbpEEusd
    inputCurrency2.value = result

  }

  if (options1[4].selected && options2[3].selected) {
    result = gbp.gbpEEeur
    inputCurrency2.value = result

  }

  if (options1[4].selected && options2[4].selected) {
    result = gbp.gbpEEgbp
    inputCurrency2.value = result

  }

  if (options1[4].selected && options2[5].selected) {
    result = gbp.gbpEEinr
    inputCurrency2.value = result

  }

  //---------------------INR---------------------------------------------

  if (options1[5].selected && options2[1].selected) {
    result = inr.inrEEbrl
    inputCurrency2.value = result

  }

  if (options1[5].selected && options2[2].selected) {
    result = inr.inrEEusd
    inputCurrency2.value = result

  }

  if (options1[5].selected && options2[3].selected) {
    result = inr.inrEEeur
    inputCurrency2.value = result

  }

  if (options1[5].selected && options2[4].selected) {
    result = inr.inrEEgbp
    inputCurrency2.value = result

  }

  if (options1[5].selected && options2[5].selected) {
    result = inr.inrEEinr
    inputCurrency2.value = result

  }


})






