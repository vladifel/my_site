import React, { Fragment } from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { GoPrimitiveDot } from 'react-icons/go';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const styles = () =>
    createStyles({
        aboutMeTextContainer: {
            margin: '2rem 1.5rem 0 1.5rem'
        },
        button: {
            width: '8rem',
            height: '3rem',
            border: '0.4rem solid rgba(3, 169, 244, 0.85)',
            borderRadius: '0.5rem',
            "&:active": {
                border: '0.15rem solid rgba(3, 169, 244, 0.85)',
            },
            "&:hover": {
                backgroundColor: 'rgba(3, 169, 244, 0.15)',
            }
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '1rem'
        },
        buttonText: {
            color: 'rgba(3, 169, 244, 1)'
        },
        headerFirstText: {
            fontSize: '2rem',
            fontWeight: 900
        },
        headerSecondText: {
            fontSize: '1.5rem',
            fontWeight: 700
        },
        skill: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 0.5rem'
        },
        skillsContainer: {
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column'
        },
        skillsHeader: {

        },
        skillsBody: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        },

        contactMeBody: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
            marginTop: '10%'
        },
        contactMeHeaderText: {
            fontSize: '1.5rem',
            fontWeight: 900
        },
        contactMeInner: {
            height: '92%',
            width: '92%',
            minHeight: '321px',
            backgroundColor: 'rgba(255,255,255,1)',
            borderRadius: '1rem',
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '2rem 2rem 1rem 2rem',
            overflow: 'auto',
        }
    });

interface IAboutMeProps {

}

export type IAboutMeCombinedProps = IAboutMeProps & WithStyles<typeof styles>;


const skill = (skillName: string, props: IAboutMeCombinedProps) => {
    return (
        <Grid item className={props.classes.skill}>
            <GoPrimitiveDot />
            <Typography>
                {skillName}
            </Typography>
        </Grid>
    )
}

const cvButtonComponent = (props: IAboutMeCombinedProps) => {
    return (
        <Button
            id={'cv_button'}
            className={props.classes.button}
            disableFocusRipple
            disableRipple
        >
            <Link
                underline='none'
                href={'https://drive.google.com/uc?export=download&id=1A0H6Yn4acPzU6ijy4ZbuqGdEY9382uCS'}
            >
                <Typography
                    className={props.classes.buttonText}
                >
                    My CV
            </Typography>
            </Link>
        </Button>
    )
}
const AboutMe: React.FunctionComponent<IAboutMeCombinedProps> = (props: IAboutMeCombinedProps) => {

    return (
        <Fragment>
            <Grid container className={props.classes.contactMeInner}>
                <Grid item>
                    <Typography
                        className={props.classes.headerFirstText}
                    >
                        Vladi Feldman
                    </Typography>
                    <Typography
                        className={props.classes.headerSecondText}
                    >
                        Front-End Developer
                    </Typography>
                </Grid>
                <Grid item className={props.classes.aboutMeTextContainer}>
                    <Typography>
                        Meticulous and highly motivated front-end developer with 2+ years of experience in building web apps. Proficient with JavaScript, Typescript, React, Redux, CSS, HTML.
                        Problem-solving oriented and highly determined. Loves the challenge and exploring new ventures.
                        Quick learner and great team player, with high attention to details and passion for UX/UI, looking to embark on a new journey.
                    </Typography>
                </Grid>
                <Grid container className={props.classes.skillsContainer}>
                    <Grid item className={props.classes.skillsHeader}>
                        <Typography
                            className={props.classes.headerSecondText}
                        >
                            Skills
                    </Typography>
                    </Grid>
                    <Grid item className={props.classes.skillsBody}>
                        {skill('JavaScript', props)}
                        {skill('TypeScript', props)}
                        {skill('React', props)}
                        {skill('Redux', props)}
                        {skill('HTML', props)}
                        {skill('CSS', props)}
                        {skill('jQuery', props)}
                        {skill('Jest', props)}
                        {skill('Enzyme', props)}
                        {skill('UX/UI', props)}
                        {skill('Material-UI', props)}
                        {skill('E2E Automation', props)}
                        {skill('Agile', props)}
                        {skill('SCRUM', props)}
                        {skill('Perforce', props)}
                        {skill('GIT', props)}
                        {skill('JIRA', props)}
                    </Grid>
                </Grid>
                <Grid item className={props.classes.buttonContainer}>
                    {cvButtonComponent(props)}
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default withStyles(styles)(AboutMe);
