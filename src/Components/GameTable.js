import React from "react";
import { Typography, Container, Chip} from '@mui/material';

function TableItems(props) {
    const gameData = props.gameData;
    if(gameData === null) return <div></div> 
    return (
        gameData.map((row, index) => (
            <div key={index}>
                <h4>
                    {row.Name}
                    <Typography sx={{ color:'text.secondary', display: 'inline-block'}}>({row.TranslatedName})</Typography>
                    <Chip color="primary" variant="outlined" label={row.Platform} sx={{margin: 1}}/>
                    <Chip color="success" variant="outlined" label={row.Status} sx={{mr: 1}} />
                    {row.Rank}
                </h4>
                <p>推荐理由：{row.Notes}</p>
            </div>
        ))
    );
}


export default class GameTable extends React.Component {
    render() {
        return <Container><TableItems gameData={this.props.gameData} /></Container>;
    }
}