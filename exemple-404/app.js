var clicks = []

const confettis = ['yellow', 'coral', 'magenta', 'hotpink', 'purple', 'orange', 'skyblue']

deviation = arr => {
    // Calculate the standard deviation in an array
    
    let mean = arr.reduce((sum, num) => sum + num, 0) / arr.length
    let diffs = arr.map(num => Math.pow(num - mean, 2))
    let avg = diffs.reduce((sum, diff) => sum + diff, 0) / arr.length
    
    return Math.sqrt(avg)
}

$('#present').on('click touchend', () => {
    // Register clicks

    clicks.push(Date.now())
    clicks = clicks.slice(-10)

    // Tilt present
    angle = Math.random() * 30 - 15
    $('#present').css('transform', `rotate(${angle}deg)`)

    // Check if present pops
    if (clicks.length > 9 && deviation(clicks) < 500) {

        $('#present').addClass('pop')
        $('.discover > h3').css('opacity', 0)

        setTimeout(() => $('#pres').addClass('opened'), 300)
        setTimeout(() => $('#present').css('display', 'none'), 800)   
        setTimeout(() => $('#content').css('display', 'flex'), 500)   

        $('.snow').each((_, el) => {
            color = confettis[Math.floor(Math.random() * confettis.length)]
            $(el).css('background-color', color)
        })
    }
})
