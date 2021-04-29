import { useEffect, useRef, useState } from 'react';

export default ({ root = null, rootMargin = '0px', threshold = 0 }): any => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState<any>(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold,
    })
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
};
