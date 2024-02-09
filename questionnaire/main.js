function changeTitleColor() {
    var titleElement = document.querySelector('.title');
    titleElement.style.color = 'red';
}
document.getElementById('changeColorBtn').addEventListener('click', changeTitleColor);