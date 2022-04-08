import { menuInit } from './functions.js'

document.addEventListener('click', documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if(menuBlocks.length) {
    menuBlocks.forEach(menuBlock => {
        const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
        menuBlock.classList.add(`sub-menu-catalog__block__${menuBlockItems}`)
    })
}

function documentActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('[data-parent]')){
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null; 
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`)
        if(subMenu){
            const activeLink = document.querySelector('.menu-active')
            const activeBlock = document.querySelector('.menu-open')

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('menu-active')
                activeBlock.classList.remove('menu-open')
                document.documentElement.classList.remove('sub-menu-open')
            }
            document.documentElement.classList.toggle('sub-menu-open')
            targetElement.classList.toggle('menu-active')
            subMenu.classList.toggle('menu-open')


            if(targetElement.classList.contains('menu-active')) {
                
            }else{

            }
        }else{
            console.log(' Ой ой немає такого підменю :(')
        }

        e.preventDefault();
    }
    if(targetElement.closest('.menu-top-header__link__catalog')){
        document.documentElement.classList.add('catalog-open')
        e.preventDefault()
    }
    if(targetElement.closest('.menu-catalog__back')) {
        document.documentElement.classList.remove('catalog-open')
        document.querySelector('.menu-active').classList.remove('menu-active') ? document.querySelector('.menu-active').classList.remove('menu-active') : null;
        document.querySelector('.menu-open').classList.remove('menu-open') ? document.querySelector('.menu-open').classList.remove('menu-open') : null;
        e.preventDefault()
    }
    if(targetElement.closest('.sub-menu-catalog__back')) {
        document.documentElement.classList.remove('sub-menu-open')
        document.querySelector('.menu-active').classList.remove('menu-active') ? document.querySelector('.menu-active').classList.remove('menu-active') : null;
        document.querySelector('.menu-open').classList.remove('menu-open') ? document.querySelector('.menu-open').classList.remove('menu-open') : null;
        e.preventDefault()
    }
    
}