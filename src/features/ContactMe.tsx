import React, { Fragment, useState } from "react";
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
import imdb from '../assets/imdb.jpg'
import rpsls from '../assets/rpsls.jpg'
import { JsxElement } from "typescript";
import PortfolioCard from "./PortfolioCard";
import PdfDisplay from "./PdfDisplay";
//pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = () =>
    createStyles({
        contactMeBody: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginTop: '10%'
        },
        contactMeHeaderText: {
            fontSize: '1.5rem',
            fontWeight: 900
        },
        contactMeInner: {
            height: '91%',
            width: '92%',
            backgroundColor: 'rgba(255,255,255,1)',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '2rem'
        },
        contactMeLink: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        contactMeLinkIcon: {
            paddingRight: '0.3rem'
        },
        contactMeLinks: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '7%'
        },
        contactMeTexts: {
            display: 'flex',
            flexDirection: 'column'
        },
    });

interface IContactMeProps {

}

export type IContactMeCombinedProps = IContactMeProps & WithStyles<typeof styles>;


const ContactMe: React.FunctionComponent<IContactMeCombinedProps> = (props: IContactMeCombinedProps) => {

    return (
        <Fragment>
            <Grid container className={props.classes.contactMeInner}>
                <Grid item>
                    <Typography
                        className={props.classes.contactMeHeaderText}
                    >
                        Contact Me
                    </Typography>
                    <Typography
                    //className={props.classes.contactMeHeaderText}
                    >
                        I'm embarking on a new journey and looking for my next opportunity.
                    </Typography>
                </Grid>
                <Grid container className={props.classes.contactMeBody}>
                    <Grid item className={props.classes.contactMeTexts}>
                        <Typography>
                            E-Mail
                    </Typography>
                        <Typography>
                            GitHub
                    </Typography>
                        <Typography>
                            LinkedIn
                    </Typography>
                        <Typography>
                            Facebook
                    </Typography>
                    </Grid>
                    <Grid item className={props.classes.contactMeLinks}>
                        <Link
                            className={props.classes.contactMeLink}
                            href={'mailto:vladi.fel@gmail.com'}
                            target="_blank"
                        >
                            <HiMail className={props.classes.contactMeLinkIcon} />
                            <Typography>
                                vladi.fel@gmail.com
                        </Typography>
                        </Link>
                        <Link
                            className={props.classes.contactMeLink}
                            href={'https://github.com/vladifel'}
                            target="_blank"
                        >
                            <GrGithub className={props.classes.contactMeLinkIcon} />
                            <Typography>
                                vladifel
                        </Typography>
                        </Link>
                        <Link
                            className={props.classes.contactMeLink}
                            href={'https://www.linkedin.com/in/vladif/'}
                            target="_blank"
                        >
                            <FaLinkedin className={props.classes.contactMeLinkIcon} />
                            <Typography>
                                vladif
                        </Typography>
                        </Link>
                        <Link
                            className={props.classes.contactMeLink}
                            href={'https://www.facebook.com/vladi.feldman/'}
                            target="_blank"
                        >
                            <FaFacebookSquare className={props.classes.contactMeLinkIcon} />
                            <Typography>
                                vladi.feldman
                        </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default withStyles(styles)(ContactMe);