import useInput from "../useInput";

export default function useCreate() {
  const [budget, setBudget] = useInput("");

  return {
    budget,
    setBudget,
  };
}
