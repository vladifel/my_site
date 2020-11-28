import React from "react";
import classNames from "classnames";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import imdb from '../assets/imdb.jpg'
import rpsls from '../assets/rpsls.jpg'
import PortfolioCard from "./PortfolioCard";

const styles = () =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%'
        },
        containerSmall: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'auto',

        },
        portfolioCard: {
            width: '46%',
            height: '92%'
        },
        portfolioCardColumn: {
            margin: '1rem 0',
            width: '92%',
            height: '48%',
            minHeight: '32rem'
        },
        portfolioCardLeft: {
            marginLeft: '2.5%'
        },
        portfolioCardRight: {
            marginRight: '2.5%'
        },
    });

interface IPortfolioProps {
    isSingleColumn: boolean;
}

export type IPortfolioCombinedProps = IPortfolioProps & WithStyles<typeof styles>;


const Portfolio: React.FunctionComponent<IPortfolioCombinedProps> = (props: IPortfolioCombinedProps) => {
    const rpslsDescription1 = "A fun, animated rock-paper-scissors game variation";
    const rpslsDescription2 = "A responsive web application done using React framework. Pure CSS3 was used for styling and animations, utilizing React-Router for navigation";
    const rpslsSecondary = "Rock-Paper-Scissors-Lizard-Spock. Sheldon's favorite game";
    const imdbDescription1 = "A beautiful web site aiming to help users compare directors based on the ratings of their films.";
    const imdbDescription2 = "React - Redux web App, styled using the Material-UI design system & guidelines and using Material-UI components. Based on Imdb's unofficial Api & Hosted on FireBase.";
    const imdbSecondary = "Wanna know who's the best film director of all time?"

    return (
        <Grid className={props.isSingleColumn ? props.classes.containerSmall : props.classes.container}>
            <Grid item className={classNames(
                props.isSingleColumn
                    ? props.classes.portfolioCardColumn
                    : props.classes.portfolioCard,
                !props.isSingleColumn && props.classes.portfolioCardLeft)}>
                <PortfolioCard
                    siteImage={rpsls}
                    siteLink={'https://rockpaperscissors-vladif.web.app/'}
                    siteName={'RPSLS'}
                    siteSecondary={rpslsSecondary}
                    siteDescription1={rpslsDescription1}
                    siteDescription2={rpslsDescription2}
                />
            </Grid>
            <Grid item className={classNames(
                props.isSingleColumn
                    ? props.classes.portfolioCardColumn
                    : props.classes.portfolioCard,
                !props.isSingleColumn && props.classes.portfolioCardRight)}>
                <PortfolioCard
                    siteImage={imdb}
                    siteLink={'https://imdb-directors-stats.web.app/'}
                    siteName={"Film Directors' ratings"}
                    siteSecondary={imdbSecondary}
                    siteDescription1={imdbDescription1}
                    siteDescription2={imdbDescription2}
                />
            </Grid>
        </Grid>
    )
};

export default withStyles(styles)(Portfolio);
