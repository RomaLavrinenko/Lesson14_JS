let ff = document.forms.f1;;
ff.butt.addEventListener('click',()=>{
    if(ff.firname.value != '' && ff.secname.value != '' && ff.emaadr.value != '' && ff.position.value != 'choose'){
            if(ff.agree.checked){
                document.querySelector('.box').style.display = 'none';
                document.querySelector('.block').style.display = 'block';
                document.querySelector('.name1').textContent = ff.firname.value + ' ' + ff.secname.value;
                document.querySelector('.gmail1').textContent = ff.emaadr.value;
                document.querySelector('.prof').textContent = ff.position.value;
                if(ff.rad.value == 'man'){
                document.querySelector('.imgage').style.backgroundImage  = 'url(https://as1.ftcdn.net/v2/jpg/04/53/08/58/1000_F_453085847_F79K4TPRlcDp9XGLPpAbjuKG2WPG3GAe.jpg)';
                }
                 else if(ff.rad.value == 'woman'){
                document.querySelector('.imgage').style.backgroundImage  = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BbsAWKX2VvKuN2QEaMChKuKsr6bKLjwlsfboCnu9CQ0AdQI7ltq4-t7g9rnaDm8IgaE&usqp=CAU)';
                }
                ff.reset();
            }
            else{
                alert('Agree?');
            }

    }
    else{
        alert('Заповніть всі поля');
    }
})

document.querySelector('.butt2').addEventListener('click',()=>{
    document.querySelector('.box').style.display = 'block';
    document.querySelector('.block').style.display = 'none';
})

function showFocus(){
    event.target.classList.add('focuss');
}
function offfocus(){
    event.target.classList.remove('focuss');
}
