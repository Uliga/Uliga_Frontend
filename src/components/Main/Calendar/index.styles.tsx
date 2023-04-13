import styled from "styled-components";
import COLORS from "../../../constants/color";

export const ColorWrapper = styled.div`
  position: absolute;
  color: ${COLORS.GREY[500]};
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  top: 2.4rem;
  left: 13rem;
  z-index: 100;
`;
export const Income = styled.span`
  color: ${COLORS.RED.LIGHT};
  left: 15rem;
  top: 2.5rem;
  padding-right: 0.3rem;
`;

export const Record = styled.span`
  color: ${COLORS.GREEN.DARK};
  font-size: 1.2rem;
  padding-right: 0.3rem;
`;
export const Container = styled.div`
  width: 90rem;
  background: white;
  position: relative;
  height: 39rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .react-calendar {
    padding: 0 1.3rem;
    width: 88rem;
    height: 100%;
    border: none;
    position: relative;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-x: hidden;
  }

  .react-calendar__navigation {
    display: flex;
    align-items: center;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background-color: white;
    width: 87rem;
    height: 4rem;
    z-index: 1;
  }

  .react-calendar__navigation button {
    text-align: center;
    top: 1rem;
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__drillUp,
  .react-calendar__navigation__drillDown {
    display: none;
  }
  .react-calendar__navigation__prev-button {
    position: absolute;
    right: 6rem;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    height: 3.4rem;
    background: #f0f2f4;

    &::before {
      display: block;
      width: 0.9rem;
      height: 0.9rem;
      border-top: 2px solid ${COLORS.GREY[400]};
      border-right: 2px solid ${COLORS.GREY[400]};
      transform: rotate(-135deg);
      content: "";
    }
  }

  .react-calendar__navigation__label {
    flex-grow: 0.9 !important;
  }

  .react-calendar__navigation__next-button {
    position: absolute;
    top: 0;
    right: 1rem;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    width: 2rem;
    height: 3.4rem;
    background: #f0f2f4;
    &::before {
      display: block;
      width: 0.9rem;
      height: 0.9rem;
      border-top: 2px solid ${COLORS.GREY[400]};
      border-right: 2px solid ${COLORS.GREY[400]};
      transform: rotate(45deg);
      content: "";
    }
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__tile--now {
    background: white;
    color: ${COLORS.BLUE};
    font-weight: 700;
  }
  .react-calendar__tile--now:enabled:hover {
    background: ${COLORS.MEDIUM_BLUE};
    color: ${COLORS.WHITE};
  }

  .react-calendar__navigation__label > span {
    font-size: 1.7rem;
    font-weight: 700;
    left: 0;
    position: absolute;
    pointer-events: none;
  }
  .react-calendar__month-view__weekdays {
    text-align: start;
    text-decoration: none;
    abbr {
      /*월,화,수... 글자 부분*/
      color: ${COLORS.GREY[400]};
      font-size: 1.3rem;
    }
  }
  .react-calendar__tile {
    font-size: 1.3rem;
    text-align: start;
    display: flex;
    align-items: start;
    border-bottom: 0.1rem solid ${COLORS.GREY[200]};
    height: 7.5rem;
    position: relative;
    z-index: 0;
    .income {
      position: absolute;
      bottom: 0.7rem;
      left: 0.7rem;
      font-size: 1.1rem;
      color: ${COLORS.RED.LIGHT};
    }
    .record {
      position: absolute;
      bottom: 2.1rem;
      left: 0.7rem;
      font-size: 1.1rem;
      color: ${COLORS.GREEN.DARK};
    }
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${COLORS.GREY[100]};
    color: BLACK;
  }
  .react-calendar__tile--active {
    background-color: ${COLORS.GREY[100]};
    color: BLACK;
  }
`;
