
function modal(a, b, c) {
    let body = document.getElementById('body');
    let modal = document.getElementById(a);
    let btn = document.getElementById(b);
    let close = document.getElementsByClassName("modal_close")[c];
    btn.onclick = function () {
        modal.style.display = "block";
        body.style.overflow = "hidden";
    }
    close.onclick = function () {
        modal.style.display = "none";
        body.style.overflow = "visible";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
modal('fox_modal', 'fox_btn', 0);
modal('butterfly_modal', 'butterfly_btn', 1);
modal('cat_modal', 'cat_btn', 2);
modal('hireme_modal', 'hireme_btn1', 4);
modal('hireme_modal', 'hireme_btn2', 4);
modal('hireme_modal', 'hireme_btn3', 4);
modal('hireme_modal', 'hireme_btn4', 4);
modal('resume_modal', 'resume_btn1', 3);
modal('resume_modal', 'resume_btn2', 3);
modal('fox_modal', '1img', 0);
modal('butterfly_modal', '2img', 1);
modal('cat_modal', '3img', 2);




function scroll(a){
    var getMeTo = document.getElementById(a);
    getMeTo.scrollIntoView({behavior: 'smooth'}, true);
}


$("#nav_toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active")
    $(".nav").toggleClass("active");
});




// Filter
$(function() {

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workcat = $(this).data('cat');

                if(workcat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});




// var modal = document.getElementById('fox_modal');
// var btn = document.getElementById('fox_btn');
// var close = document.getElementsByClassName("modal_close")[0];
//
// btn.onclick = function () {
//     modal.style.display = "block";
// }
// close.onclick = function () {
//     modal.style.display = "none";
// }
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// function next(a, b, c) {
//     let current = document.getElementById(a);
//     let next = document.getElementById(b);
//     let another = document.getElementById(c);
//     another.onclick = function () {
//         current.style.display = "none";
//         next.style.display = "block";
//     }
// }
// next('fox_modal', 'butterfly_modal', 'next');


// var menu = document.getElementById('nav_toggle');
//
// menu.onclick = function () {
//     menu.classList.add("active") = "block";
// }

// function menu() {
//     var menu = document.getElementById("nav_toggle");
//
//     if ( (menu).hasClass("active") ) {
//         menu.onclick = function () {
//         menu.classList.remove("active");
//         }
//     }
//     else {
//         menu.onclick = function () {
//             menu.classList.add("active");
//         }
//     }
// }();


// Modal Slider
// $(".slickPrev").on("click", function(event) {
//     event.preventDefault();
//
//     let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
//
//     currentSlider.slick("slickPrev");
// });
//
// $(".slickNext").on("click", function(event) {
//     event.preventDefault();
//
//     let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
//
//     currentSlider.slick("slickNext");
// });