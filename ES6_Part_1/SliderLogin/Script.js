const signUpButton=document.getElementById('sign-up');
const signInButton=document.getElementById('sign-in');
const container=document.getElementById('container');

signUpButton.addEventListener('click',function(e){
    // e.preventDefault();
    container.classList.add("right-panel-active");
},false);

signInButton.addEveneListener('click',function(){
    // e.preventDefault();
    container.classList.remove("right-panel-active");
},false);