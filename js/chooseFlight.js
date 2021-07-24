import {
    createCity
} from "./airports.js"
import {
    distanceAirPort
} from "./airports.js"
import {
    displayKod
} from "./airports.js"
import {
    getRandom
} from "./user.js"

createCity()

const images = document.querySelectorAll('.swiper-slide')
const start = document.querySelector('#start')
const end = document.querySelector('#end')
const date1 = document.querySelector('#date1')
const date2 = document.querySelector('#date2')
const km = document.querySelector('#km')
const kod1 = document.querySelector('#kod1')
const kod2 = document.querySelector('#kod2')
const startTime = document.querySelector('#startTime')
const endTime = document.querySelector('#endTime')
const airSelect = document.querySelectorAll('#air-select ')
const priceSpan = document.querySelector('.price span')

let x = null
let y = null
var speed
let arrControl = []
const dateStart = new Date()
date1.innerHTML = dateStart.toLocaleDateString()
getRandom()

function selectCity() {
    images.forEach((im, index) => {
        im.addEventListener('click', (e) => {

            if (arrControl.length == 0) {
                start.innerHTML = im.id
                arrControl.push(im.id)
                x = index
                kod1.innerHTML = displayKod(index)

            } else if (arrControl.length >= 1) {
                end.innerHTML = im.id
                arrControl.shift()
                y = index
                kod2.innerHTML = displayKod(index)

            }
            if (x != null && y != null) {
                km.innerHTML = distanceAirPort(x, y).toFixed(2)
            }
        })

    })
}
selectCity()

function flightTime() {
    startTime.addEventListener('change', () => {
        let time = startTime.value
        let hoursMinutes = time.split(/[.:]/);
        let hours = parseInt(hoursMinutes[0], 10);
        let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        let decimal = hours + minutes / 60

        if (km.innerHTML != '') {
            airSelect.forEach(air => {
                if (air.value == 'Lot') {
                    speed = 700
                }
                if (air.value == 'Ryanair') {
                    speed = 800
                }
                if (air.value == 'Lufthansa') {
                    speed = 900
                }
                if (air.value == 'Air-France') {
                    speed = 1000
                }
                if (air.value == 'Areoflot') {
                    speed = 1100
                }

            })

            var distanse = km.innerHTML
            let timeFlay = decimal + distanse / speed;
            var decimalTimeString = timeFlay;
            var n = new Date(0, 0);
            n.setMinutes(+decimalTimeString * 60);
            endTime.value = n.toTimeString().slice(0, 8);
            priceSpan.innerHTML = (distanse * 0.42).toFixed(2)
        }

    })

}
flightTime()
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: "",
        clickable: true,
    },
})