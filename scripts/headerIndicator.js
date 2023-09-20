const  headerIndicatorFn = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressed").style.width = (90 -  scrolled) + "%";
}
 
const translateOptions = () => {
    const btn = document.getElementById("translate-icon-wrapp")
    const options = document.getElementById("translate-options-wrapp")

    btn.addEventListener(('click'), () => {
        if (options.style.display === "flex") {
            options.style.display = "none"
        } else {
            options.style.display = "flex"

        }
    })
}

const headerIndicator = () => {
    window.onscroll = function() {headerIndicatorFn()};
    translateOptions()
}

export default headerIndicator;