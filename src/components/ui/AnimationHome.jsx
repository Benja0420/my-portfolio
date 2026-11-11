import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from '../../utils/cn.js';

export default function AnimationHome({ className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animation = null;
    let loading = false;
    let cancelled = false;

    // Solo descarga e inicializa Lottie cuando el contenedor es visible (en móvil está oculto con `hidden lg:flex`).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!animation && !loading) {
            loading = true;
            Promise.all([
              import('lottie-web/build/player/lottie_light'),
              import('../../assets/animations/animationHome.json'),
            ])
              .then(([lottieModule, dataModule]) => {
                if (cancelled) return;
                const lottie = lottieModule.default ?? lottieModule;

                animation = lottie.loadAnimation({
                  container,
                  renderer: 'svg',
                  loop: true,
                  autoplay: !prefersReducedMotion,
                  animationData: dataModule.default,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid meet',
                    progressiveLoad: true,
                  },
                });
              })
              .catch((error) => {
                console.error('No se pudo cargar la animación de Home', error);
              });
          } else if (animation && !prefersReducedMotion) {
            animation.play();
          }
        } else if (animation && !prefersReducedMotion) {
          animation.pause();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      animation?.destroy();
    };
  }, []);

  return (
    <div
      className={cn(
        'relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden sm:max-w-sm lg:max-w-md xl:max-w-lg',
        className,
      )}
    >
      <div ref={containerRef} aria-hidden="true" className="absolute inset-0" />
    </div>
  );
}

AnimationHome.propTypes = {
  className: PropTypes.string,
};
