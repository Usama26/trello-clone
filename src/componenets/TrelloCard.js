import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const TrelloCard =({text})=>{
    return (

        <Card>
            <CardContent>
            <Typography  gutterBottom>  
                {text}
            </Typography>
            </CardContent>
        </Card>
    )
}

export default TrelloCard;