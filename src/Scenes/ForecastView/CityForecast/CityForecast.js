import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Clock from 'react-clock';
import PropTypes from 'prop-types';

import moment from 'moment-timezone';
import 'moment/locale/es';
import './CityForecast.css';

moment.locale('es');

const getDate = (timezone) => {
    let momentWithTimezone = moment.tz(timezone).format("MMMM DD, YYYY h:mm:ss a");
    return new Date(momentWithTimezone);
}

const CityForecast = (props) => {
    let date = getDate(props.timezone);
    return(
        <Paper>
            <Grid container>
                <Grid item xs={12}>
                    <p>{props.country}</p>
                    <h2 className="city">{props.name.replace(/\b\w/g, l => l.toUpperCase())}</h2>
                </Grid>
                <Grid item xs={12}>
                    <p className="time">{moment(date).format('MMMM DD - h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())}</p>
                </Grid>
                <Grid item xs={12} align="center">
                    <Clock
                        value={date}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <p style={{fontSize: "30px"}}>{props.temperature}°F</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontSize: "30px"}}>{Math.trunc((props.temperature-32)*(5/9))}°C</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

CityForecast.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    timezone: PropTypes.string,
    temperature: PropTypes.number
};

export default CityForecast;