import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Clock from 'react-clock';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/es';
import './ForecastCity.css';

moment.locale('es');

const ForecastCity = (props) => {
    return(
        <Paper>
            <Grid container>
                <Grid item xs={12}>
                    <p>{props.country}</p>
                    <h2 className="city">{props.name.replace(/\b\w/g, l => l.toUpperCase())}</h2>
                </Grid>
                <Grid item xs={12}>
                    <p>{moment().format('MMMM DD h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())}</p>
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

ForecastCity.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
};

export default ForecastCity;