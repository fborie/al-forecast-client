import React from 'react';
import Body from '../../Components/Body';
import Grid from '@material-ui/core/Grid';
import Box from '../../Components/Box'
import ForecastCity from './ForecastCity';

const ForecastView = (props) => {
    return (
        <div className="ForecastView">
            <Body>
                <Grid container spacing={16}>
                    <Box>
                        <ForecastCity />
                    </Box>
                    <Box>
                        <ForecastCity />
                    </Box>
                    <Box>
                        <ForecastCity />
                    </Box>                                                          
                </Grid>
                <Grid container spacing={16}>
                
                </Grid>
            </Body>    
        </div>
    );
}

export default ForecastView;