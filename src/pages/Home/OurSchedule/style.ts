import styled from "styled-components";

type SchedulesSliderProps = {
  activeControl: number;
};

export const Container = styled.section`
  padding: 80px 15px 100px 15px !important;
`;

export const SchedulesSlider = styled.div<SchedulesSliderProps>`
  overflow-x: hidden;
  padding: 10px 0;

  > div {
    display: flex;
    justify-content: space-between;
    transform: ${(p) => `translateX(-${p.activeControl * 100}%)`};

    transition: all ease-out 0.3s;
  }
`;

export const SchedulesControls = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 80px;

  button {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.gray3};
    margin: 0 10px;
    transition: all 0.4s;

    &.active {
      height: 14px;
      width: 14px;
      background-color: ${(p) => p.theme.colors.primary};
    }
  }
`;
