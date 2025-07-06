let adTimeout = null;
let adCycleTimeout = null;
let isMobileView = window.innerWidth <= 768;

function isMobile() {
  return window.innerWidth <= 768;
}

function createAd(position = 'right', imageSrc = 'assets/img/brand.png') {
  const ad = document.createElement('div');
  ad.id = `nbri-ad-float-${position}`;
  ad.className = 'nbri-ad-container';

  Object.assign(ad.style, {
    position: 'fixed',
    bottom: '20px',
    [position]: '20px',
    width: isMobile() ? '90vw' : '350px',
    border: '1px solid #43505f',
    borderRadius: '16px',
    overflow: 'hidden',
    zIndex: '9999',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: '1',
    transition: 'opacity 1s ease',
    backgroundColor: '#fefefe',
    color: '#212121',
    textAlign: 'center'
  });

  ad.innerHTML = `
    <div style="position: relative; width: 100%;">
      <button class="close-ad-btn" aria-label="Close Ad" title="Close" style="
        position: absolute;
        top: 8px;
        right: 12px;
        background: transparent;
        border: none;
        font-size: 20px;
        font-weight: bold;
        color: #212121;
        cursor: pointer;
        user-select: none;
        line-height: 1;
        padding: 0;
        z-index: 2;
      ">&times;</button>

      <a href="https://www.nbri.in" target="_blank" style="
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #212121;
        width: 100%;
      ">
        <img src="${imageSrc}" alt="NBsense Ad" style="width: 100%; height: auto; display: block;" />
        <div style="padding: 12px 10px 16px 10px; font-size: 14px;">
          <div style="margin-bottom: 6px;">Please Visit Our Website</div>
          <div style="color: #00aaff; text-decoration: underline;">www.nbri.in</div>
        </div>
      </a>
    </div>
  `;

  ad.querySelector('.close-ad-btn').addEventListener('click', () => {
    hideAd(position, true);
  });

  return ad;
}


function createExploreButton(position = 'right') {
  if (document.getElementById(`explore-button-${position}`)) return;

  const button = document.createElement('button');
  button.id = `explore-button-${position}`;
  button.className = 'nbri-explore-button';

  button.innerText = 'Explore Me';
  Object.assign(button.style, {
    position: 'fixed',
    bottom: '80px',
    [position]: '10px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#43505f',
    color: '#fff',
    fontSize: '12px',
    zIndex: '9999',
    cursor: 'pointer',
    display: isMobile() ? 'block' : 'none'
  });

  button.addEventListener('click', () => {
    showAd(position, 'assets/img/brand.png', false);
    button.style.display = 'none';
  });

  document.body.appendChild(button);
}

function showAd(position = 'right', imageSrc = 'assets/img/brand.png', loop = true) {
  const id = `nbri-ad-float-${position}`;
  if (document.getElementById(id)) return;

  const ad = createAd(position, imageSrc);
  document.body.appendChild(ad);

  adTimeout = setTimeout(() => {
    hideAd(position, loop);
  }, 10000);
}

function hideAd(position = 'right', loop = true) {
  const id = `nbri-ad-float-${position}`;
  const ad = document.getElementById(id);
  if (ad) {
    ad.style.opacity = '0';
    setTimeout(() => ad.remove(), 1000);
  }

  clearTimeout(adTimeout);
  clearTimeout(adCycleTimeout);

  if (isMobile()) {
    const exploreBtn = document.getElementById(`explore-button-${position}`);
    if (exploreBtn) exploreBtn.style.display = 'block';
  } else if (loop) {
    adCycleTimeout = setTimeout(() => {
      showAd(position, 'assets/img/brand.png', true);
    }, 20000);
  }
}

function initAdCycle() {
  if (isMobile()) {
    createExploreButton('right');
  } else {
    // Start the ad cycle 5 seconds after page load
    setTimeout(() => {
      showAd('right', 'assets/img/brand.png', true);
    }, 5000);
  }
}

// Dynamically respond to screen resize
window.addEventListener('resize', () => {
  const nowMobile = isMobile();
  if (nowMobile !== isMobileView) {
    isMobileView = nowMobile;
    location.reload(); // or re-initialize state
  }
});

window.addEventListener("DOMContentLoaded", () => {
  createExploreButton('right');
  initAdCycle();
});