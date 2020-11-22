import React from "react";
import classNames from "classnames";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Button from '@material-ui/core/Button';
import { GrGithub } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


const styles = () =>
    createStyles({
        avatar: {
            width: '10rem',
            height: '10rem',
        },
        avatarContainer: {
            marginTop: '2rem'
        },
        headTextContainer: {
            marginTop: '2rem',
            textAlign: 'center'
        },
        headTextColor: {
            color: 'white'
        },
        headTextName: {
            fontSize: '1.4rem',
            fontWeight: 1000
        },
        headTextProf: {
            fontSize: '1.1rem',
        },
        leftPart: {
            width: '20rem',
            height: 'inherit',
            backgroundColor: '#03A9F4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        linksContainer: {

        },
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },

    });

interface ILandingPageProps {

}

export type ILandingPageCombinedProps = ILandingPageProps & WithStyles<typeof styles>;

const LandingPage: React.FunctionComponent<ILandingPageCombinedProps> = (props: ILandingPageCombinedProps) => {

    return (
        <Grid className={props.classes.root}>
            <Grid container className={props.classes.leftPart}>
                <Grid item className={props.classes.avatarContainer}>
                    <Avatar
                        className={props.classes.avatar}
                        alt="Vladi Feldman"
                        src="/static/images/avatar/1.jpg"
                    />
                </Grid>
                <Grid item className={props.classes.headTextContainer}>
                    <Typography
                        className={classNames(props.classes.headTextName, props.classes.headTextColor)}
                    >
                        Vladi Feldman
                    </Typography>
                    <Typography
                        className={classNames(props.classes.headTextProf, props.classes.headTextColor)}
                    >
                        Front-End Developer
                    </Typography>
                </Grid>
                <Grid item>
                    <Button>
                        Portfolio
                    </Button>
                    <Button>
                        My CV
                    </Button>
                    <Button>
                        Contact Me
                    </Button>
                </Grid>
                <Grid item>
                    <IconButton>
                        <GrGithub />
                    </IconButton>
                    <IconButton>
                        <FaLinkedin />
                    </IconButton>
                    <IconButton>
                        <FaFacebookSquare />
                    </IconButton>
                    <IconButton>
                        <HiMail />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(LandingPage);
