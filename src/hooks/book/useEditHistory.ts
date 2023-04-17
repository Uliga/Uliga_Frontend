import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBook from "./useBook";
import { IHistory } from "../../interfaces/book";
import { InputTypes } from "./useWrite";

export default function useEditHistory({ history }: { history: IHistory }) {
  const { bookId } = useParams();
  const { useCategoryList } = useBook();
  const list = useCategoryList(bookId ? +bookId : 0);
  const [categoryOptions, setCategoryOptions] = useState<any>(undefined);
  console.log(history);
  useEffect(() => {
    if (list) {
      const newList = [{ id: 0, value: false, label: "선택" }, ...list];
      setCategoryOptions([...newList]);
    } else {
      setCategoryOptions([]);
    }
  }, [list]);

  const inputList: InputTypes[] = [
    {
      label: "isIncome",
      size: 6,
      options: [
        { value: false, label: "선택" },
        { value: "지출", label: "지출" },
        { value: "수입", label: "수입" },
      ],
      value: false,
    },
    {
      label: "date",
      size: 11,
      type: "date",
      value: "",
    },
    {
      label: "category",
      size: 9,
      options: categoryOptions,
      value: false,
    },
    {
      label: "payment",
      size: 7,
      options: [
        { value: false, label: "선택" },
        { value: "현금", label: "현금" },
        { value: "카드", label: "카드" },
        { value: "이체", label: "이체" },
      ],
      value: false,
    },
    {
      label: "account",
      size: 9,
      type: "text",
      value: "",
    },
    {
      label: "value",
      size: 8,
      type: "number",
      value: "",
    },
    {
      label: "memo",
      size: 14,
      type: "text",
      value: "",
    },
  ];
  return {
    inputList,
  };
}
