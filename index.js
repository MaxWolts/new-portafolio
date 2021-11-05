// const loading = document.querySelector('.loading')
// loading.style.display = 'none'

/* take this */
gsap.to('.loading_text', {
    duration:1,
    opacity: 1,
})
//animations
const loading = document.querySelector('.loading')
window.addEventListener("load", async function () {
    await gsap.to('.loading_text2', {
        duration:1,
        opacity: 1,
        delay:0.5
    })
    window.scroll(0,0)
    await gsap.to('.loading', {
        duration: 0.5,
        opacity: 0,
    })
    loading.style.display = 'none'
    
    const front = 'Frontend developer'
    await gsap.to('.max', {
        duration: 0.5,
        opacity: 1,
    })
    
    await gsap.to('.frontend', {
        duration:2,
        text: front
    })
    await gsap.to('.welcome', {
        duration:0.5,
        opacity: 1
    })
    await gsap.to('.hero__nav', {
        duration:0.5,
        opacity: 1
    })
    animationCircles()
});

//friend
const friend = document.querySelector('.friend-img')
function cosita() {
    friend.style.display = 'block'
}

//animation circles inicial
const animationCircles = () => {
    const $photo = document.querySelector('.photo')
    
    let options = {
        rootMargin: '250px',
        threshold: 1.0
    }  
    let observer = new IntersectionObserver(callback, options);
    observer.observe($photo)
    function callback(entrie, observer) {
        if(entrie[0].isIntersecting === true) {
            gsap.to('.circle1', {
                duration:2,
                y: 350
            })
            gsap.to('.circle2', {
                duration:2,
                delay: 0.2,
                y: 150
            })
        }
    }
}

