'use strict';

let $seminarNavigationPoints = document.querySelectorAll('.seminar');
let $seminarContentBlocks = document.querySelectorAll('.description-seminar');

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