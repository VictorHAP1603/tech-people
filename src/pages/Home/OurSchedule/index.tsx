import { useEffect, useState } from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, SchedulesSlider } from "./style";
import { ScheduleItem, ScheduleItemProps } from "../../../components/ScheduleItem";
import { useMedia } from "../../../hooks/useMedia";

// Components
import { IntroductionSection } from "../../../components/IntroductionSection";
import { GET_SCHEDULES } from "../../../services/api";

export const OurSchedule = () => {
  const [schedules, setSchedules] = useState<ScheduleItemProps[]>([])

  const match = useMedia('(max-width: 800px)')

  useEffect(() => {
    async function requestSchedules() {
      const json = await GET_SCHEDULES();
      setSchedules(json)
    }

    requestSchedules()
  }, [])

  return <Container id="schedules" className="container">
    <IntroductionSection title="Anota ai na nossa agenda">
      Temos um monte de eventos que estamos criando no nosso servidor. Fique de olho que sempre tem coisa boa!
    </IntroductionSection>

    <SchedulesSlider>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={match ? 1 : 2}
        slidesPerGroup={match ? 1 : 2}
        pagination={{ clickable: true }}
      >
        {schedules && schedules.map((data) => (
          <SwiperSlide key={data.id} >
            <ScheduleItem data={data} />
          </SwiperSlide>
        ))}

      </Swiper>

    </SchedulesSlider>


  </Container>;
};
