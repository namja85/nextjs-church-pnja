import useMyTransition from './useMyTransition';

export default function useElevateEffect() {
  const { setRef } = useMyTransition(
    {
      root: null,
      rootMargin: '0px 0px -200px 0px',
      threshold: 0,
    },
    (e) => {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
    },
  );

  return { setRef };
}
