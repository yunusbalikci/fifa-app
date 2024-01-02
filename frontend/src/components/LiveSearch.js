import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const YourComponent = () => {
    const [jsonResults, setJsonResults] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/players/')
            .then((response) => response.json())
            .then((json) => setJsonResults(json))
            .catch((error) => {
                console.error('Error fetching players:', error);
            });
    }, []);

    console.log(jsonResults);

    return (
        <Stack sx={{ width: 500, margin: "auto" }}>
            <Autocomplete
                id="player_demo"
                getOptionLabel={(option) => option.short_name}
                options={jsonResults}
                sx={{ width: 300 }}
                isOptionEqualToValue={(option, value) =>
                    option.short_name === value.short_name
                }
                noOptionsText="No players found"
                renderOption={(props, option) => (
                    <Box component="li" {...props} key={option.id}>
                        {option.short_name}
                    </Box>
                )}
                renderInput={(params) => <TextField {...params} label="Search player" />}
            />
        </Stack>
    );
};

export default YourComponent;
