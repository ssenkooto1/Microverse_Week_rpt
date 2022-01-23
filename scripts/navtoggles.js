function myFunction() {
  let x = document.getElementById('menu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function myclosingFunction() {
  let xy = document.getElementById('menu');
  if (xy.style.display === 'block') {
    xy.style.display = 'none';
  } else {
    xy.style.display = 'block';
  }
}
function closenav() {
  let xz = document.getElementById('menu');
  xz.style.display = 'none';
}
myFunction();
myclosingFunction();
closenav();