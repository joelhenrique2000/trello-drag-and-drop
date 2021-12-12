import { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";
import { addList } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

export const App: FC = ({ children }) => {
  const { lists, dispatch } = useAppState()

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch(addList(text))}
      />
    </AppContainer>
  );
}

export default App;
