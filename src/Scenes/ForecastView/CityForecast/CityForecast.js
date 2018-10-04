import React from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
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

const capitalize = (word) => {
    return word.replace(/\b\w/g, l => l.toUpperCase());
}

const CityForecast = (props) => {
    let date = getDate(props.timezone);
    let name = capitalize(props.name);
    let dateFormatted = moment(date).format('MMMM DD - h:mm:ss a');
    dateFormatted = capitalize(dateFormatted);
    let farenheit = Math.trunc(props.temperature);
    let celcius = Math.trunc((props.temperature-32)*(5/9));
    return(
        <Paper>
            <Grid container>
                <Grid item xs={12}>
                    <Chip label={props.country} style={{marginTop: "1rem"}} />
                </Grid>
                <Grid item xs={12}>
                    <h2 className="city">{name}</h2>
                </Grid>
                <Grid item xs={12}>
                    <p className="time">{dateFormatted}</p>
                </Grid>
                <Grid item xs={12} align="center">
                    <Clock
                        value={date}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <p style={{fontSize: "30px"}}>{farenheit}°F</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontSize: "30px"}}>{celcius}°C</p>
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