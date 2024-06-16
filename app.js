let nav = document.querySelector('.secondNav');
nav.style.display = 'none';
let image = document.createElement('img')
image.src = 'images/sidebar.png';
image.style.width = '20px'
image.setAttribute('class','image')
document.body.appendChild(image);
image.addEventListener('click',()=>{
    nav.style.display = 'flex';
})

