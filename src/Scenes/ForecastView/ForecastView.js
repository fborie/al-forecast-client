import React from 'react';
import Body from '../../Components/Body';
import Grid from '@material-ui/core/Grid';
import Box from '../../Components/Box'
import ForecastCity from './ForecastCity';

const getForecastCities = (cities) => {
    return cities.map( city => {
        return(
            <Box key={city.name}>
                <ForecastCity name={city.name} country={city.country} />
            </Box>
        )
    })
}

const ForecastView = (props) => {
    console.log(props);
    return (
        <div className="ForecastView">
            <Body>
                <Grid container spacing={16}>
                   { getForecastCities(props.cities) }
                </Grid>
                <Grid container spacing={16}>
                
                </Grid>
            </Body>    
        </div>
    );
}

export default ForecastView;