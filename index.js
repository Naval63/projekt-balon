document.addEventListener('DOMContentLoaded', function() {
    const animBG = new AnimBg('.anim-bg')
    
    document.addEventListener('mousemove', (e) => animBG.listenCursorMove(e))
    })