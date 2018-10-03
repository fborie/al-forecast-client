import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Box = (props) => {
    return(
        <Grid item xs={12} md={4}>
            <div className="Box">
                { props.children }
            </div>
        </Grid>
    );
}

export default Box;