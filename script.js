document.querySelector('.features-ddl').style.display = 'none';
document.querySelector('.company-ddl').style.display = 'none';



function dropDownOne() {
    const ddl = document.querySelector('.features-ddl');
    const arrow = document.getElementById('arrow1');
    ddl.style.display  = ddl.style.display === 'none' ? 'flex' : 'none';
    if(ddl.style.display === 'flex'){
        arrow.src = './images/icon-arrow-up.svg'
    }
    if(ddl.style.display === 'none'){
        arrow.src = './images/icon-arrow-down.svg'
    }
    
}
function dropDownTwo() {
    const ddl = document.querySelector('.company-ddl');
    const arrow = document.getElementById('arrow2');
    ddl.style.display  = ddl.style.display === 'none' ? 'flex' : 'none';
    if(ddl.style.display === 'flex'){
        arrow.src = './images/icon-arrow-up.svg'
    }
    if(ddl.style.display === 'none'){
        arrow.src = './images/icon-arrow-down.svg'
    }
    
}


const menu = document.querySelector('.mob-menu');

function menuOpen() {
    menu.style.display = 'block'
}
function menuClose() {
    menu.style.display = 'none'
}

