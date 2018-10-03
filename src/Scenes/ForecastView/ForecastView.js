import React from 'react';
import Body from '../../Components/Body';
import Grid from '@material-ui/core/Grid';
import Box from '../../Components/Box'
import CityForecast from './CityForecast';

const getForecastCities = (cities) => {
    return cities.map( city => {
        return(
            <Box key={city.name}>
                <CityForecast 
                    name={city.name} 
                    country={city.country} 
                    timezone={city.timezone}
                    temperature={city.temperature} />
            </Box>
        )
    })
}

const ForecastView = (props) => {
    if(props.cities.length === 0){
        return(
            <div className="loading">
                <h3>Cargando forecast ...</h3>
            </div>
        )
    }
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