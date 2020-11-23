import React from "react";
import classNames from "classnames";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
/*@ts-ignore */
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import Grid from "@material-ui/core/Grid";
/*@ts-ignore */
import cv from '../assets/Vladi_Feldman_CV.pdf';
import './PdfDisplay.css';

//pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = () =>
    createStyles({
        document: {
            height: '92%',
            width: '94%',
            backgroundColor: '#fff',
            borderRadius: '1rem'
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
        <Grid className={props.classes.document}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                <div id="pdfviewer">
                    <Viewer fileUrl={cv} />
                </div>
            </Worker>
        </Grid>
    );
};

export default withStyles(styles)(PdfDisplay);
