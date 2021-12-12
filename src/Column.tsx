import { FC, PropsWithChildren, useRef } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useItemDrag } from './utils/useItemDrag'

type ColumnProps = PropsWithChildren<{
    text: string
    id: string
}>

export const Column: FC<ColumnProps> = ({ text, id }) => {
    const { draggedItem, getTasksByListId, dispatch } = useAppState()
    const tasks = getTasksByListId(id)
    const ref = useRef<HTMLDivElement>(null)

    const { drag } = useItemDrag({ type: "COLUMN", id, text })

    drag(ref)

    return (
        <ColumnContainer ref={ref}>
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