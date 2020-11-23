import React from "react";
import classNames from "classnames";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
//import { Document, Page, pdfjs } from 'react-pdf';
import Grid from "@material-ui/core/Grid";
/*@ts-ignore */
import cv from '../assets/Vladi_Feldman_CV.pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = () =>
    createStyles({
        document: {
            maxHeight: '55rem !important',
            width: '100%',
            zIndex: 99,
        },
        root: {
            width: '45rem',
            height: '55rem',
            borderRadius: '1rem',
            margin: '1rem'
        },

    });

interface IPdfDisplayProps {

}

export type IPdfDisplayCombinedProps = IPdfDisplayProps & WithStyles<typeof styles>;


const PdfDisplay: React.FunctionComponent<IPdfDisplayCombinedProps> = (props: IPdfDisplayCombinedProps) => {

    return (
        <Grid className={props.classes.root}>
            {/* <Document
                className={props.classes.document}
                file={cv}
                loading={'Loading PDF...'}
                renderMode={'svg'}

            >
                <Page
                    className={props.classes.document}
                    pageNumber={1}
                    scale={2}
                    height={880}
                />
            </Document> */}
        </Grid>
    );
};

export default withStyles(styles)(PdfDisplay);
