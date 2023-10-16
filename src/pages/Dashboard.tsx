import { Grid } from '@mui/material'
import Column from '../components/Column'
import { useState } from 'react';

export interface KanbanCard {
    id: string,
    content: string,
    category: KanbanCategory
};

export type KanbanCategory = "ToDo" | "Doing" | "Done";

type Category = {
    id: KanbanCategory,
    title: string
};

const categories: Array<Category> = [{
    id: "ToDo",
    title: "To Do's"
}, {
    id: "Doing",
    title: "Doing"
}, {
    id: "Done",
    title: "Done"
}];

const Dashboard = () => {

    const [cards, setCards] = useState<Array<KanbanCard>>([]);

    return (
        <Grid container direction="row" spacing={8} justifyContent="center" marginTop="50px">
            {
                categories.map((category, idx) => <Grid key={idx} item>
                    <Column
                        id={category.id}
                        title={category.title}
                        cards={cards}
                        setCards={setCards}
                    />
                </Grid>
                )
            }
        </Grid>
    )
};

export default Dashboard;