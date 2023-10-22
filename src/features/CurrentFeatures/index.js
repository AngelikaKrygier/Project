import { Section } from "../../common/Section";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";

export const CurrentFeatures = ({
  currentFeaturesListState,
  currentFeaturesList,
}) => {
  switch (currentFeaturesListState) {
    case "success":
      return (
        <Section sectionHeader={"Lista Zmian"} list={currentFeaturesList} />
      );
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
  }
};
