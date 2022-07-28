'use strict';

let $mainPointsMobile = document.querySelector('.main-points-mobile');
let $childs = $mainPointsMobile.childNodes;

for (const $child of $childs) {
    $child.addEventListener('click', function(event){
        let className = event.currentTarget.classList[1];

        switch (className) {
            case 'item-about':
                document.location.href = 'about.html';
            break;

            case 'item-seminars':
                document.location.href = 'services.html';
            break;

            case 'item-projects':
                document.location.href = 'projects.html';
            break;

            case 'item-customers':
                document.location.href = 'customers.html';
            break;

            case 'item-reviews':
                document.location.href = 'reviews.html';
            break;

            case 'item-contacts':
                document.location.href = 'contacts.html';
            break;
        }
    });
}