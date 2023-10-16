import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { KanbanCard } from '../pages/Dashboard';

interface CardProps {
    card: KanbanCard
};

const useStyles = makeStyles({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid transparent',
        height: '100px',
        padding: '0.5rem',
        margin: '0.75rem 0 0.75rem 0',
        backgroundColor: '#EADBC8',
        borderRadius: '0.75rem',
        overflowX: 'hidden',
        overflowY: 'auto',
        wordWrap: 'break-word',
        "&:hover": {
            borderColor: "#0F2C59",
            cursor: 'pointer'
        }
    }
});

const Card = ({ card }: CardProps) => {
    const { content } = card;
    const classes = useStyles();

    return (
        <Box className={classes.cardContainer}>
            <Typography variant="body2" gutterBottom>
                {content}
            </Typography>
        </Box>

    )
}

export default Card