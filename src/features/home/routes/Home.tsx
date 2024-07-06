import { useContext, Suspense, lazy } from "react";
import { Box } from "@mui/material";

import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { LatestArticles } from "../components/LatestArticles/LatestArticles";
// import { DisplayAd } from "../../../components/AdSense/DisplayAd";
import { ContentLayout, MainLayout } from "../../global";
import {
  ArticleContextInterface,
  ArticleContext,
} from "../../../context/ArticleCtx";
import CategoryList from "../components/Categories/CategoryList";
import { Card } from "../types";
import { generateRandomIndicies } from "../../../utils/randomIndices";

const GreenTechList = lazy(
  () => import("../components/GreenTech/GreenTechList")
);
const ClimateChangeList = lazy(
  () => import("../components/ClimateChange/ClimateChangeList")
);

export const Home: React.FC = () => {
  const { data, dataIsLoading, dataIsError } =
    useContext<ArticleContextInterface>(ArticleContext);

  if (dataIsError) {
    return (
      <Box
        display={"flex"}
        height={"100vh"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <h1>The site is temporarily down for maintenance</h1>
        <h2>Sorry for the inconvenience</h2>
      </Box>
    );
  }

  const randomLatestNumbers = generateRandomIndicies(6, data?.length);
  const randomLatestItems: any = randomLatestNumbers?.map(
    (index: any) => data && data[index]
  );

  const techData = data?.filter(
    (item: Card) => item.Category === "Green Technology"
  );

  const climateData = data?.filter(
    (item: Card) => item.Category === "Climate Change"
  );

  return (
    <MainLayout>
      <ContentLayout
        title={"Home Page"}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        {/* <DisplayAd /> */}
        <PageTitle title={"Latest Articles"} />
        <LatestArticles
          dataIsLoading={dataIsLoading}
          data={randomLatestItems}
        />
        <Suspense>
          <CategoryList
            dataIsLoading={dataIsLoading}
            listTitle={"Categories"}
          />
        </Suspense>
        <Suspense>
          <GreenTechList
            dataIsLoading={dataIsLoading}
            listTitle={"Green Technology"}
            data={techData}
          />
        </Suspense>
        <Suspense>
          <ClimateChangeList
            dataIsLoading={dataIsLoading}
            listTitle={"Climate Change"}
            data={climateData}
          />
        </Suspense>
      </ContentLayout>
    </MainLayout>
  );
};
