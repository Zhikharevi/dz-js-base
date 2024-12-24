const userLanguage = navigator.language.slice(0, 2).toLowerCase();
switch (userLanguage) {
    case 'en': console.log('Hello'); break; 
    case 'ru': console.log('Привет'); break; 
    case 'de': console.log('Hallo'); break; 
    default: 
    console.log("Ha'rith! Xo'val kreztum lorthin vak'tarith ul'marz.");
}