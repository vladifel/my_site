import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
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
            marginBottom: '-5rem'
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
            <Grid className={props.classes.cardActionsContainer}>
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
            </Grid>
        </Card>
    );
};

export default withStyles(styles)(PortfolioCard);
