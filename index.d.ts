declare module 'is-in-browser-viewport' {
  export default class isInViewport {
    constructor(targetElement: HTMLElement | Node, callback: IntersectionObserverCallback, options?: IntersectionObserverInit);
  }
}
