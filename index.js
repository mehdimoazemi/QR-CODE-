const btn = document.querySelector('form button');
const boximg = document.querySelector('.qr-code');
const inputtt = document.querySelector('form input');
const qrimage = document.querySelector('.qr-code img')



btn.addEventListener('click', (event) => {
  event.preventDefault();

  const textinput = inputtt.value;
  console.log(textinput);
  if (!textinput) {
  
    return alert("لطفا متن یا ادرسی وارد کنید !")
  }
  
  btn.innerText = "در حال ساخت QR CODE"

  qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textinput}`
  qrimage.addEventListener('load' , () => {
    btn.innerText = "ساخت QR CODE"

    boximg.style.display = "block"
  })

});


inputtt.addEventListener('keyup' , () => {
if(!inputtt.value){
  boximg.style.display="none"

}
})