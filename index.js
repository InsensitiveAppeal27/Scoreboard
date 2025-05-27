let homeBtn = document.querySelectorAll('.home-btn')
let guestBtn = document.querySelectorAll('.guest-btn')
let homeScore = document.querySelector('.home')
let guestScore = document.querySelector('.guest')

let score = 0;
homeBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    let btnNum = parseInt(btn.dataset.value)
      score += btnNum   
      homeScore.textContent = score 
    })
})
    let gscore = 0;
guestBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let btnData = parseInt(btn.dataset.value);
        gscore += btnData
        guestScore.textContent = gscore
    })
})