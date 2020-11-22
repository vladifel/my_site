import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Button from '@material-ui/core/Button';
import { GrGithub } from 'react-icons/gr';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { TiChevronRightOutline } from 'react-icons/ti';
import im1 from '../assets/im2.jpg'
import imdb from '../assets/imdb.jpg'
import rpsls from '../assets/rpsls.jpg'
import { JsxElement } from "typescript";
import PortfolioCard from "./PortfolioCard";

const styles = () =>
    createStyles({
        avatar: {
            width: '10rem',
            height: '10rem',
        },
        avatarContainer: {
            marginTop: '2rem'
        },
        buttonsContainer: {
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0
        },
        headTextContainer: {
            marginTop: '2rem',
            textAlign: 'center'
        },
        headTextColor: {
            color: '#ffff'
        },
        headTextName: {
            fontSize: '1.4rem',
            fontWeight: 1000
        },
        headTextProf: {
            fontSize: '1.1rem',
        },
        iconButton: {
            "&:active, &:hover, &.Mui-focusVisible": {
                backgroundColor: 'transparent',
                fontSize: '1.7rem',
            }
        },
        iconButtonCenter: {
            "&:active, &:hover, &.Mui-focusVisible": {
                padding: '0.55rem 0.65rem'
            }
        },
        iconButtonLeft: {
            "&:active, &:hover, &.Mui-focusVisible": {
                padding: '0.55rem 0.55rem 0.55rem 0.75rem'
            }
        },
        iconButtonRight: {
            "&:active, &:hover, &.Mui-focusVisible": {
                padding: '0.55rem 0.75rem 0.55rem 0.55rem'
            }
        },
        leftPart: {
            width: '20rem',
            height: '100%',
            backgroundColor: '#03A9F4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        linkButton: {
            textAlign: 'left',
            marginLeft: '2rem',
            "&:active, &:hover, &.Mui-focusVisible": {
                backgroundColor: 'transparent',
            }
        },
        linkButtonHover: {
            fontWeight: 700
        },
        linkButtonChevron: {
            fontSize: '1.2rem',
            marginLeft: '0.3rem'
        },
        linksContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '3rem'
        },
        popOutContainer: {
            backgroundColor: 'red',
            hight: '50rem',
            width: '50rem',
            position: 'absolute'
        },
        rightPanel: {
            height: '100%',
            width: '40rem'
        },
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row'
        },

    });


interface IButtonActions {
    buttonHover: string;
    handleHoverIn: (buttonType: string) => void;
    handleHoverOut: () => void;
    handleButtonClick: (event: any) => void;
}
interface ILandingPageProps {

}

export type ILandingPageCombinedProps = ILandingPageProps & WithStyles<typeof styles>;

const linkButtonComponent = (buttonText: string, buttonActions: IButtonActions, props: ILandingPageCombinedProps) => {
    const hoverOn = buttonText === buttonActions.buttonHover;
    return (
        <Button
            id={`${buttonText}_button`}
            className={props.classes.linkButton}
            onMouseEnter={() => buttonActions.handleHoverIn(buttonText)}
            onMouseLeave={() => buttonActions.handleHoverOut()}
            onClick={buttonActions.handleButtonClick}
            disableFocusRipple
            disableRipple
        >
            <Typography
                className={classNames(props.classes.headTextColor, hoverOn && props.classes.linkButtonHover)}
            >
                {buttonText}
            </Typography>
            {hoverOn
                ? <TiChevronRightOutline
                    className={classNames(props.classes.headTextColor, props.classes.linkButtonChevron)}
                />
                : undefined}
        </Button>
    )
}

const iconButtonComponent = (buttonType: string, linkText: string, icon: JSX.Element, props: ILandingPageCombinedProps) => {
    return (
        <IconButton
            id={`${linkText}_icon`}
            className={classNames(
                props.classes.iconButton,
                buttonType === 'center'
                    ? props.classes.iconButtonCenter
                    : buttonType === 'left'
                        ? props.classes.iconButtonLeft
                        : props.classes.iconButtonRight
            )}
            disableFocusRipple
            disableRipple
        >
            <Link
                href={linkText}
                target="_blank"
            >
                {icon}
            </Link>
        </IconButton>
    )
}

const portfolioComponent = (props: ILandingPageCombinedProps) => {
    return (
        <Grid className={props.classes.popOutContainer}>
            <PortfolioCard
                siteImage={rpsls}
                siteLink={'https://rockpaperscissors-vladif.web.app/'}
                siteName={'RPSLS'}
                siteDescription={"Rock-Paper-Scissors-Lizard-Spock. Sheldon's favorite game"}
            />
            <PortfolioCard
                siteImage={imdb}
                siteLink={'https://imdb-stats-vladif.web.app/'}
                siteName={"Film Directors' ratings"}
                siteDescription={"Wanna know who's the best film director of all time?"}
            />
        </Grid>
    )
}

const LandingPage: React.FunctionComponent<ILandingPageCombinedProps> = (props: ILandingPageCombinedProps) => {
    const [buttonHover, setButtonHover] = useState<string>('');
    const [popOutOpen, setPopOutOpen] = useState<string>('');

    const handleHoverIn = (buttonType: string) => {
        setButtonHover(buttonType);
    }

    const handleHoverOut = () => {
        setButtonHover('');
    }

    const handleButtonClick = (event: any) => {
        setPopOutOpen(event.target.textContent);
    }

    const buttonActions: IButtonActions = {
        buttonHover: buttonHover,
        handleHoverIn: handleHoverIn,
        handleHoverOut: handleHoverOut,
        handleButtonClick: handleButtonClick
    }

    return (
        <Grid className={props.classes.root}>
            <Grid container className={props.classes.leftPart}>
                <Grid item className={props.classes.avatarContainer}>
                    <Avatar
                        className={props.classes.avatar}
                        alt="Vladi Feldman"
                        src={im1}
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
                <Grid container className={props.classes.linksContainer}>
                    {linkButtonComponent('Portfolio', buttonActions, props)}
                    {linkButtonComponent('My CV', buttonActions, props)}
                    {linkButtonComponent('Contact Me', buttonActions, props)}
                </Grid>
                <Grid container className={props.classes.buttonsContainer}>
                    {iconButtonComponent('left', 'https://github.com/vladifel', <GrGithub className={props.classes.headTextColor} />, props)}
                    {iconButtonComponent('center', 'https://www.linkedin.com/in/vladif/', <FaLinkedin className={props.classes.headTextColor} />, props)}
                    {iconButtonComponent('center', 'https://www.facebook.com/vladi.feldman/', <FaFacebookSquare className={props.classes.headTextColor} />, props)}
                    {iconButtonComponent('right', 'mailto:vladi.fel@gmail.com', <HiMail className={props.classes.headTextColor} />, props)}
                </Grid>
            </Grid>
            <Grid container className={props.classes.rightPanel}>
                {popOutOpen !== ''
                    ? portfolioComponent(props)
                    : undefined}
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(LandingPage);
