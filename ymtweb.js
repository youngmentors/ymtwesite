function changes(){
    changebgColor();
    changeheadcolor();
    changesizeheader();
    changesizefont();
    changefontcolor();
}

function changebgColor() {
    let color = document.getElementById('backgroundColor').value;
    document.body.style.backgroundColor = color;
}
function changeheadcolor() {
    let color = document.getElementById('headercolor').value;
    let header = document.querySelector('.header'); 
    header.style.color = color;
}
function changesizeheader() {
    let size = document.getElementById('headersize').value;
    let header = document.querySelector('.header'); 
    header.style.fontSize = size;
}
function changesizefont() {
    let size = document.getElementById('fontsize').value;
    let detail = document.querySelector('.detail');
    detail.style.fontSize = size;
}
function changefontcolor() {
    let color = document.getElementById('fontcolor').value;
    let detail= document.querySelector('.detail');
    detail.style.color = color;
}

document.getElementById('togglebutton').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
// let themeToggler = document.querySelector('.theme-toggler');

// themeToggler.onclick = () => {
//     themeToggler.classList.toggle('active');

//     if(themeToggler.classList.contains('active')) { 
//         document.body.classList.add('active'); 
//     } else {
//         document.body.classList.remove('active');
//     }
// }
// function goBack() {
//     window.history.back();
// }

// // Add event listener to "Go Back" button
// document.getElementById('goBackButton').addEventListener('click', goBack);


// let themeToggler = document.querySelector('.theme-toggler');
// themeToggler.onclick = () =>{

//    themeToggler.classList.toggle('active');

//    if(themeToggler.classList.contains('active')){ document.body.classList.add('active'); }
//     else{
//        document.body.classList.remove('active');
//     }

// }

//  let theme = document.querySelector('.themes-container');

//  document.querySelector('#theme-open').onclick = () =>{
//       theme.classList.add('active');
//       document.body.style.paddingRight = '350px';
//   }

// document.querySelector('#theme-close').onclick = () =>{
//     theme.classList.remove('active');
//     document.body.style.paddingRight = '0px';
// }
function resetChanges() {
    let header = document.querySelector('.header'); 
    let detail = document.querySelector('.detail');

    // Reset color
    header.style.color = '';
    detail.style.color = '';
    document.body.style.backgroundColor = '';

    // Reset font size
    header.style.fontSize = '';
    detail.style.fontSize = '';
}

// Add event listener to "Reset" button
document.getElementById('resetButton').addEventListener('click', resetChanges);
function revealMenu() {
    let menu = document.getElementById('menu');
    menu.style.maxHeight = menu.scrollHeight + "px";
}

// Add event listener to "Changes" button
document.getElementById('togglebutton').addEventListener('click', revealMenu);