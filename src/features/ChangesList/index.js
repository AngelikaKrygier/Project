import { Loading } from "../../common/Loading";
import { Section } from "../../common/Section";
import { Error } from "../../common/Error";

export const Changeslist = ({ changesListState, changesList }) => {
  switch (changesListState) {
    case "success":
      return <Section sectionHeader={"Lista Zmian"} list={changesList} />;
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
  }
};
