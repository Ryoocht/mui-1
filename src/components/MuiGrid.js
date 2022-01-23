import React from 'react'
import { Container, Grid, Paper } from '@mui/material'

const MuiGrid = () => {
    return (
        <Container maxWidth='md'>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={3} sm={6}>
                    <Paper style={{height: 75, width: 50}}/>
                </Grid>
                <Grid item xs={3} sm={6}>
                    <Paper style={{height: 75, width: 50}}/>
                </Grid>
                <Grid item xs={3} sm={6}>
                    <Paper style={{height: 75, width: 50}}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MuiGrid
