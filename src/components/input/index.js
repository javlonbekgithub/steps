import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'


export const Input = ({...props}) => {

    const classes = useStyles()

    return (
        <TextField className = {classes.root} id="standard-basic" {...props}/>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1em',
        width: '100%'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}))