export class isInViewport {

    constructor(targetElement, callback, options) {

        this.isInViewport(targetElement, callback, options)

    }

    isInViewport(targetElement, callback, options) {
        //  console.log(targetElement, callback, options);
        let observer;
        observer = new IntersectionObserver(callback, options);
        observer.observe(targetElement);
    }

}