const container = document.getElementById('container')
const SQUARES = 5100
const colors = ['#8294C4', '#19A7CE', '#0C134F', '#146C94', '#5C469C', '#ECCDB4', '#FEA1A1', '#B799FF', '#F99B7D', '#E76161', '#F8E8EE', '#FFD95A', '#CBB279', '#E57C23', '#FF55BB', '#C07F00', '#DBDFAA', '#19A7CE', '#FFFAF4', '#B70404', '#47A992', '#11009E', '#3FC1C9', '#FF9494', '#E5B299', '#B4846C', '#A6B1E1', '#C06C84', '#00ffff', '#6C5B7B', '#B1B2FF', '#769FCD', '#30E3CA', '#B1B2FF', '#9E7676', '#FCD1D1']

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseout', () => {
        removeColor(square)
    })

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}