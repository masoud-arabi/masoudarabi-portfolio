import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["HELLO WORLD", "I AM MASOUD"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };