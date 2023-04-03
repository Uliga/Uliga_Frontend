import { useEffect, useRef } from "react";

type Options = {
  refs?: React.RefObject<HTMLElement>[];
  onOutsideClick: (event: MouseEvent) => void;
};

export default function useDetectOutside({
  refs = [],
  onOutsideClick,
}: Options) {
  const handleClick = useRef<(event: MouseEvent) => void>();

  handleClick.current = (event: MouseEvent) => {
    if (refs.length > 0) {
      const isOutsideClick = refs.every(ref => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      if (isOutsideClick) {
        onOutsideClick(event);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick.current as any);

    return () => {
      document.removeEventListener("mousedown", handleClick.current as any);
    };
  }, []);
}
