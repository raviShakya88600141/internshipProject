const collapsedHeading = document.getElementsByClassName('collapseHeading');
const collapsedbody = document.getElementsByClassName('collapseBody');
const arrowIcon = document.getElementsByClassName('arrowIcon');


for (let i = 0; i <= collapsedHeading.length; i++) {
    collapsedHeading[i].addEventListener("click", () => {



        console.warn('dsada', collapsedbody[i])

        collapsedbody[i].style.display = collapsedbody[i].style.display == "none" ? "block" : "none";
        collapsedHeading[i].style.marginBottom = collapsedHeading[i].style.marginBottom == "20px" ? "0px" : "20px";

        arrowIcon[i].style.transform = arrowIcon[i].style.transform == "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    });
}



