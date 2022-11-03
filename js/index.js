const btnNext = document.querySelector('#areaForm form .next')
const indicator = document.querySelector('main .indicator .line span');
const indicatorItems = document.querySelectorAll('main .indicator p');
const form = document.querySelector('#areaForm form');
const allTab = document.querySelectorAll('#areaForm form .tab');
const btn_payment = document.querySelector('.tab .form .btnPayment')
let i = 0;


console.log(btnNext)

allTab[i].classList.add('show');
indicator.style.width = i;
indicatorItems[i].classList.add('active');

btnNext.addEventListener('click', function (e) {
    e.preventDefault()

   i += 1;

   if (i >= allTab.length) {

   } else {
    for(let j = 0; j < allTab.length; j++) {
        allTab[j].classList.remove('show');
        indicatorItems[j].classList.remove('active');
    }

    allTab[i].classList.add('show');
    indicator.style.width = `${i * 50}%`;
    indicatorItems[i].classList.add('active');
   }
})

btn_payment.onclick = function() {
    this.innerHTML = "<div class='loader'></div>"
    console.log('Tá passando')
    console.log(btn_payment)
    setTimeout(() => {
        this.innerHTML = 'Pagamento Confirmado <i class="fa-solid fa-circle-check" style="padding-left: 10px"></i>'
        this.style = "background: #4CBD49"
    }, 2000)
}