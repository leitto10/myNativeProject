import React from 'react';
import {Button} from 'react-native';

const fetchlocation = props => {
    return(
        <Button title="Get Location" onPress={props.onGetLocation}></Button>
    );
}

export default fetchlocation;