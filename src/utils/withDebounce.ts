export default  function withDebounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): { 
  debounced: (...args: Parameters<T>) => void;
  clear: () => void;
} {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };

  const clear = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return { debounced, clear };
}