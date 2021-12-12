import { FC, PropsWithChildren } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = PropsWithChildren<{
    text: string
    id: string
}>

export const Column: FC<ColumnProps> = ({ text, id }) => {
    const { getTasksByListId, dispatch } = useAppState()

    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={text =>
                    dispatch(addTask(text, id))
                }
                dark
            />
        </ColumnContainer>
    );
}