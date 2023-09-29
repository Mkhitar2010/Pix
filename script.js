let myDiv = document.getElementById('myDiv');
let i = 0;

myDiv.onclick = function() {
    i++
    if (i % 2 == 1) {
        myDiv.style.backgroundColor = 'yellow'
    }else if(i==2){
      myDiv.style.backgroundColor = 'green'
    }else{
      myDiv.style.opacity = '0'
    }
}
