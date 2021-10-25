const $sections = []
$sections.push( document.querySelector(".hero"))
$sections.push(document.querySelector(".about"))

const $project = document.querySelector('.projects')

$sections.forEach(element => {
        element.style.height = window.innerHeight + 'px'
        if(window.innerWidth >= 720){
            $project.style.height = window.innerHeight + 'px'
        }
})

//busca una manera de optimizar
window.addEventListener('resize', ()=> {
    if(window.innerWidth >= 720) {
        $project.style.height = window.innerHeight + 'px'
    }else {
        $project.style.height = 'auto'
    }
    $sections.forEach(element => {
        element.style.height = window.innerHeight + 'px'
    });
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
const friend = document.querySelector('.friend')
function cosita() {
    friend.style.display = 'block'
}