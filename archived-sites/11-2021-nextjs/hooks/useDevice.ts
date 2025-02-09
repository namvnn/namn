import { useLayoutEffect, useEffect, useState } from "react";

type SizesState = [width: number, height: number];

export const MOBILE: string = "mobile";
export const DESKTOP: string = "desktop";
export type Device = typeof MOBILE | typeof DESKTOP;

export default function useWindowSize(): Device {
  const [sizes, setSizes] = useState<SizesState>([0, 0]);
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;
  useIsomorphicLayoutEffect(() => {
    const updateSize = () => {
      setSizes([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return sizes[0] < 800 ? MOBILE : DESKTOP;
}
