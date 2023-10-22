import { Section } from "../../common/Section";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";

export const Concepts = ({ conceptsListState, conceptsList }) => {
  switch (conceptsListState) {
    case "success":
      return <Section sectionHeader={"Lista Zmian"} list={conceptsList} />;
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
  }
};
