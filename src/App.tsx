import { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./styles";

export const App: FC = ({ children }) => {
  return (
    <AppContainer>
      <AddNewItem 
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
