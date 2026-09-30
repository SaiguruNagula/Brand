import { useEffect, useState } from 'react';
import { ChromaFlow, FilmGrain, FlutedGlass, Shader, Swirl } from 'shaders/react';

/** One viewport-sized canvas shared by the adjacent light work/about sections. */
export function AnimatedLightBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [shaderAvailable, setShaderAvailable] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  return (
    <div aria-hidden="true" className="sticky top-0 z-0 -mb-[100vh] h-screen w-full overflow-hidden bg-[#EFEFEF]">
      {!reducedMotion && shaderAvailable && (
        <Shader
          className="h-full w-full"
          disableTelemetry
          onUnavailable={() => setShaderAvailable(false)}
        >
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      )}
    </div>
  );
}
