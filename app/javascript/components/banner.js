import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["My movies Lists 🤘"],
    typeSpeed: 90,
    loop: false
  });
}

export { loadDynamicBannerText };
