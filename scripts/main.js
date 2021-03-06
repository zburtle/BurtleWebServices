function isLargeScreen() {
    return window.matchMedia('(min-width: 768px)').matches;
}

function startDesktopAnimation() {
    setTimeout(function() { TweenLite.fromTo($('.phone'), .5, { rotation: -90 }, { rotation: 0, marginLeft: '5vw' }) }, 1500);
    setTimeout(function() { TweenLite.fromTo($('.phoneText'), .5, { rotation: 90 }, { rotation: 0 }) }, 2000);
    setTimeout(function() { $('.devices').prepend(`<div class="desktop d-flex flex-column align-items-center device">
                                                    <div class="desktopCamera"></div>
                                                    <div class="desktopScreen d-flex flex-column justify-content-center align-items-center">
                                                      <span class="desktopText d-flex flex-column justify-content-center align-items-center">
                                                        <div class="mainDesktopText">BURTLE</div>
                                                        <div class="subDesktopText">WEB SERVICES</div>
                                                        <div class="sloganText">MODERN WEBSITES FOR THE MODERN BUSINESS</div>
                                                      </span>
                                                    </div>
                                                  </div>`)}, 2500);
    setTimeout(function() { TweenLite.fromTo($('.mainDesktopText'), .5, {  }, { opacity: 1 }) }, 3500);
    setTimeout(function() { TweenLite.fromTo($('.subDesktopText'), .5, {  }, { opacity: 1 }) }, 3500);
    setTimeout(function() { TweenLite.fromTo($('.sloganText'), .5, {  }, { opacity: 1 }) }, 4000);
    setTimeout(function() { TweenLite.fromTo($('.hiddenUntilDone'), .5, {  }, { color: 'black' }) }, 4500);
}

function startMobileAnimation() {
    setTimeout(function() { TweenLite.to($('#phoneText1'), .5, { opacity: 1 }) }, 500);
    setTimeout(function() { TweenLite.to($('#phoneText2'), .75, { opacity: 1 }) }, 1250);
    setTimeout(function() { TweenLite.to($('#phoneText3'), .75, { opacity: 1 }) }, 2000);
    setTimeout(function() { TweenLite.fromTo($('.phoneSpeaker'), .75, { borderColor: 'rgba(255,255,255,1)' }, { borderColor: 'rgba(0,0,0,1)' }) }, 2750);
    setTimeout(function() { TweenLite.fromTo($('.phoneCamera'), .75, { borderColor: 'rgba(255,255,255,1)' }, { borderColor: 'rgba(0,0,0,1)' }) }, 2750);
    setTimeout(function() { TweenLite.fromTo($('.phone'), .75, { borderColor: 'rgba(255,255,255,1)' }, { borderColor: 'rgba(0,0,0,1)' }) }, 2750);
    setTimeout(function() { TweenLite.fromTo($('.hiddenUntilDone'), .75, {  }, { color: 'black' }) }, 3500);
}