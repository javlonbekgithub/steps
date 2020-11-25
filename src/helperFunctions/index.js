export const getSteps = () => {
    return ['who', 'what', 'when', 'where']
}

export const getStepContent = (step) => {
    switch (step) {
    case 0:
        return `Please enter your name`
    case 1:
        return 'Could you tell us what did you do nowadays ?'
    case 2:
        return `When did you do it ?`
    case 3:
        return 'Finally where did you do it'
    default:
        return 'Unknown step'
    }
}