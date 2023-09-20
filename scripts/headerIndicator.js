const  headerIndicatorFn = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressed").style.width = (90 -  scrolled) + "%";
    console.log((100 -  scrolled) + "%");
}

const headerIndicator = () => {
    window.onscroll = function() {headerIndicatorFn()};
}

export default headerIndicator;