
var form=document.querySelector('.form');
var btnDangKy=document.querySelector('.btn-dangky');
var closeForm=document.querySelector('.fa-circle-xmark');
var formControl=document.querySelector('.form-control');
var banner=document.querySelector('#banner');
var sideBar=document.querySelector('.side-bar');
var navtoggle=document.querySelector('.navbar-toggler');
var nav=document.querySelector('#navbarSupportedContent');

btnDangKy.addEventListener('click',function(){
    form.classList.add('hide-form');   
})

closeForm.addEventListener('click',function(){
    form.classList.remove('hide-form');   
    
})

window.addEventListener('scroll',function(e){
    
    if(this.window.pageYOffset>=300){
        sideBar.style.top='140px';
    }else
        sideBar.style.top='390px';
})

navtoggle.addEventListener('click',function(){
    nav.classList.toggle('show')
    sideBar.classList.toggle('side-ipad-toggle')
})
var fullname=document.getElementById('fullname');
var email=document.getElementById('email');
var password=document.getElementById('password');

var form=document.querySelector('.form')


var validateName=function(Ele){
    let EleParent=Ele.parentElement;
    let warn=EleParent.querySelector('.warning')
    Ele.onblur=function(){
        if(Ele.value===""||Ele.value===null){
            Ele.classList.add('validate')
        }else{
            Ele.classList.remove('validate');
        }
         if(Ele.value.length<6){           
           warn.innerHTML="Họ tên ít nhất phải có 6 chữ";
        }else{
            warn.innerHTML="";
        }
       
    }
}

var validateEmail=function(Ele){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let EleParent=Ele.parentElement;
    let warn=EleParent.querySelector('.warning')
    Ele.onblur=function(){
        if(Ele.value===""||Ele.value===null){
            Ele.classList.add('validate')
        }else{
            Ele.classList.remove('validate');
        }
         if(Ele.value.match(mailformat)){           
           warn.innerHTML="";
        }else{
            warn.innerHTML="Email không hợp lệ";
        }
       
    }
}

var validatePassword=function(Ele){
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let EleParent=Ele.parentElement;
    let warn=EleParent.querySelector('.warning')
    Ele.onblur=function(){
        if(Ele.value===""||Ele.value===null){
            Ele.classList.add('validate')
        }else{
            Ele.classList.remove('validate');
        }
         if(Ele.value.match(passw)){           
           warn.innerHTML=" ";
        }else{
            warn.innerHTML="Mật khẩu có 6 - 20 ký tự , có ít nhất một chữ hoa và một chữ thường";
        }
       
    }
}


form.addEventListener('submit',function(e){
    
    
    if(fullname.value==="" ||fullname===null){
        e.preventDefault();
        let EleParent=fullname.parentElement;
        let warn=EleParent.querySelector('.warning')
        warn.innerHTML="Họ tên ít nhất phải có 6 chữ";
        fullname.classList.add('validate')
        
    }
    if(email.value==="" ||email===null){
        e.preventDefault();
        let EleParent=email.parentElement;
        let warn=EleParent.querySelector('.warning')
        warn.innerHTML="Email không hợp lệ ";
        email.classList.add('validate')
        
    }
    if(password.value==="" ||password===null){
        e.preventDefault();
        let EleParent=password.parentElement;
        let warn=EleParent.querySelector('.warning')
        warn.innerHTML="password không hợp lệ ";
        password.classList.add('validate')
        
    }
  

})
validateName(fullname);
validateEmail(email);
validatePassword(password);



