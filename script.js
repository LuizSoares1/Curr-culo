const toggleElements = () => {
    const content = document.querySelector(".content");
    const sidebarMobile = document.querySelector(".index-sidebar-mobile");

    if (content.style.display === "block") {
        content.style.display = "none";
        sidebarMobile.style.display = "block";
    } else {
        content.style.display = "block";
        sidebarMobile.style.display = "none";
    }
};

document.getElementById("aboutme").addEventListener("click", toggleElements);
document.getElementById("close-btn").addEventListener("click", toggleElements);
