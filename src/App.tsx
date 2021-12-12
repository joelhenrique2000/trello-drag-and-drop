import { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

export const App: FC = ({ children }) => {
  const { lists } = useAppState()

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
