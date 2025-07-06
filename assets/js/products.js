const data = [
  {
      place:'NBSense 01',
      title:'ENERGY',
      title2:'MONITORING',
      description:'NBSense is an IoT-based energy monitoring system that tracks real-time usage, enhances efficiency, lowers costs, and supports sustainability with detailed analytics and easy integration into existing infrastructure.',
      image:'https://nbsense.com/assets/img/Products/ProductBg01.png'
  },
  {
      place:'NBSense 02',
      title:'WATER',
      title2:'MONITORING',
      description:'NBSense is an IoT-based water monitoring system that tracks usage, quality, and leaks in real time, enabling efficient management, reducing costs and waste, and supporting sustainability through seamless integration and analytics.',
      image:'https://nbsense.com/assets/img/Products/ProductBg02.png'
  },
  {
      place:'NBSense 03',
      title:'DIESEL',
      title2:'MONITORING',
      description:'NBSense is an IoT-based diesel monitoring system that tracks fuel usage in real time, prevents theft, reduces downtime, and improves efficiency through alerts, data analysis, and predictive insights.',
      image:'https://nbsense.com/assets/img/Products/ProductBg03.png'
  },
  {
      place:'NBSense 04',
      title:'UPS',
      title2:'MONITORING',
      description:'NBSense UPS Monitoring System offers real-time monitoring of UPS performance, battery health, and load conditions, using predictive analytics to prevent failures, reduce maintenance costs, and ensure continuous power availability.',
      image:'https://nbsense.com/assets/img/Products/ProductBg04.png'
  },
  {
      place:'NBSense 05',
      title:'AIR QUALITY',
      title2:'MONITORING',
      description:'NBSense Air Quality Monitoring System uses IoT to track pollutants, particulate matter, temperature, and humidity in real time, helping ensure healthier environments, regulatory compliance, and improved quality of life.',
      image:'https://nbsense.com/assets/img/Products/ProductBg05.png'
  },
  {
      place:'NBSense 06',
      title:'HVAC',
      title2:'MONITORING',
      description:'NBSense HVAC Monitoring System uses IoT to track energy use, temperature, and system health in real time, boosting efficiency, reducing costs, and extending HVAC equipment life while enhancing comfort.',
      image:'https://nbsense.com/assets/img/Products/ProductBg06.png'
  },
  {
    place:'NBSense 07',
    title:'VIBRATION',
    title2:'MONITORING',
    description:'NBSense Vibration Monitoring System uses IoT to detect abnormal machinery vibrations in real time, enabling early failure detection, reducing downtime, improving efficiency, and extending equipment lifespan across various industries.',
      image:'https://nbsense.com/assets/img/Products/ProductBg07.png'
  },
  {
    place:'NBSense 08',
    title:'FIRE',
    title2:'ALERT',
    description:'NBSense Fire Alert Monitoring System uses IoT for real-time fire hazard detection, delivering instant alerts to enhance safety, reduce risks, and enable faster response across various environments.',
      image:'https://nbsense.com/assets/img/Products/ProductBg08.png'
  },
  {
    place:'NBSense 09',
    title:'FAULT',
    title2:'MONITORING',
    description:'NBSense Electrical Monitoring System uses IoT to provide real-time insights into electrical usage, faults, and system health, optimizing energy consumption, preventing outages, and enhancing efficiency with predictive maintenance alerts.',
      image:'https://nbsense.com/assets/img/Products/ProductBg09.png'
  },
  {
    place:'NBSense 10',
    title:'TRANSFORMER',
    title2:'MONITORING',
    description:'NBSense Transformer Monitoring System uses IoT to track transformer health, load, and temperature in real time, offering early failure warnings, preventing downtime, and ensuring reliable power distribution and efficient maintenance planning.',
      image:'https://nbsense.com/assets/img/Products/ProductBg10.png'
  },
  {
    place:'NBSense 11',
    title:'AGRICULTURE',
    title2:'MONITORING',
    description:'NBSense Agriculture Monitoring System uses IoT to track soil conditions, water usage, crop health, and climate factors, helping farmers optimize irrigation, improve yields, reduce waste, and enhance sustainability and efficiency.',
      image:'https://nbsense.com/assets/img/Products/ProductBg11.png'
  },
  {
    place:'NBSense 12',
    title:'GAS & AIR',
    title2:'MONITORING',
    description:'NBSense Gas and Air Monitoring System uses IoT sensors to monitor gas levels and air quality in real time, ensuring safety, detecting pollutants, and ensuring regulatory compliance in industries like manufacturing and energy.',
      image:'https://nbsense.com/assets/img/Products/ProductBg12.png'
  },
  {
    place:'NBSense 13',
    title:'FLEET',
    title2:'MONITORING',
    description:'NBSense Fleet Management System uses IoT to track vehicle location, speed, fuel usage in real time. It enhances fleet efficiency, reduces costs, improves safety, and ensures optimal performance across operations.',
      image:'https://nbsense.com/assets/img/Products/ProductBg13.png'
  },
]

const _ = (id)=>document.getElementById(id)
const cards = data.map((i, index)=>`<div class="card" id="card${index}" style="background-image:url(${i.image})"  ></div>`).join('')



const cardContents = data.map((i, index)=>`<div class="card-content" id="card-content-${index}">
<div class="content-start"></div>
<div class="content-place">${i.place}</div>
<div class="content-title-1">${i.title}</div>
<div class="content-title-2">${i.title2}</div>

</div>`).join('')


const sildeNumbers = data.map((_, index)=>`<div class="item" id="slide-item-${index}" >${index+1}</div>`).join('')
_('demo').innerHTML =  cards + cardContents
_('slide-numbers').innerHTML =  sildeNumbers


const range = (n) =>
Array(n)
  .fill(0)
  .map((i, j) => i + j);
const set = gsap.set;

function getCard(index) {
return `#card${index}`;
}
function getCardContent(index) {
return `#card-content-${index}`;
}
function getSliderItem(index) {
return `#slide-item-${index}`;
}

function animate(target, duration, properties) {
return new Promise((resolve) => {
  gsap.to(target, {
    ...properties,
    duration: duration,
    onComplete: resolve,
  });
});
}

let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let detailsEven = true;

let offsetTop = 200;
let offsetLeft = 700;
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
const [active, ...rest] = order;
const detailsActive = detailsEven ? "#details-even" : "#details-odd";
const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
const { innerHeight: height, innerWidth: width } = window;
offsetTop = height - 430;
offsetLeft = width - 830;

gsap.set("#pagination", {
  top: offsetTop + 330,
  left: offsetLeft,
  y: 200,
  opacity: 0,
  zIndex: 60,
});
gsap.set("nav", { y: -200, opacity: 0 });

gsap.set(getCard(active), {
  x: 0,
  y: 0,
  width: window.innerWidth,
  height: window.innerHeight,
});
gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
gsap.set(`${detailsInactive} .text`, { y: 100 });
gsap.set(`${detailsInactive} .title-1`, { y: 100 });
gsap.set(`${detailsInactive} .title-2`, { y: 100 });
gsap.set(`${detailsInactive} .desc`, { y: 50 });
gsap.set(`${detailsInactive} .cta`, { y: 60 });

gsap.set(".progress-sub-foreground", {
  width: 500 * (1 / order.length) * (active + 1),
});

rest.forEach((i, index) => {
  gsap.set(getCard(i), {
    x: offsetLeft + 400 + index * (cardWidth + gap),
    y: offsetTop,
    width: cardWidth,
    height: cardHeight,
    zIndex: 30,
    borderRadius: 10,
  });
  gsap.set(getCardContent(i), {
    x: offsetLeft + 400 + index * (cardWidth + gap),
    zIndex: 40,
    y: offsetTop + cardHeight - 100,
  });
  gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
});

gsap.set(".indicator", { x: -window.innerWidth });

const startDelay = 0.6;

gsap.to(".cover", {
  x: width + 400,
  delay: 0.5,
  ease,
  onComplete: () => {
    setTimeout(() => {
      loop();
    }, 500);
  },
});
rest.forEach((i, index) => {
  gsap.to(getCard(i), {
    x: offsetLeft + index * (cardWidth + gap),
    zIndex: 30,
    delay: 0.05 * index,
    ease,
    delay: startDelay,
  });
  gsap.to(getCardContent(i), {
    x: offsetLeft + index * (cardWidth + gap),
    zIndex: 40,
    delay: 0.05 * index,
    ease,
    delay: startDelay,
  });
});
gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;

function step() {
return new Promise((resolve) => {
  order.push(order.shift());
  detailsEven = !detailsEven;

  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

  document.querySelector(`${detailsActive} .place-box .text`).textContent =
    data[order[0]].place;
  document.querySelector(`${detailsActive} .title-1`).textContent =
    data[order[0]].title;
  document.querySelector(`${detailsActive} .title-2`).textContent =
    data[order[0]].title2;
  document.querySelector(`${detailsActive} .desc`).textContent =
    data[order[0]].description;

  gsap.set(detailsActive, { zIndex: 22 });
  gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
  gsap.to(`${detailsActive} .text`, {
    y: 0,
    delay: 0.1,
    duration: 0.7,
    ease,
  });
  gsap.to(`${detailsActive} .title-1`, {
    y: 0,
    delay: 0.15,
    duration: 0.7,
    ease,
  });
  gsap.to(`${detailsActive} .title-2`, {
    y: 0,
    delay: 0.15,
    duration: 0.7,
    ease,
  });
  gsap.to(`${detailsActive} .desc`, {
    y: 0,
    delay: 0.3,
    duration: 0.4,
    ease,
  });
  gsap.to(`${detailsActive} .cta`, {
    y: 0,
    delay: 0.35,
    duration: 0.4,
    onComplete: resolve,
    ease,
  });
  gsap.set(detailsInactive, { zIndex: 12 });

  const [active, ...rest] = order;
  const prv = rest[rest.length - 1];

  gsap.set(getCard(prv), { zIndex: 10 });
  gsap.set(getCard(active), { zIndex: 20 });
  gsap.to(getCard(prv), { scale: 1.5, ease });

  gsap.to(getCardContent(active), {
    y: offsetTop + cardHeight - 10,
    opacity: 0,
    duration: 0.3,
    ease,
  });
  gsap.to(getSliderItem(active), { x: 0, ease });
  gsap.to(getSliderItem(prv), { x: -numberSize, ease });
  gsap.to(".progress-sub-foreground", {
    width: 500 * (1 / order.length) * (active + 1),
    ease,
  });

  gsap.to(getCard(active), {
    x: 0,
    y: 0,
    ease,
    width: window.innerWidth,
    height: window.innerHeight,
    borderRadius: 0,
    onComplete: () => {
      const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
      gsap.set(getCard(prv), {
        x: xNew,
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        zIndex: 30,
        borderRadius: 10,
        scale: 1,
      });

      gsap.set(getCardContent(prv), {
        x: xNew,
        y: offsetTop + cardHeight - 100,
        opacity: 1,
        zIndex: 40,
      });
      gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

      gsap.set(detailsInactive, { opacity: 0 });
      gsap.set(`${detailsInactive} .text`, { y: 100 });
      gsap.set(`${detailsInactive} .title-1`, { y: 100 });
      gsap.set(`${detailsInactive} .title-2`, { y: 100 });
      gsap.set(`${detailsInactive} .desc`, { y: 50 });
      gsap.set(`${detailsInactive} .cta`, { y: 60 });
      clicks -= 1;
      if (clicks > 0) {
        step();
      }
    },
  });

  rest.forEach((i, index) => {
    if (i !== prv) {
      const xNew = offsetLeft + index * (cardWidth + gap);
      gsap.set(getCard(i), { zIndex: 30 });
      gsap.to(getCard(i), {
        x: xNew,
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        ease,
        delay: 0.1 * (index + 1),
      });

      gsap.to(getCardContent(i), {
        x: xNew,
        y: offsetTop + cardHeight - 100,
        opacity: 1,
        zIndex: 40,
        ease,
        delay: 0.1 * (index + 1),
      });
      gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
    }
  });
});
}

async function loop() {
await animate(".indicator", 3, { x: 0 });
await animate(".indicator", 0.9, { x: window.innerWidth, delay: 0.3 });
set(".indicator", { x: -window.innerWidth });
await step();
loop();
}

async function loadImage(src) {
return new Promise((resolve, reject) => {
  let img = new Image();
  img.onload = () => resolve(img);
  img.onerror = reject;
  img.src = src;
});
}

async function loadImages() {
const promises = data.map(({ image }) => loadImage(image));
return Promise.all(promises);
}

async function start() {
try {
  await loadImages();
  init();
} catch (error) {
  console.error("One or more images failed to load", error);
}
}

start()