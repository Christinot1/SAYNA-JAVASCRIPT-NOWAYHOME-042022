// Set the date we're counting down to
var countDownDate = new Date("May 06, 2022 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("time").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("spider").innerHTML = "EXPIRED";
    }
}, 1000);



const send = document.getElementById('popup');
const para = document.getElementById('textalert');
const border = document.getElementById('alert');
const btn = document.querySelector('.fermer');

const inputs = document.getElementsByClassName('cage');

send.addEventListener('submit', function(e) {
    e.preventDefault();
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            border.style.display = 'block'
            para.innerText = 'Veuillez remplir le formulaire'
            return false
        } else {
            border.style.display = 'block'
            para.innerText = 'Bienvenue chez SAYNA'
        }

    }

})

btn.addEventListener('click', () => {

    border.style.display = 'none'



})

let coeur = document.getElementById('heart');
coeur.addEventListener('click', myFav);

function myFav() {
    if (coeur.innerHTML == '<i class="fa-regular fa-heart"></i>') {
        coeur.innerHTML = '<i class="fa-solid fa-heart">'
    } 
    else { coeur.innerHTML = '<i class="fa-regular fa-heart"></i>' }

}

$(document).ready(function() {
    $('.button2').on({
        mouseenter: function() {
            $(this).css({
                'background-color': '#ffffff',
                'color': '#b11313',
                'box-shadow': '0 0 28px 0 #ffffff',
            })

        },
        mouseleave: function() {
            $(this).css({
                'background-color': 'transparent',
                'color': '#ffffff',
                'box-shadow': '0 0 0 0'
            })

        }
    })

    $('.button1').on({
        mouseenter: function() {
            $(this).css({
                'background-color': '#ffffff',
                'color': '#b11313',
                'box-shadow': '0 0 28px 0 #ffffff',
            })

        },
        mouseleave: function() {
            $(this).css({
                'background-color': '#ffffff',
                'color': '#b11313',
                'border': '1px solid #ffffff',
                'box-shadow': '0 0 0 0'
            })

        }
    })

    $('.social').on({
        mouseenter: function() {
            $(this).css({

                'color': '#ffffff',
            })

        },
        mouseleave: function() {
            $(this).css(
                'color', '#000000',
            )

        }
    })
    /************STYLE MENU**************/
    $('.menu ul li a').on({
        mouseenter: function() {
            $(this).css({
                'background-color': 'transparent',
                'color': '#ffffff',
                'text-decoration': 'underline',
            })

        },
        mouseleave: function() {
            $(this).css({
                'background-color': 'transparent',
                'color': '#ffffff',
                'text-decoration': 'none',
            })

        }
    })
/************************************/

    $('.card-text').hide();
    $('.card-text').nextUntil('.button1').hide()


    $('.img1').on({
        mouseenter: function() {
            $('.card1').fadeTo(4000, 0.8)
        },
        mouseleave: function() {
            $('.card1').hide(1000)
        }
    })



    $('.img2').on({
        mouseenter: function() {
            $('.card2').fadeTo(4000, 0.8)
        },
        mouseleave: function() {
            $('.card2').hide(1000)
        }
    })



    $('.img3').on({
        mouseenter: function() {
            $('.card3').fadeTo(4000, 0.8)
            $('.card-text').nextUntil('.button1').fadeTo(4000, 0.8)
        },
        mouseleave: function() {
            $('.card3').hide(1000)
            $('.card-text').nextUntil('.button1').hide()
        }


    })




































})