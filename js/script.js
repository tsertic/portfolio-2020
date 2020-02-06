const spans = document.querySelectorAll('h1 span');

spans.forEach(span =>
  span.addEventListener('mouseover', e => {
    span.classList.add('animated', 'rubberBand');
  })
);

spans.forEach(span =>
  span.addEventListener('mouseout', e => {
    span.classList.remove('animated', 'rubberBand');
  })
);

const htmlBar = document.querySelector('.bar-html');
const cssBar = document.querySelector('.bar-css');
const jsBar = document.querySelector('.bar-javascript');
const reactBar = document.querySelector('.bar-react');

var t1 = gsap.timeline({ repeat: 2, repeatDelay: 1 });

t1.fromTo(
  htmlBar,
  0.75,
  { width: 'calc(0% - 6px)' },
  { width: 'calc(90% - 6px)', ease: Power4.easeOut }
)
  .fromTo(
    cssBar,
    0.75,
    { width: 'calc(0% - 6px)' },
    { width: 'calc(95% - 6px)', ease: Power4.easeOut }
  )
  .fromTo(
    jsBar,
    0.75,
    { width: 'calc(0% - 6px)' },
    { width: 'calc(80% - 6px)', ease: Power4.easeOut }
  )
  .fromTo(
    reactBar,
    0.75,
    { width: 'calc(0% - 6px)' },
    { width: 'calc(80% - 6px)', ease: Power4.easeOut }
  );

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: '.skills',
  triggerHook: 0
});

const showRequiredCategory = event => {
  const getId = event.id;
  const links = document.querySelectorAll('.work-category button');

  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute('class')) {
      links[i].classList.remove('active');
    }
  }

  event.classList.add('active');
  const getCategory = document.querySelector(`.category-${getId}`);
  const categories = document.querySelectorAll('div[class^="category-"]');
  for (i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute('class')) {
      categories[i].classList.remove('showCategory');
      categories[i].classList.add('hideCategory');
    }
  }

  getCategory.classList.remove('hideCategory');
  getCategory.classList.add('showCategory');
};

//works buttons
const workBtn = document.querySelectorAll('.work-category button');

for (i = 0; i < workBtn.length; i++) {
  workBtn[i].addEventListener('click', e => {
    showRequiredCategory(e.target);
  });
}
