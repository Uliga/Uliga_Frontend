import { useState, useCallback } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChagneValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [],
  );
  return [value, onChagneValue, setValue];
};

export default useInput;
