const light=document.getElementById('light');
const dark=document.getElementById('dark');

const body=document.body

if(localStorage.getItem('theme')){
    body.classList.add(localStorage.getItem('theme'))
}
light.onclick=()=>{
    body.classList.replace('dark','default-light')
    localStorage.setItem('theme','light') //storing the theme in local storage
}

dark.onclick=()=>{
    body.classList.replace('default-light','dark')
    localStorage.setItem('theme','dark')
}
