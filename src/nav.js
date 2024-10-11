export function dropdown(closemenu, menubox, openmenu) {
    const mainmenu = document.getElementById(closemenu);  
    const maindiv = document.getElementById(menubox);  

    mainmenu.addEventListener('click', () => {
        maindiv.style.display = 'flex';  
        mainmenu.style.display='none'
    });

    const secmenu = document.getElementById(openmenu);  
    secmenu.addEventListener('click', () => {
        maindiv.style.display = 'none';  
        mainmenu.style.display='block'
    });
}
