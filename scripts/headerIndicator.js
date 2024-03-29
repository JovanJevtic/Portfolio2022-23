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
            btn.style.backgroundColor = "#fafafa"

        } else {
            options.style.display = "flex"
            btn.style.backgroundColor = "#f1f1f1"
        }
    })
}

const iconScroll = () => {
    const icon = document.getElementsByClassName('icon-scroll')[0];
    icon.addEventListener(('click'), () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 130,
        })
    });
}

const headerIndicator = () => {
    window.onscroll = function() {headerIndicatorFn()};
    translateOptions()
    iconScroll()
}

export default headerIndicator;