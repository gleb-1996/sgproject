'use strict';

let $content = document.querySelector('.content');
let $modalWindow = document.querySelector('.wrap-modal-window');
let $imgModalWindow = document.querySelector('.img-modal-window');
let $closeModalWindow = document.querySelector('.close-modal-window');

$content.addEventListener('click', function(event){
    let $elemTarget = event.target;
    let attrHref;

    if ($elemTarget.classList.contains('link-content')) {
        event.preventDefault();

        attrHref = $elemTarget.getAttribute('href');

        $modalWindow.classList.remove('hide-content');
        $imgModalWindow.setAttribute('src', attrHref);
    }

    if ($elemTarget.classList.contains('reviews-link')) {
        event.preventDefault();

        attrHref = $elemTarget.getAttribute('href');

        $modalWindow.classList.remove('hide-content');
        $imgModalWindow.setAttribute('src', attrHref);
    }

    if ($elemTarget.classList.contains('img-review') || $elemTarget.classList.contains('name-review')) {
        event.preventDefault();

        let $elemParent = $elemTarget.parentNode;
        attrHref = $elemParent.getAttribute('href');

        $modalWindow.classList.remove('hide-content');
        $imgModalWindow.setAttribute('src', attrHref);
    }
});

$modalWindow.addEventListener('click', function(event){
    let $elemTarget = event.target;

    if ($elemTarget.classList.contains('dark_layer')) {
        $modalWindow.classList.add('hide-content');
    }
});

$closeModalWindow.addEventListener('click', function(){
    $modalWindow.classList.add('hide-content');
});