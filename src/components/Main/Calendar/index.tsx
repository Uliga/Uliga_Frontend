import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  Container,
  Income,
  Record,
  ColorWrapper,
  Wrapper,
  WriteButton,
} from "./index.styles";
import "react-calendar/dist/Calendar.css";
import useBook from "../../../hooks/book/useBook";
import getMoneyUnit from "../../../utils/money";
import {
  bottomSheetAtom,
  historyDayModalAtom,
} from "../../../stores/atoms/context";
import HistoryModal from "../HistoryModal";
import allModalAtom from "../../../stores/selectors/context";

export default function MonthCalendar() {
  const { bookId } = useParams();
  const { useLoadMonthItems } = useBook();
  const [curDate, onChangeCurDate] = useState(new Date());
  const [, setBottomSheetOpen] = useRecoilState(bottomSheetAtom);
  const [historyDayModalOpen, setHistoryDayModalOpen] =
    useRecoilState(historyDayModalAtom);
  const [, setAllModalOpen] = useRecoilState(allModalAtom);

  const { data, refetch } = useLoadMonthItems(
    Number(bookId),
    curDate.getFullYear(),
    curDate.getMonth() + 1,
  );

  const handleWriteButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined,
    date: { date: Date },
  ) => {
    if (event) event.stopPropagation();
    setBottomSheetOpen({
      day: new Date(date.date),
      open: true,
    });
  };

  useEffect(() => {
    refetch();
  }, [curDate.getMonth() + 1]);

  if (!data) return null;
  return (
    <Container data-cy="calendar-day-container">
      {historyDayModalOpen && <HistoryModal date={curDate} />}
      <Calendar
        value={curDate}
        onChange={(date: any) => {
          onChangeCurDate(date);
          setAllModalOpen(false);
          setHistoryDayModalOpen(true);
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
          return (
            <Wrapper
              buttonDisplay={
                new Date(date).getFullYear() === new Date().getFullYear() &&
                new Date(date).getMonth() === new Date().getMonth() &&
                new Date(date).getDate() === new Date().getDate()
              }
              data-cy={`calendar-day-${new Date(date).getDate()}`}
            >
              <WriteButton
                iconName="pencil"
                iconSize="1.3rem"
                onClick={event => handleWriteButtonClick(event, { date })}
                dataCy="write-day-button"
              />
              <div>
                {income && (
                  <div className="income">{getMoneyUnit(income.value)}</div>
                )}
                {record && (
                  <div className="record">{getMoneyUnit(record.value)}</div>
                )}
              </div>
            </Wrapper>
          );

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
