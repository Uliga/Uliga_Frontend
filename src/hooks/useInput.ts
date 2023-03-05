import { useState, useCallback } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
