let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let options1 = document.getElementById('select-1')
let options2 = document.getElementById('select-2')
let swapBtn = document.getElementById('swap')
let a = ""

input1.addEventListener('input', () => {

  a = Number(input1.value)
  let err = document.getElementById('error')

  if (Number.isNaN(a)) {
    err.style.display = "inline-block";
    input2.style.color = "red";
    input2.value = "Formato Inválido!"
  } else if (!isNaN(a)) {

    err.style.display = "none";
    input1.style.color = "black";
    input2.style.color = "green"
    input2.value = a
  }

})

options1.addEventListener('change', () => {
  let flagImg = document.getElementById('img1')
  if (options1[0].selected) {
    flagImg.src = "Images/icons8-money-32.png"
  }

  if (options1[1].selected) {
    flagImg.src = "Images/br.jpg"
  }

  if (options1[2].selected) {
    flagImg.src = "Images/us.png"
  }

  if (options1[3].selected) {
    flagImg.src = "Images/eu.png"
  }

  if (options1[4].selected) {
    flagImg.src = "Images/uk.png"
  }

  if (options1[5].selected) {
    flagImg.src = "Images/in.png"
  }

})

swapBtn.addEventListener('click', () => {
  const brlInverted = {
    usdEEbrl: a * 5.731,
    eurEEbrl: a * 5.995,
    gbpEEbrl: a * 7.241,
    inrEEbrl: a * 0.0661,
  }

  const usdInverted = {
    brlEEusd: a * 0.1745,
    eurEEusd: a * 1.046,
    gbpEEusd: a * 1.26,
    inrEEusd: a * 0.0115,

  }

  const eurInverted = {
    brlEEeur: a * 0.166,
    usdEEeur: a * 0.9560,
    gbpEEeur: a * 1.21,
    inrEEeur: a * 0.0110,
  }

  const gbpInverted = {
    brlEEgbp: a * 0.138,
    usdEEgbp: a * 0.791,
    eurEEgbp: a * 0.828,
    inrEEgbp: a * 0.00913,

  }

  const inrInverted = {
    brlEEinr: a * 15.12,
    usdEEinr: a * 86.75,
    eurEEinr: a * 90.64,
    gbpEEinr: a * 109.48
  }

  let swap = null
  let res = null

  //----------------------BRL------------------------------------------

  if (options1[1].selected && options2[2].selected) {
    swap = options1[2].selected && options2[1].selected
    res = brlInverted.usdEEbrl
    input1.value = res
    input2.value = a
  }

  if (options1[1].selected && options2[3].selected) {
    swap = options1[3].selected && options2[1].selected
    res = brlInverted.eurEEbrl
    input1.value = res
    input2.value = a
  }

  if (options1[1].selected && options2[4].selected) {
    swap = options1[4].selected && options2[1].selected
    res = brlInverted.gbpEEbrl
    input1.value = res
    input2.value = a
  }

  if (options1[1].selected && options2[5].selected) {
    swap = options1[5].selected && options2[1].selected
    res = brlInverted.inrEEbrl
    input1.value = res
    input2.value = a
  }

  //------------------------------------USD---------------------------

  if (options1[2].selected && options2[1].selected) {
    swap = options1[1].selected && options2[2].selected
    res = usdInverted.brlEEusd
    input1.value = res
    input2.value = a


  }

  if (options1[2].selected && options2[3].selected) {
    swap = options1[3].selected && options2[2].selected
    res = usdInverted.eurEEusd
    input1.value = res
    input2.value = a


  }

  if (options1[2].selected && options2[4].selected) {
    swap = options1[4].selected && options2[2].selected
    res = usdInverted.gbpEEusd
    input1.value = res
    input2.value = a


  }

  if (options1[2].selected && options2[5].selected) {
    swap = options1[5].selected && options2[2].selected
    res = usdInverted.inrEEusd
    input1.value = res
    input2.value = a


  }

  //------------------EUR-----------------------------------------------


  if (options1[3].selected && options2[1].selected) {
    swap = options1[1].selected && options2[3].selected
    res = eurInverted.brlEEeur
    input1.value = res
    input2.value = a


  }

  if (options1[3].selected && options2[2].selected) {
    swap = options1[2].selected && options2[3].selected
    res = eurInverted.usdEEeur
    input1.value = res
    input2.value = a


  }

  if (options1[3].selected && options2[4].selected) {
    swap = options1[4].selected && options2[3].selected
    res = eurInverted.gbpEEeur
    input1.value = res
    input2.value = a


  }

  if (options1[3].selected && options2[5].selected) {
    swap = options1[5].selected && options2[3].selected
    res = eurInverted.inrEEeur
    input1.value = res
    input2.value = a


  }

  //-----------------------GBP-----------------------------------

  if (options1[4].selected && options2[1].selected) {
    swap = options1[1].selected && options2[4].selected
    res = gbpInverted.brlEEgbp
    input1.value = res
    input2.value = a


  }

  if (options1[4].selected && options2[2].selected) {
    swap = options1[2].selected && options2[4].selected
    res = gbpInverted.usdEEgbp
    input1.value = res
    input2.value = a


  }

  if (options1[4].selected && options2[3].selected) {
    swap = options1[3].selected && options2[4].selected
    res = gbpInverted.eurEEgbp
    input1.value = res
    input2.value = a


  }

  if (options1[4].selected && options2[5].selected) {
    swap = options1[5].selected && options2[4].selected
    res = gbpInverted.inrEEgbp
    input1.value = res
    input2.value = a


  }

  //----------------------INR----------------------------------------------

  if (options1[5].selected && options2[1].selected) {
    swap = options1[1].selected && options2[5].selected
    res = inrInverted.brlEEinr
    input1.value = res
    input2.value = a


  }

  if (options1[5].selected && options2[2].selected) {
    swap = options1[2].selected && options2[5].selected
    res = inrInverted.usdEEinr
    input1.value = res
    input2.value = a


  }

  if (options1[5].selected && options2[3].selected) {
    swap = options1[3].selected && options2[5].selected
    res = inrInverted.eurEEinr
    input1.value = res
    input2.value = a


  }

  if (options1[5].selected && options2[4].selected) {
    swap = options1[4].selected && options2[5].selected
    res = inrInverted.gbpEEinr
    input1.value = res
    input2.value = a


  }

})

options2.addEventListener('change', () => {
  let flagImg = document.getElementById('img2')
  if (options2[0].selected) {
    flagImg.src = "Images/icons8-money-32.png"
  }

  if (options2[1].selected) {
    flagImg.src = "Images/br.jpg"
  }

  if (options2[2].selected) {
    flagImg.src = "Images/us.png"
  }

  if (options2[3].selected) {
    flagImg.src = "Images/eu.png"
  }

  if (options2[4].selected) {
    flagImg.src = "Images/uk.png"
  }

  if (options2[5].selected) {
    flagImg.src = "Images/in.png"
  }

})

options2.addEventListener('change', () => {
  const brl = {
    brlEEbrl: a * 1,
    brlEEusd: a * 0.1745,
    brlEEeur: a * 0.166,
    brlEEgbp: a * 0.138,
    brlEEinr: a * 15.12

  }

  const usd = {
    usdEEbrl: a * 5.731,
    usdEEusd: a * 1,
    usdEEeur: a * 0.9560,
    usdEEgbp: a * 0.791,
    usdEEinr: a * 86.75
  }

  const eur = {
    eurEEbrl: a * 5.995,
    eurEEusd: a * 1.046,
    eurEEeur: a * 1,
    eurEEgbp: a * 0.828,
    eurEEinr: a * 90.64
  }

  const gbp = {
    gbpEEbrl: a * 7.241,
    gbpEEusd: a * 1.26,
    gbpEEeur: a * 1.21,
    gbpEEgbp: a * 1,
    gbpEEinr: a * 109.48

  }

  const inr = {
    inrEEbrl: a * 0.0661,
    inrEEusd: a * 0.0115,
    inrEEeur: a * 0.0110,
    inrEEgbp: a * 0.00913,
    inrEEinr: a * 1
  }

  let result = null

  //------------BRL---------------------------------------

  if (options1[1].selected && options2[1].selected) {
    result = brl.brlEEbrl
    input2.value = result



  }

  if (options1[1].selected && options2[2].selected) {
    result = brl.brlEEusd
    input2.value = result
    taxText.innerHTML = "1000 BRL =  $0,1745 USD"




  }

  if (options1[1].selected && options2[3].selected) {
    result = brl.brlEEeur
    input2.value = result

  }

  if (options1[1].selected && options2[4].selected) {
    result = brl.brlEEgbp
    input2.value = result

  }

  if (options1[1].selected && options2[5].selected) {
    result = brl.brlEEinr
    input2.value = result

  }

  //---------------USD-----------------------------------------

  if (options1[2].selected && options2[1].selected) {
    result = usd.usdEEbrl
    input2.value = result

  }

  if (options1[2].selected && options2[2].selected) {
    result = usd.usdEEusd
    input2.value = result

  }

  if (options1[2].selected && options2[3].selected) {
    result = usd.usdEEeur
    input2.value = result

  }

  if (options1[2].selected && options2[4].selected) {
    result = usd.usdEEgbp
    input2.value = result

  }

  if (options1[2].selected && options2[5].selected) {
    result = usd.usdEEinr
    input2.value = result

  }

  //--------------EUR-------------------------------------------------

  if (options1[3].selected && options2[1].selected) {
    result = eur.eurEEbrl
    input2.value = result

  }

  if (options1[3].selected && options2[2].selected) {
    result = eur.eurEEusd
    input2.value = result

  }

  if (options1[3].selected && options2[3].selected) {
    result = eur.eurEEeur
    input2.value = result

  }

  if (options1[3].selected && options2[4].selected) {
    result = eur.eurEEgbp
    input2.value = result

  }

  if (options1[3].selected && options2[5].selected) {
    result = eur.eurEEinr
    input2.value = result

  }

  //--------------------GBP-------------------------------------------------

  if (options1[4].selected && options2[1].selected) {
    result = gbp.gbpEEbrl
    input2.value = result

  }

  if (options1[4].selected && options2[2].selected) {
    result = gbp.gbpEEusd
    input2.value = result

  }

  if (options1[4].selected && options2[3].selected) {
    result = gbp.gbpEEeur
    input2.value = result

  }

  if (options1[4].selected && options2[4].selected) {
    result = gbp.gbpEEgbp
    input2.value = result

  }

  if (options1[4].selected && options2[5].selected) {
    result = gbp.gbpEEinr
    input2.value = result

  }

  //---------------------INR---------------------------------------------

  if (options1[5].selected && options2[1].selected) {
    result = inr.inrEEbrl
    input2.value = result

  }

  if (options1[5].selected && options2[2].selected) {
    result = inr.inrEEusd
    input2.value = result

  }

  if (options1[5].selected && options2[3].selected) {
    result = inr.inrEEeur
    input2.value = result

  }

  if (options1[5].selected && options2[4].selected) {
    result = inr.inrEEgbp
    input2.value = result

  }

  if (options1[5].selected && options2[5].selected) {
    result = inr.inrEEinr
    input2.value = result

  }


})






