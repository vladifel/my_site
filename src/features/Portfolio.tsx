import React, { Fragment } from "react";
import classNames from "classnames";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import imdb from '../assets/imdb.jpg'
import rpsls from '../assets/rpsls.jpg'
import PortfolioCard from "./PortfolioCard";

//pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = () =>
    createStyles({
        portfolioCard: {
            width: '46%',
            height: '92%'
        },
        portfolioCardLeft: {
            marginLeft: '2.5%'
        },
        portfolioCardRight: {
            marginRight: '2.5%'
        },
    });

interface IPortfolioProps {

}

export type IPortfolioCombinedProps = IPortfolioProps & WithStyles<typeof styles>;


const Portfolio: React.FunctionComponent<IPortfolioCombinedProps> = (props: IPortfolioCombinedProps) => {
    const rpslsDescription = "A responsive web application done using React framework. Pure CSS3 was used for styling and animations, utilizing React-Router for navigation";
    const rpslsSecondary = "Rock-Paper-Scissors-Lizard-Spock. Sheldon's favorite game";
    const imdbDescription = "A beautiful web site aiming to help users .. ... ... React - Redux web App, styled using the Material-UI design system & guidelines and using Material-UI components. Based Imdb's unofficial Api. Hosted on FireBase";
    const imdbSecondary = "Wanna know who's the best film director of all time?"
    return (
        <Fragment>
            <Grid item className={classNames(props.classes.portfolioCard, props.classes.portfolioCardLeft)}>
                <PortfolioCard
                    siteImage={rpsls}
                    siteLink={'https://rockpaperscissors-vladif.web.app/'}
                    siteName={'RPSLS'}
                    siteSecondary={rpslsSecondary}
                    siteDescription={rpslsDescription}
                />
            </Grid>
            <Grid item className={classNames(props.classes.portfolioCard, props.classes.portfolioCardRight)}>
                <PortfolioCard
                    siteImage={imdb}
                    siteLink={'https://imdb-directors-stats.web.app/'}
                    siteName={"Film Directors' ratings"}
                    siteSecondary={imdbSecondary}
                    siteDescription={imdbDescription}
                />
            </Grid>
        </Fragment>
    )
};

export default withStyles(styles)(Portfolio);
