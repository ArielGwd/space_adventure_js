let isMoving = true

function setBgMoving() {
    if (isMoving == true) {
        setTimeout(function() {
            // Setting background berjalan
            const bg = document.getElementById('main')
            bg.style.backgroundPositionY = (parseInt(bg.style.backgroundPositionY.replace('px','')) + 1) + 'px'
            
            // update score 
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) +1
    
            // panggil recursive setBgMoving
            setBgMoving()
        }, 5)
    }
}
// inisilisasi
setBgMoving()

// setting meteor
function setMeteorMoving() {
    const meteor = document.getElementById('meteor'),
        plane = document.getElementById('plane')

        setTimeout(function () {

            meteor.style.marginTop = (parseInt(meteor.style.marginTop.replace('px','')) + 1) + 'px'

            if (parseInt(meteor.style.marginTop.replace('px','')) > 500) {
                meteor.style.marginLeft = (Math.floor(Math.random() * 250) + 50) + 'px'
                meteor.style.marginTop = "-100px"
            }

            if (meteor.offsetTop + 56 >= plane.offsetTop &&
                meteor.offsetLeft + 50 >= plane.offsetLeft &&
                meteor.offsetTop <= plane.offsetTop +100 &&
                meteor.offsetLeft <= plane.offsetLeft +50 ) {
                alert('Game Over, score : ' + document.getElementById('score').innerHTML)
                isMoving = false
                meteor.setAttribute('class','freeze')
                plane.setAttribute('class','freeze')
                location.href = 'index.html'
            } else {
                // gerakan lagi meteornya
                setMeteorMoving()
            }
            
        }, 1)
}
setMeteorMoving()

// pesawat berjalan
window.addEventListener('keydown', function (e) {
    /*
    37 -> kiri 
    38 -> atas
    39 -> kanan
    40 -> bawah
    */
   if (isMoving == true) {
    const plane = this.document.getElementById('plane'),
        left =  parseInt(plane.style.marginLeft.replace('px', '')),
        top =  parseInt(plane.style.marginTop.replace('px', ''))

    if (e.keyCode == 37) { // kiri
        // plane.style.marginLeft = (parseInt(plane.style.marginLeft.replace('px', '')) -10) +'px'
        if (left > 0) {
            plane.style.marginLeft = (left - 10) +'px'
        }

    }  else if (e.keyCode == 38) { // atas
        if (top >  0) {
            plane.style.marginTop = (top - 10) +'px'
        }

    } else if (e.keyCode == 39) {
        if (left < 340) {
            plane.style.marginLeft = (left + 10) +'px'
        }

    } else if (e.keyCode == 40) {
        if (top < 400) {
            plane.style.marginTop = (top + 10) +'px'
        }
    }
   }
   
})