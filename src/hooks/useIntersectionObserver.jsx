import { useEffect } from "react";

const useIntersectionObserver = (selector = ".hiddens", className = "show") => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          entry.target.classList.remove(className);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(selector);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, className]);
};

export default useIntersectionObserver;