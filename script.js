const switchYalowMobile = () => {
    document.querySelector(".ifr-the-yalow").classList.replace("ifr-the-yalow", "ifr-the-yalow_mb");
    document.querySelector('.mobile-btn').classList.add('hide');
    document.querySelector('.desktop-btn').classList.remove('hide');
}

const switchYalowDesktop = () => {
    document.querySelector(".ifr-the-yalow_mb").classList.replace("ifr-the-yalow_mb", "ifr-the-yalow");
    document.querySelector('.desktop-btn').classList.add('hide');
    document.querySelector('.mobile-btn').classList.remove('hide');
}

document.querySelector(".mobile-btn").addEventListener('click', switchYalowMobile);
document.querySelector(".desktop-btn").addEventListener('click', switchYalowDesktop);
document.querySelector(".back-btn").addEventListener('click', backHomeYalow);
