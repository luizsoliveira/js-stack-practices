const buttonHello = document.getElementById("hello")

buttonHello.addEventListener('click', event => {
    const h1 = document.querySelector("body h1")
    console.log(h1)
    h1.classList.toggle("invisible")
})
