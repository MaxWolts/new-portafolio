const $sections = []
$sections.push( document.querySelector(".hero"))
$sections.push(document.querySelector(".about"))

const $project = document.querySelector('.projects')

$sections.forEach(element => {
    if(window.innerHeight> 630) {
        element.style.height = window.innerHeight + 'px'
       

    }else {
        element.style.height = window.innerWidth + 'px'

    }
})



//busca una manera de optimizar
window.addEventListener('resize', ()=> {
    if(window.innerHeight> 630) {
        $sections.forEach(element => {
            element.style.height = window.innerHeight + 'px'
        });

    }else {
        $sections.forEach(element => {
            element.style.height = window.innerWidth + 'px'
        });
    }
});

const buttons = document.querySelectorAll(".link")

buttons.forEach(element => {
    element.addEventListener('click', scrollSlow)
});
function scrollSlow(event) {
    event.preventDefault()
    const href = this.getAttribute('href')

    document.querySelector(href).scrollIntoView({
        behavior:"smooth"
    })
}

/* take this */
const friend = document.querySelector('.friend-img')
function cosita() {
    friend.style.display = 'block'
}