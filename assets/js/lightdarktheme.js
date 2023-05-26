// const body = document.getElementById('body');
// const body = document.getElementsByTagName('body')[0];
// const body = document.querySelector('#body');
const body = document.body;

let themeColor = window.localStorage.getItem('tema');
if (themeColor) {
    selecTheme(themeColor);
    updateRadio(themeColor);
}

function selecTheme(theme) {
    console.log('funcio');
    switch (theme) {
        case 'light':
            //console.log('aplicar light');
            body.classList.remove('dark');
            body.classList.add('light');
            window.localStorage.setItem('tema','light')
            break;
            
        case 'dark':
            //console.log('aplicar dark');
            body.classList.remove('light');
            body.classList.add('dark');
            window.localStorage.setItem('tema','dark')
            break;            
    
        default:
            break;
    }
}

function updateRadio(value) {
    switch (value) {
        case 'light':
            document.getElementById('radioLight').checked = true;
            document.getElementById('radioDark').checked = false;
            break;
        
        case 'dark':
            document.getElementById('radioDark').checked = true;
            document.getElementById('radioLight').checked = false;
            break;
    
        default:
            document.getElementById('radioLight').checked = true;
            break;
    }
}

const radios = document.querySelectorAll('input[name="theme"]');
radios.forEach( x=> {
    x.addEventListener('change', function(){
        console.log(this.value);
        selecTheme(this.value);       
    })   
});

// window.addEventListener('DOMContentLoaded', function(){

// }) 