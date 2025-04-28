document.addEventListener("mouseover", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px,${y * speed * 20}px)`;
    })
})

// Signin Padge open and close animation

const signinbtn = document.querySelector("#signinBtn");
const sgninPage = document.querySelector("#signinPage");
const closeIcon = document.querySelector("#closeIcon");

signinbtn.addEventListener("click",function(){
    sgninPage.classList.remove("closeSignin");
    sgninPage.classList.add("openSignin");
})
closeIcon.addEventListener("click",function(){
    sgninPage.classList.remove("openSignin");
    sgninPage.classList.add("closeSignin");
})