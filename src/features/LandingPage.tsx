import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import { GrGithub } from 'react-icons/gr';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { TiChevronRightOutline } from 'react-icons/ti';
import me from '../assets/m5.jpg'
import PdfDisplay from "./PdfDisplay";
import ContactMe from "./ContactMe";
import Portfolio from "./Portfolio";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { styles } from "./LandingPage.styles";
import AboutMe from "./AboutMe";

interface IButtonActions {
    buttonHover: string;
    handleHoverIn: (buttonType: string) => void;
    handleHoverOut: () => void;
    handleButtonClick: (event: any) => void;
    popOutOpen: string;
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
                className={classNames(
                    props.classes.headTextColor,
                    (hoverOn || buttonActions.popOutOpen === buttonText) && props.classes.linkButtonHover)}
            >
                {buttonText}
            </Typography>
            {(hoverOn || buttonActions.popOutOpen === buttonText)
                ? <TiChevronRightOutline
                    className={classNames(
                        props.classes.headTextColor,
                        props.classes.linkButtonChevron
                    )}
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

const aboutMeComponent = (matches1000: boolean, props: ILandingPageCombinedProps) => {
    return (
        <Grid container className={classNames(
            props.classes.popOutContainer,
            matches1000
                ? props.classes.aboutMeOuterSmall
                : props.classes.aboutMeOuter)
        }>
            <AboutMe />
        </Grid>
    )
}

const portfolioComponent = (matches1000: boolean, props: ILandingPageCombinedProps) => {
    return (
        <Grid container className={classNames(
            props.classes.popOutContainer,
            matches1000
                ? props.classes.portfolioContainerSmall
                : props.classes.portfolioContainer
        )
        }>
            <Portfolio isSingleColumn={matches1000} />
        </Grid>
    )
}

const contactMeComponent = (props: ILandingPageCombinedProps) => {
    return (
        <Grid className={classNames(
            props.classes.rootTop,
            props.classes.popOutContainer,
            props.classes.contactMeOuter
        )
        }>
            <ContactMe />
        </Grid>
    )
}

const myCVComponent = (props: ILandingPageCombinedProps) => {
    return (
        <Grid className={classNames(props.classes.popOutContainer, props.classes.cvContainer)}>
            <PdfDisplay />
        </Grid>
    )
}

const LandingPage: React.FunctionComponent<ILandingPageCombinedProps> = (props: ILandingPageCombinedProps) => {
    const [buttonHover, setButtonHover] = useState<string>('');
    const [popOutOpen, setPopOutOpen] = useState<string>('About Me');

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
        handleButtonClick: handleButtonClick,
        popOutOpen: popOutOpen
    }
    const matches = useMediaQuery('(max-width:600px)');
    const matches1000 = useMediaQuery('(max-width:1000px)');
    const matchesHeight = useMediaQuery('(max-height:560px)');
    return (
        <Grid className={props.classes.root}>
            <Grid container className={props.classes.leftPart}>
                <Grid className={props.classes.upperContainer}>
                    <Grid item className={props.classes.avatarContainer}>
                        <Avatar
                            className={props.classes.avatar}
                            alt="Vladi Feldman"
                            src={me}
                        />
                    </Grid>
                    <Grid item className={matchesHeight
                        ? props.classes.headTextContainerSmall
                        : props.classes.headTextContainer}>
                        <Button
                            className={props.classes.headerTextButton}
                            onClick={() => setPopOutOpen('')}
                        >
                            <Typography
                                className={classNames(props.classes.headTextName, props.classes.headTextColor)}
                            >
                                Vladi Feldman
                    </Typography>
                        </Button>
                        <Button
                            className={props.classes.headerTextButton}
                            onClick={() => setPopOutOpen('')}
                        >
                            <Typography
                                className={classNames(props.classes.headTextProf, props.classes.headTextColor)}
                            >
                                Front-End Developer
                    </Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container className={classNames(props.classes.linksContainer, matchesHeight && props.classes.linksContainerSmall)}>
                    {linkButtonComponent('About Me', buttonActions, props)}
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
                {popOutOpen === 'Portfolio'
                    ? portfolioComponent(matches1000, props)
                    : popOutOpen === 'My CV'
                        ? myCVComponent(props)
                        : popOutOpen === 'Contact Me'
                            ? contactMeComponent(props)
                            : popOutOpen === 'About Me'
                                ? aboutMeComponent(matches1000, props)
                                : undefined}
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(LandingPage);
