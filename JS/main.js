
console.log('Hello, World!');

// Old News redirect, by Xammand

if (document.URL.indexOf('/news') >= 0){

const newPath = window.location.href.replace('https://store.steampowered.com/news/', 'https://store.steampowered.com/oldnews/');

window.location.href = newPath;

};


// Disable widestore class from fucking up the theme, by ItsJustAPlayer

//const targetClass = 'widestore';
//const replacementClass = 'widestoredisabled'; // leave empty to remove completely, or set a custom name if you want
//const body = document.body;
//if (body.classList.contains(targetClass)) {
   // if (replacementClass) {
     //   body.classList.replace(targetClass, replacementClass);
    //} 
    //else {
   //     body.classList.remove(targetClass);
   // }
//};
   
