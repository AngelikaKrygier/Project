import { Banner } from "../common/Banner/index";
import { Loading } from "../common/Loading";
import { Changeslist } from "../features/ChangesList";
import { Concepts } from "../features/Concepts";
import { CurrentFeatures } from "../features/CurrentFeatures";
import { Container } from "../common/Container/styled";

export const App = () => {
  const currentFeaturesList = [
    {
      header: "Dobór okuć do pływającej klamki",
      content:
        "Nowa funkcjonalność programu wykorzystując informacje o wysokości na jakiej ma się znajdować klamka, automatycznie dopasuje odpowiednie okucie.To rozwiązanie automatyzuje dobór, tworzenie zamówienia komponentów oraz przygotowywanie dokumentacji produkcyjnej co znacząco wpływa na oszczędność czasu oraz eliminację błędów.",
    },
    {
      header: "Dobór okuć do pływającej klamki",
      content:
        "Nowa funkcjonalność programu wykorzystując informacje o wysokości na jakiej ma się znajdować klamka, automatycznie dopasuje odpowiednie okucie.To rozwiązanie automatyzuje dobór, tworzenie zamówienia komponentów oraz przygotowywanie dokumentacji produkcyjnej co znacząco wpływa na oszczędność czasu oraz eliminację błędów.",
    },
  ];

  const changesList = [
    {
      header: "Dobór okuć do pływającej klamki",
      content:
        "Nowa funkcjonalność programu wykorzystując informacje o wysokości na jakiej ma się znajdować klamka, automatycznie dopasuje odpowiednie okucie.To rozwiązanie automatyzuje dobór, tworzenie zamówienia komponentów oraz przygotowywanie dokumentacji produkcyjnej co znacząco wpływa na oszczędność czasu oraz eliminację błędów.",
    },
    {
      header: "Dobór okuć do pływającej klamki",
      content:
        "Nowa funkcjonalność programu wykorzystując informacje o wysokości na jakiej ma się znajdować klamka, automatycznie dopasuje odpowiednie okucie.To rozwiązanie automatyzuje dobór, tworzenie zamówienia komponentów oraz przygotowywanie dokumentacji produkcyjnej co znacząco wpływa na oszczędność czasu oraz eliminację błędów.",
    },
  ];

  const conceptsList = [
    {
      header: "Dobór okuć do pływającej klamki",
      content:
        "Nowa funkcjonalność programu wykorzystując informacje o wysokości na jakiej ma się znajdować klamka, automatycznie dopasuje odpowiednie okucie.To rozwiązanie automatyzuje dobór, tworzenie zamówienia komponentów oraz przygotowywanie dokumentacji produkcyjnej co znacząco wpływa na oszczędność czasu oraz eliminację błędów.",
    },
    {
      header: "Dobór okuć do pływającej klamki",
      content:
        "Nowa funkcjonalność programu wykorzystując informacje o wysokości na jakiej ma się znajdować klamka, automatycznie dopasuje odpowiednie okucie.To rozwiązanie automatyzuje dobór, tworzenie zamówienia komponentów oraz przygotowywanie dokumentacji produkcyjnej co znacząco wpływa na oszczędność czasu oraz eliminację błędów.",
    },
  ];

  return (
    <>
      <Banner />
      <Container>
        <Changeslist changesList={changesList} changesListState={"success"} />
        <CurrentFeatures
          currentFeaturesList={currentFeaturesList}
          currentFeaturesListState={"success"}
        />
        <Concepts conceptsList={conceptsList} conceptsListState={"success"} />
        <Loading />
      </Container>
    </>
  );
};
