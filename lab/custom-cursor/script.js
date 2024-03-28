const cursor = document.getElementById('cursor')

document.addEventListener('mousemove', event => {
    // console.log(event.clientX);
    // console.log(event.clientY);
    let totalMovement = Math.abs(event.movementX) + Math.abs(event.movementY);
    let finalMovement = Math.max(totalMovement / 10, 1);
    // console.log(movement);
    cursor.style.transform = 'scale(${finalMovement})';
    //cursor.style.transform = event.clientX + 'px'
    cursor.style.left = event.clientX+ 'px';
    cursor.style.top = event.clientY+ 'px' ;
    
})