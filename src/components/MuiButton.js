import React from 'react';
import { ButtonGroup, Button } from '@mui/material'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import DeleteIcon from '@mui/icons-material/Delete'

const MuiButton = () => {
    return(
    <ButtonGroup variant='contained' color='primary'>
        <Button
        startIcon={<SaveAsIcon />}
        color='primary'
        >
        Save
        </Button>
        <Button
        startIcon={<DeleteIcon />}
        color='secondary'
        >
        Discard
        </Button>
    </ButtonGroup>
    )
}

export default MuiButton;
