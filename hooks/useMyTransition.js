import { useRef, useEffect, useState } from 'react';

export default function useMyTransition(options, effectFn) {
  const refs = useRef([]);
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const observerCallbackFn = (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          effectFn(e);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallbackFn, options);
    setObserver(observer);
  }, []);

  const setRef = (el) => {
    refs.current.push(el);
    observer?.observe?.(el);
  };

  return {
    setRef,
  };
}
