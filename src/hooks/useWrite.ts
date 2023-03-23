import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { uploadBook } from "../api/book";
import toastMsg from "../components/Toast";
import PATH from "../constants/path";
import useBook from "./useBook";

export default function useWrite() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const inputMenu: string[] = [
    "분류",
    "날짜",
    "카테고리",
    "결제수단",
    "거래처",
    "금액",
    "메모",
  ];
  type InputTypes = {
    label: string;
    options?: object[];
    value?: boolean | number | string;
    size?: number;
    type?: string;
  };

  const { useCategoryList } = useBook();
  const list = useCategoryList(bookId ? +bookId : 0);

  const INPUT_SIZE = 11;
  const inputForm: InputTypes[] = [
    {
      label: "isIncome",
      options: [
        { value: "", label: "선택" },
        { value: "지출", label: "지출" },
        { value: "수입", label: "수입" },
      ],
      value: false,
    },
    {
      label: "date",
      size: INPUT_SIZE,
      type: "date",
      value: "",
    },
    {
      label: "category",
      options: list,
      value: undefined,
    },
    {
      label: "payment",
      options: [
        { value: undefined, label: "선택" },
        { value: "현금", label: "현금" },
        { value: "카드", label: "카드" },
        { value: "이체", label: "이체" },
      ],
      value: undefined,
    },
    {
      label: "account",
      size: INPUT_SIZE,
      type: "text",
      value: "",
    },
    {
      label: "value",
      size: INPUT_SIZE,
      type: "number",
      value: "",
    },
    {
      label: "memo",
      size: 19,
      type: "text",
      value: "",
    },
  ];

  const [inputList, setInputList] = useState([inputForm]);

  useEffect(() => {
    setInputList([inputForm]);
  }, [list]);

  const createRequest: { [label: string]: any }[] = [];
  type FormProps = {
    [label: string]: any;
  };
  const UploadFull = async () => {
    try {
      await uploadBook({
        id: Number(bookId),
        createRequest,
      });
      toastMsg("작성하신 가계부 내역이 등록되었습니다.");
      navigate(`${PATH.MAIN}/${bookId}`);
      console.log({
        id: Number(bookId),
        createRequest,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitForm = () => {
    inputList.map(inputs => {
      const form: FormProps = {
        isIncome: undefined,
        account: "",
        category: "",
        date: "",
        memo: "",
        payment: "",
        value: 0,
        sharedAccountBook: [],
      };
      inputs.map(input => {
        const { label } = input;
        switch (label) {
          case "value":
            form[label] = Number(input.value);
            break;
          case "isIncome":
            if (input.value === "지출") {
              form[label] = false;
            }
            if (input.value === "수입") {
              form[label] = true;
            }
            break;
          default:
            form[label] = input.value;
            break;
        }
        return form[label];
      });
      const requiredFields = ["account", "category", "date", "payment"];
      if (
        requiredFields.every(
          field => form[field] !== "" && form[field] !== undefined,
        )
      ) {
        createRequest.push(form);
      }
      return null;
    });
  };
  return {
    inputMenu,
    inputList,
    setInputList,
    inputForm,
    onSubmitForm,
    UploadFull,
  };
}
