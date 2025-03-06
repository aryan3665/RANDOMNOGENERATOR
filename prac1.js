document.getElementById("changetext").addEventListener('click',function(){
    let p=document.getElementById("para");
    p.textContent=` ${Math.floor(Math.random() * 6) + 1} `;
})