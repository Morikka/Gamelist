import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function TableItems(props) {
    const classes = useStyles();
    const gameData = props.gameData;
    if(gameData === null) return <div></div> 
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Game Name</TableCell>
                        <TableCell align="right">Translated Name</TableCell>
                        <TableCell align="right">Platform</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Rank</TableCell>
                        <TableCell align="right">Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gameData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">{row.Name}</TableCell>
                            <TableCell align="right">{row.TranslatedName}</TableCell>
                            <TableCell align="right">{row.Platform}</TableCell>
                            <TableCell align="right">{row.Status}</TableCell>
                            <TableCell align="right">{row.Rank}</TableCell>
                            <TableCell align="right">{row.Notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default class GameTable extends React.Component {
    render() {
        return <Container><TableItems gameData={this.props.gameData} /></Container>;
    }
}