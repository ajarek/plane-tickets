const airports = [{
    name: 'Krakow',
    kod: 'KRK',
    sg: 50.0613888888,
    dg: 19.93333333333,
    src: 'krakow.jpg'
  },
  {
    name: 'London',
    kod: 'LHR',
    sg: 51.5,
    dg: 0.116667,
    src: 'london.jpg'
  },
  {
    name: 'Moscow',
    kod: 'SVO',
    sg: 41.3366666666,
    dg: 75.518333333,
    src: 'moscow.jpg'
  },
  {
    name: 'Paris',
    kod: 'ORY',
    sg: 48.866667,
    dg: 2.35,
    src: 'paris.jpg'
  },
  {
    name: 'Roma',
    kod: 'FCO',
    sg: 41.891666666,
    dg: 12.51111111,
    src: 'roma.jpg'
  },
  {
    name: 'Warsaw',
    kod: 'WAW',
    sg: 52.229722,
    dg: 21.01166,
    src: 'warsaw.jpg'
  },

]
export function createCity() {

  airports.forEach(air => {
    const city = document.querySelector('.swiper-wrapper')
    const div = document.createElement('div')
    div.classList.add('swiper-slide')
    div.setAttribute('id', air.name)
    div.innerHTML = `
    <img src="./img/${air.src}" alt="${air.name}">
    <figcaption>${air.name}</figcaption>`
    city.append(div)

  })

}
export function distanceAirPort(start, end) {
  const distance = Math.sqrt(
    Math.pow(Math.abs(airports[start].sg - airports[end].sg), 2) +
    Math.pow(Math.cos(airports[start].sg * Math.PI / 180) * Math.abs(airports[start].dg - airports[end].dg), 2)
  ) * 40075.704 / 360
  return distance
}

export function displayKod(kod1) {
  return airports[kod1].kod
}