'use strict';

let $projectNavigationPoints = document.querySelectorAll('.link-projects');
let $projectContentBlocks = document.querySelectorAll('.description-project');

function hideContentBlocks(a) {
    for (let i = a; i < $projectContentBlocks.length; i++) {
        $projectContentBlocks[i].classList.add('hide-content');
        $projectNavigationPoints[i].classList.remove('active-link');
    }
}

function showContentBlocks(b) {
    hideContentBlocks(0);

    $projectContentBlocks[b].classList.remove('hide-content');
    $projectNavigationPoints[b].classList.add('active-link');
}

document.querySelector('.items-projects').addEventListener('click', function(event){
    let $target = event.target;

    if ($target.classList.contains('link-projects')) {
        event.preventDefault();

        for (let i = 0; i < $projectNavigationPoints.length; i++) {
            if ($target == $projectNavigationPoints[i]) {
                showContentBlocks(i);
                break;
            }
        }
    }
});