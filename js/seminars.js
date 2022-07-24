'use strict';

const screenWidth = window.screen.width;
let $seminarNavigationPoints = document.querySelectorAll('.seminar');
let $seminarContentBlocks = document.querySelectorAll('.description-seminar');
let $itemsServices = document.querySelector('.items-services');

if (screenWidth <= 425) {
    $itemsServices.classList.add('hide-content');
}

function hideContentBlocks(a) {
    for (let i = a; i < $seminarContentBlocks.length; i++) {
        $seminarContentBlocks[i].classList.add('hide-content');
        $seminarNavigationPoints[i].classList.remove('active-link');
    }
}

function showContentBlocks(b) {
    hideContentBlocks(0);

    $seminarContentBlocks[b].classList.remove('hide-content');
    $seminarNavigationPoints[b].classList.add('active-link');
}

window.addEventListener('resize', function(){
    if (window.screen.width > 425) {
        $itemsServices.classList.remove('hide-content');
    } else {
        $itemsServices.classList.add('hide-content');
    }
});

document.querySelector('.nav-seminars').addEventListener('click', function(event){
    let $target = event.target;

    if ($target.classList.contains('seminar')) {
        for (let i = 0; i < $seminarNavigationPoints.length; i++) {
            if ($target == $seminarNavigationPoints[i]) {
                showContentBlocks(i);
                break;
            }
        }
    }
});

document.querySelector('.open-list-seminars').addEventListener('click', function(){
    $itemsServices.classList.remove('hide-content');
});

document.querySelector('.close-mobile-nav-seminars').addEventListener('click', function(){
    $itemsServices.classList.add('hide-content');
});