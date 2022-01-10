import React, { useEffect, useState } from "react";

import { Container, NewsContainer } from "./style";

// Components
import { IntroductionSection } from "../../../components/IntroductionSection";
import { GET_NEWS } from "../../../services/api";
import { NewsItem } from "../../../components/NewsItem";

export type GetNewsProps = {
  src: string;
  title: string;
  createdAt: string;
};

export const News = () => {
  const [news, setNews] = useState<GetNewsProps[]>([]);

  useEffect(() => {
    async function requestNews() {
      const json = await GET_NEWS();
      setNews(json);
    }

    requestNews();
  }, []);

  return (
    <Container id="news">
      <div className="container">
        <IntroductionSection title="Notícias">
          Listamos abaixo algumas notícias de tecnologia que nos motivam a estar
          ativos diariamente neste nosso projeto.
        </IntroductionSection>

        <NewsContainer>
          {news.map((data, index) => (
            <NewsItem key={index} data={data} />
          ))}
        </NewsContainer>
      </div>
    </Container>
  );
};
