import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Column.css';
import Card from './Card';
import { KanbanCard, KanbanCategory } from '../pages/Dashboard';
import { useState } from 'react';
import AddModal from './AddModal';
import EditModal from './EditModal';
import {v4 as uuidv4} from 'uuid';

interface ColumnProps {
    id: KanbanCategory,
    title: string,
    cards: Array<KanbanCard>,
    setCards: React.Dispatch<React.SetStateAction<KanbanCard[]>>
}

const useStyles = makeStyles({
    columnContainer: {
        width: '350px',
        height: '500px',
        backgroundColor: '#F8F0E5',
        margin: '1%',
        borderRadius: '0.375rem'
    },
    columnHeader: {
        backgroundColor: '#DAC0A3',
        height: '50px',
        borderRadius: '0.375rem 0.375rem 0 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginBottom: 0,
        color: '#0F2C59'        
    },
    contentContainer: {
        height: '80%',
        overflow: 'auto',
        padding: '0.5rem'
    },
    bottomContainer: {
        backgroundColor: '#EADBC8',
        height: '50px',
        borderRadius: '0 0 0.375rem 0.375rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        color: '#0F2C59',
        "&:hover": {
            color: "#ffff",
            cursor: 'pointer'
        }
    }
});

const Column = ({ id, title, cards, setCards }: ColumnProps) => {
    const classes = useStyles();
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [cardToEdit, setCardToEdit] = useState<KanbanCard>();

    const onAddCard = (text: string) => {
        cards.push({
            id: uuidv4(),
            content: text,
            category: id
        });
        setOpenAddModal(false);
    };

    const onEditCard = (text: string, category: string) => {
        setCards(
            cards.map(card => {
                if (card.id === cardToEdit?.id) {
                    return {
                        id: cardToEdit.id,
                        content: text,
                        category
                    } as KanbanCard
                };
                return card;
            })
        );
        setOpenEditModal(false);
    };

    return (
        <Box className={classes.columnContainer}>
            <Box className={classes.columnHeader}>
                <Typography variant="h5" gutterBottom className={classes.titleContainer}>
                    {title}
                </Typography>
            </Box>
            <Box className={classes.contentContainer}>
                {
                    cards
                        .filter(card => card.category === id)
                        .map(card => <div onClick={() => {
                            setCardToEdit(card);
                            setOpenEditModal(true);
                        }}>
                            <Card card={card} />
                        </div>)
                }
            </Box>
            <Box onClick={() => setOpenAddModal(true)} className={classes.bottomContainer} data-testId="bottomContainer">
                <Typography variant="h6" gutterBottom sx={{ marginBottom: 0 }}>
                    Agregar tarea
                </Typography>
                <AddCircleOutlineIcon />
            </Box>
            <AddModal
                open={openAddModal}
                onClose={() => setOpenAddModal(false)}
                onSubmit={onAddCard}
            />
            <EditModal
                open={openEditModal}
                onClose={() => setOpenEditModal(false)}
                onSubmit={onEditCard}
                content={cardToEdit?.content ?? ""}
                category={id}
            />
        </Box>
    )
}

export default Column;