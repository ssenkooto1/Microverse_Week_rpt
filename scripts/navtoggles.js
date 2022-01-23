function myFunction() {
  let x = document.getElementById('menu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function myclosingFunction() {
  let x = document.getElementById('menu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function closenav() {
  let x = document.getElementById('menu');
  x.style.display = 'none';
}
myFunction();
myclosingFunction();
closenav();