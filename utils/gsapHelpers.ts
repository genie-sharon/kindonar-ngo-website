import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initParallax = (element: HTMLElement, speed: number) => {
  gsap.to(element, {
    y: () => window.innerHeight * speed * 0.1,
    ease: "none",
    scrollTrigger: {
      trigger: element.parentElement!,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const initExpandingImage = (image: HTMLElement, container: HTMLElement) => {
  gsap.to(image, {
    scale: 1.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
    },
  });
};

export const initCounterAnimation = (element: HTMLElement, endValue: number) => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    onUpdate: () => { element.textContent = new Intl.NumberFormat('en-US').format(Math.floor(obj.value)); },
  });
};
