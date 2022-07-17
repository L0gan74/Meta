document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.description__bottom', 3, {
        top: '40px',
        autoAlpha: 0,
    }, '-=5.5')
    .from('.ticker', 3, {
        top: '40px',
        duration: 1,
    }, '-=4')
    .from('.roadmap', 3, {
        top: '40px',
        autoAlpha: 0,
    }, '-=3.5')
    .from('.discord__block', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: 'section',
        duration: '200%',
        triggerHook: 0
    })
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);
})