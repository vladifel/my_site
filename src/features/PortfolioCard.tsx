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
        cardImage: {
            height: '25rem',
            width: '100%'
        },
        root: {
            width: '45rem',
            height: '40rem',
            borderRadius: '1rem',
            margin: '1rem'
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
            <CardActionArea>
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
            <CardActions>
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
