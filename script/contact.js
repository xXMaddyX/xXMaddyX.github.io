const startCube = () => {
    const activeCube = document.querySelector(".cube1")
    
    document.addEventListener('click', (event) => {
        console.log(event.target)
        if (event.target.classList.contains("face")) {
            activeCube.classList.toggle("active")
        }
    })
    
    const loopAnimation = () => {
        activeCube.classList.toggle("active")
    }
    
    const flippAnimation = () => {
        activeCube.classList.toggle("flipp")
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        setInterval(loopAnimation, 2000);
        setInterval(flippAnimation, 4000)
    })
}

startCube()