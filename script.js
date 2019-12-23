const switchRepairMobile = () => {
    document.querySelector(".ifr-the-repair").classList.replace("ifr-the-repair", "ifr-the-repair_mb");
    document.querySelector('.mobile-btn-repair').classList.add('hide');
    document.querySelector('.desktop-btn-repair').classList.remove('hide');
}

const switchRepairDesktop = () => {
    document.querySelector(".ifr-the-repair_mb").classList.replace("ifr-the-repair_mb", "ifr-the-repair");
    document.querySelector('.desktop-btn-repair').classList.add('hide');
    document.querySelector('.mobile-btn-repair').classList.remove('hide');
}

document.querySelector(".mobile-btn-repair").addEventListener('click', switchRepairMobile);
document.querySelector(".desktop-btn-repair").addEventListener('click', switchRepairDesktop);