import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Container, Income, Record, ColorWrapper } from "./index.styles";
import "react-calendar/dist/Calendar.css";
import useBook from "../../../hooks/useBook";
import getMoneyUnit from "../../../utils/money";
import { bottomSheetAtom } from "../../../stores/atoms/context";

export default function MonthCalendar() {
  const { bookId } = useParams();
  const { useLoadMonthItems } = useBook();
  const [curDate, onChangeCurDate] = useState(new Date());

  const [bottomSheetOpen, setBottomSheetOpen] = useRecoilState(bottomSheetAtom);

  const { data, refetch } = useLoadMonthItems(
    Number(bookId),
    curDate.getFullYear(),
    curDate.getMonth() + 1,
  );

  useEffect(() => {
    refetch();
  }, [curDate.getMonth() + 1]);

  if (!data) return null;

  return (
    <Container>
      <Calendar
        value={curDate}
        onChange={(date: any) => {
          onChangeCurDate(date);
          setBottomSheetOpen({
            ...bottomSheetOpen,
            day: date,
            open: true,
          });
        }}
        onActiveStartDateChange={({ activeStartDate }) => {
          onChangeCurDate(activeStartDate);
        }}
        formatDay={(locale, date) => new Date(date).getDate().toString()}
        showNeighboringMonth={false}
        /* eslint-disable-next-line react/no-unstable-nested-components */
        tileContent={({ date }) => {
          const income = data.incomes.find(x => {
            if (x.day === new Date(date).getDate()) return x.value;
            return null;
          });
          const record = data.records.find(x => {
            if (x.day === new Date(date).getDate()) return x.value;
            return null;
          });
          if (income || record) {
            return (
              <div>
                {income && (
                  <div className="income">{getMoneyUnit(income.value)}</div>
                )}
                {record && (
                  <div className="record">{getMoneyUnit(record.value)}</div>
                )}
              </div>
            );
          }
          return null;
        }}
      />
      <ColorWrapper>
        <div>
          <Income>●</Income> 수입
        </div>
        <div>
          <Record>●</Record> 지출
        </div>
      </ColorWrapper>
    </Container>
  );
}
