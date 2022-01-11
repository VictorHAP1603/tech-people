import styled from "styled-components";

type SchedulesSliderProps = {
  activeControl?: number;
};

export const Container = styled.section`
  padding: 80px 15px 100px 15px !important;
`;

export const SchedulesSlider = styled.div<SchedulesSliderProps>`

  > div {
    padding-bottom: 50px;
  }

 .swiper-pagination  {
   bottom: 0px;

   .swiper-pagination-bullet {
      height: 10px;
      width: 10px;
      transition: all .4s;
    }

   .swiper-pagination-bullet-active {
      height: 14px;
      width: 14px;
      background-color: ${(p) => p.theme.colors.primary};

   }
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
