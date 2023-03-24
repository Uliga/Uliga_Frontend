import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBook from "./useBook";
import { IScheduleDetail } from "../../interfaces/schedule";

export default function useEditShared() {
  const { bookId } = useParams();
  const { useScheduleDetail } = useBook();
  const data = useScheduleDetail(bookId ? +bookId : 0);

  const [curId, setCurId] = useState<number | undefined>(undefined);
  const [curSchedule, setCurSchedule] = useState<IScheduleDetail>(
    data?.schedules[0],
  );

  useEffect(() => {
    const selectedData = data?.schedules?.filter(
      (ele: IScheduleDetail) => ele.info.id === curId,
    );
    setCurSchedule(selectedData);
  }, [curId]);

  return { data, setCurId, curSchedule };
}
