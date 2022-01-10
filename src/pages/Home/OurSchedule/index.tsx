import React, { useEffect, useState } from "react";

import { Container, SchedulesControls, SchedulesSlider } from "./style";
import { ScheduleItem, ScheduleItemProps } from "../../../components/ScheduleItem";

// Components
import { IntroductionSection } from "../../../components/IntroductionSection";
import { GET_SCHEDULES } from "../../../services/api";

export const OurSchedule = () => {
  const [schedules, setSchedules] = useState<ScheduleItemProps[]>([])
  const [controlsSlider, setControlsSlider] = useState<number[]>([])
  const [activeControlSlider, setActiveControlSlider] = useState(0)

  useEffect(() => {
    async function requestSchedules() {
      const json = await GET_SCHEDULES();
      setSchedules(json)

      formatControlsSlider(Math.ceil(json.length / 2))
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
      {controlsSlider.map((_, i) => (
        <button onClick={() => handleChangeSlide(i)} className={i === activeControlSlider ? "active" : ""} key={i}></button>
      ))}
    </SchedulesControls>

  </Container>;
};
