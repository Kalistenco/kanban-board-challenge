import { Box, Button, Grid, Modal, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

interface AddModalProps {
    open: boolean,
    onClose: () => void,
    onSubmit: (text: string) => void,
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

const AddModal = ({ open, onClose, onSubmit }: AddModalProps) => {
    const classes = useStyles();
    const [text, setText] = useState<string>("");

    const handleOnClick = () => {
        onSubmit(text);
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
                    <Grid item sx={{ width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Nueva tarea"
                            variant="standard"
                            fullWidth
                            multiline
                            value={text}
                            onChange={(e: any) => setText(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={handleOnClick} disabled={!text} data-testid="addButton">Agregar</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>)
};

export default AddModal;