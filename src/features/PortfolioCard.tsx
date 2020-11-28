import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = () =>
    createStyles({
        actionArea: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        cardActionsContainer: {
            display: 'flex',
            alignItems: 'flex-end',
        },
        cardImage: {
            minHeight: '40%',
            width: '100%',
            backgroundPosition: 'initial'
        },
        link: {
            height: 'inherit',
        },
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            height: '100%',
            borderRadius: '1rem',
            fontFamily: 'BioRhyme',

        },

    });

interface IPortfolioCardProps {
    siteLink: string;
    siteImage: string;
    siteName: string;
    siteSecondary: string
    siteDescription1: string;
    siteDescription2: string;
}

export type IPortfolioCardCombinedProps = IPortfolioCardProps & WithStyles<typeof styles>;


const PortfolioCard: React.FunctionComponent<IPortfolioCardCombinedProps> = (props: IPortfolioCardCombinedProps) => {

    return (
        <Card className={props.classes.root}>
            <Link
                className={props.classes.link}
                underline='none'
                href={props.siteLink}
                target="_blank"
            >
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
                        <Typography gutterBottom variant="h6" component="h3">
                            {props.siteSecondary}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.siteDescription1}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.siteDescription2}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};

export default withStyles(styles)(PortfolioCard);
