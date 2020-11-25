import React ,{ useState } from 'react'
import { Input } from '../../components/input'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import './index.css'
import { getStepContent, getSteps } from '../../helperFunctions'
import { validateTexts } from './constants'

export const Home = () => {

    const classes = useStyles()

    const [activeStep, setActiveStep] = useState(0)

    const steps = getSteps()

    const [name, setName] = useState('')

    const [action, setAction] = useState('')

    const [during, setDuring] = useState('')

    const [place, setPlace] = useState('')

    const [error, setError] = useState(false)

    const values = [name, action, during, place]

    const handleChangeInput = ({target}) => {
        if (target.value.length >= 4) {
            setError(false)
        }
        switch (activeStep) {
            case 0:
                setName(target.value)
                break
            case 1:
                setAction(target.value)
                break
            case 2:
                setDuring(target.value)
                break
            case 3:
                setPlace(target.value)
                break
            default:
                return 0
        }
    }

    const handleNext = () => {
        if (values[activeStep].length >= 4) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        } else {
            setError(true)
        }
    }
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    
    const handleReset = () => {
        setActiveStep(0)
        setName('')
        setPlace('')
        setDuring('')
        setAction('')
    }

    return (
        <div className = 'homeCont'>
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                        <Input
                            error = {error}
                            value = {values[index]}
                            onChange = {handleChangeInput}
                            label = {getStepContent(index)}
                            helperText = {error && validateTexts}
                        />
                        <div className={classes.actionsContainer}>
                            <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                            </div>
                        </div>
                        </StepContent>
                    </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>{`${name} ${action} ${during} ${place}`}</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                    </Paper>
                )}
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: (window.outerWidth > 1000) ? '50%' : '100%',
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



