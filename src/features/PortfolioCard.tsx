import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Button from '@material-ui/core/Button';
import { GrGithub } from 'react-icons/gr';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { TiChevronRightOutline } from 'react-icons/ti';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const styles = () =>
    createStyles({
        actionArea: {
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        cardActions: {
            display: 'flex',
            alignItems: 'flex-end',
            height: '5rem'
        },
        cardImage: {
            height: '60%',
            width: '100%',
            backgroundPosition: 'initial'
        },
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: '100%',
            borderRadius: '1rem',
        },

    });

interface IPortfolioCardProps {
    siteLink: string;
    siteImage: string;
    siteName: string;
    siteDescription: string;
}

export type IPortfolioCardCombinedProps = IPortfolioCardProps & WithStyles<typeof styles>;


const PortfolioCard: React.FunctionComponent<IPortfolioCardCombinedProps> = (props: IPortfolioCardCombinedProps) => {

    return (
        <Card className={props.classes.root}>
            <CardActionArea className={props.classes.actionArea}>
                <CardMedia
                    className={props.classes.cardImage}
                    image={props.siteImage}
                    title={`${props.siteName} pic`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.siteName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.siteDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={props.classes.cardActions}>
                <Button >
                    <Link
                        href={props.siteLink}
                        target="_blank"
                    >
                        <Typography>
                            Visit Site
                        </Typography>
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(PortfolioCard);
