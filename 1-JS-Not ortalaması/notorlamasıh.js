/* 1- prompt ile aldığımız bilgiye göre aşağıdaki not çizelgesini kullanarak #infoya yazdır.
AA  99-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2 - kulanicinin girdigi verinin istedigimiz aralıkta olup olmadigini kontrol et
3 - ff bilgisinide uzgun surat ikonu kullan, digerinde ise gulucuk ikonu kullan
4- ff class bilgisi tect-danger, digeri ise text-primary olsun
*/
const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0"/>
  <path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5"/>
</svg>`

const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`



let examGrade = prompt("Puani girin:")
let textInfo;
let info = document.querySelector("#info")
// kapsayıcı bllok acildi: istenilmeyen eksi(- )
// veya 100 üzeri değer girilmemesi için
if (examGrade >=0 && examGrade <= 100) {
    textInfo = SMILE // her sonuç için smile verecek fakat en altta FF
// için Sad eklenecek
    info.classList.add('text-primary')
    if (examGrade >= 90) {
        textInfo += " AA"   
    } else if (examGrade >= 85) {
        textInfo += " BA"
    } else if (examGrade >= 80) {
        textInfo += " BB"
    } else if (examGrade >= 75) {
        textInfo += " CB"
    } else if (examGrade >= 70) {
        textInfo += " CC"
    } else if (examGrade >= 65) {
        textInfo += " DC"
    } else if (examGrade >= 60) {
        textInfo += " DD"
    } else if (examGrade >= 55) {
        textInfo += " FD"
    } else if (examGrade < 50) {
        textInfo = `${FROWN} FF`
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    } 
} else {
    textInfo = "Bilgiler dogru degildir."
}
// console.log(textInfo) bilgileri anaekrana yazdıracaz.


info.innerHTML = `${textInfo} -> ${examGrade}`