import { useState, useCallback } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [],
  );
  return [value, onChangeValue, setValue];
};

export default useInput;
