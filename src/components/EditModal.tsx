import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { KanbanCategory } from '../pages/Dashboard';

interface EditModalProps {
    open: boolean,
    onClose: () => void,
    onSubmit: (text: string, category: string) => void,
    content: string,
    category: KanbanCategory
};

const useStyles = makeStyles({
    modalContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        borderRadius: '0.375rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const EditModal = ({ open, onClose, onSubmit, content, category }: EditModalProps) => {
    const classes = useStyles();
    const [text, setText] = useState<string>(content);
    const [selectedCategory, setSelectedCategory] = useState<KanbanCategory>(category);

    useEffect(() => {
        setText(content);
        setSelectedCategory(category)
    }, [content, category]);

    const handleOnClick = () => {
        onSubmit(text, selectedCategory);
        setText("");
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.modalContainer}>
                <Grid container alignItems="center" direction="column" spacing={4}>
                    <Grid item md={12} sx={{ width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Tarea"
                            variant="standard"
                            fullWidth
                            multiline
                            value={text}
                            onChange={(e: any) => setText(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Categoria</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                defaultValue={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value as KanbanCategory)}
                            >
                                <FormControlLabel value="ToDo" control={<Radio />} label="To Do's" />
                                <FormControlLabel value="Doing" control={<Radio />} label="Doing" />
                                <FormControlLabel value="Done" control={<Radio />} label="Done" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" onClick={handleOnClick} disabled={!text}>Actualizar</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>)
};

export default EditModal;