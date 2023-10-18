let f1 = document.forms.f1;
function showFocus(){
    event.target.classList.add('focuss');
}
function offfocus(){
    event.target.classList.remove('focuss');
}
f1.butt.addEventListener('click',function(){
    if(f1.move1.value != ''){
        f1.move2.value = f1.move1.value;
        f1.move1.value = '';
    }
})

let f2 = document.forms.f2;
f2.place.addEventListener('blur',(event)=>{
   if(f2.place.value != ''){
    f2.place.placeholder = event.target.value;
    event.target.value = '';
   }

})