import React from 'react'
import { TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '15px 30px',
        background: 'linear-gradient(45deg, #333, #999)'
    }
})

function ButtonStyled() {
    const classes = useStyles()
    return <Button className={classes.root}>Test Styled Button</Button>
}

const MuiTextField = () => {
    return (
        <>
            <TextField
                variant='outlined'
                color='secondary'
                type='email'
                label='Email'
                placeholder='sample@sample.com'
            />
            <ButtonStyled />
        </>
    )
}

export default MuiTextField
