const hasLicence = confirm('Имеете права?');
const age = prompt('Ваш возраст');
const isDrunk = confirm('Пьян');
alert(hasLicence && Number(age) > 18 && !isDrunk ? "Может" : "Не может");