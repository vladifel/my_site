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
import { FiDownloadCloud } from 'react-icons/fi';
import { HiMail } from 'react-icons/hi';
import { TiChevronRightOutline } from 'react-icons/ti';
import me from '../assets/m5.jpg'
import { JsxElement } from "typescript";
import PortfolioCard from "./PortfolioCard";
import PdfDisplay from "./PdfDisplay";
import ContactMe from "./ContactMe";
import Portfolio from "./Portfolio";

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
        contactMeOuter: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
            width: '45%',
        },
        cvContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '12%',
            height: '76%',
            width: '60%',
        },
        headTextContainer: {
            marginTop: '2rem',
            textAlign: 'center'
        },
        headerTextButton: {
            textTransform: 'none'
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
            backgroundColor: 'rgba(3, 169, 244, 0.85)',
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
        linkButtonCloud: {
            fontSize: '1rem',
            marginLeft: '0.5rem'
        },
        linksContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '3rem'
        },
        linkButtonCV: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        popOutContainer: {
            backgroundColor: 'rgba(3, 169, 244, 0.9)',
            position: 'absolute',
            borderRadius: '1rem',
            marginLeft: '2rem'
        },
        portfolioContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '70%',
            width: '70%',
        },
        rightPanel: {
            height: '100%',
            width: '40rem'
        },
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'transparent'
        },
        rootTop: {
            top: '20%',
        }
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
        <Grid container className={classNames(
            props.classes.rootTop,
            props.classes.popOutContainer,
            props.classes.portfolioContainer
        )
        }>
            <Portfolio />
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
                        src={me}
                    />
                </Grid>
                <Grid item className={props.classes.headTextContainer}>
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
                {popOutOpen === 'Portfolio'
                    ? portfolioComponent(props)
                    : popOutOpen === 'My CV'
                        ? myCVComponent(props)
                        : popOutOpen === 'Contact Me'
                            ? contactMeComponent(props)
                            : undefined}
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(LandingPage);
