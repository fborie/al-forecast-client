import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Clock from 'react-clock';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

const ForecastCity = (props) => {
    return(
        <Paper>
            <Grid container>
                <Grid item xs={12}>
                    <h3>Santiago</h3>
                </Grid>
                <Grid item xs={12}>
                    <p>{moment().format('MMM DD YYYY, h:mm:ss a')}</p>
                </Grid>
                <Grid item xs={12} align="center">
                    <Clock
                        value={new Date()}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <p style={{fontSize: "30px"}}>78°F</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontSize: "30px"}}>30°C</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ForecastCity;