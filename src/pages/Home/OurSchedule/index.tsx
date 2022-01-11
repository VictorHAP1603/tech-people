import React, { useEffect, useState } from "react";

import { Container, SchedulesControls, SchedulesSlider } from "./style";
import { ScheduleItem, ScheduleItemProps } from "../../../components/ScheduleItem";
import { useMedia } from "../../../hooks/useMedia";

// Components
import { IntroductionSection } from "../../../components/IntroductionSection";
import { GET_SCHEDULES } from "../../../services/api";

export const OurSchedule = () => {
  const [schedules, setSchedules] = useState<ScheduleItemProps[]>([])
  const [controlsSlider, setControlsSlider] = useState<number[]>([])
  const [activeControlSlider, setActiveControlSlider] = useState(0)
  const [slidesPerPage, setSlidesPerPage] = useState(2)

  const match = useMedia('(max-width: 800px)')



  useEffect(() => {
    async function requestSchedules() {
      const json = await GET_SCHEDULES();
      setSchedules(json)

      formatControlsSlider(Math.ceil(json.length / slidesPerPage))
    }

    function formatControlsSlider(num: number) {
      for (let i = 1; i <= num; i++) {
        setControlsSlider(prevArray => [...prevArray, i])
      }
    }

    requestSchedules()
  }, [])

  const handleChangeSlide = (index: number) => {
    setActiveControlSlider(index)
  }

  return <Container id="schedules" className="container">
    <IntroductionSection title="Anota ai na nossa agenda">
      Temos um monte de eventos que estamos criando no nosso servidor. Fique de olho que sempre tem coisa boa!
    </IntroductionSection>

    <SchedulesSlider activeControl={activeControlSlider}>
      <div>
        {schedules && schedules.map((data) => (
          <ScheduleItem data={data} key={data.id} />
        ))}
      </div>
    </SchedulesSlider>

    <SchedulesControls>
      {!match ? (
        controlsSlider.map((_, i) => (
          <button onClick={() => handleChangeSlide(i)} className={i === activeControlSlider ? "active" : ""} key={i}></button>
        ))
      ) : (
        schedules.map((_, i) => (
          <button onClick={() => handleChangeSlide(i)} className={i === activeControlSlider ? "active" : ""} key={i}></button>
        ))
      )}
    </SchedulesControls>

  </Container>;
};
