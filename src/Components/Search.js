import React from "react";

import { Grid, Container, Box, TextField, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';

function SearchInput(props) {
    return (
        <form style={{ display: 'flex', alignItems: 'center', }} noValidate autoComplete="off">
            <Grid style={{ paddingRight: '12px' }}> Search Keywords in Game Name: </Grid>
            <Grid>
                <TextField
                    onSubmit={e=>{e.preventDefault();}} 
                    onKeyPress={e => { e.key === 'Enter' && e.preventDefault(); }} 
                    onChange={e => {e.preventDefault(); props.onChange("searchInput",e.target.value)}}
                />
            </Grid>
        </form>
    )
}

function SearchTags(props) {
    return (
        <Box>
            <FormGroup row style={{ alignItems: 'center' }} onSubmit={e=>{e.preventDefault();}}>
                <Grid style={{ paddingRight: '12px' }}>Platforms: </Grid>
                <Grid item>
                    {props.platforms.map((item, index)=>(
                        <FormControlLabel key={index} control={<Checkbox name={item} onChange={() => props.onChange("platforms",item)}/>} label={item} />
                    ))}
                </Grid>
            </FormGroup>
            <FormGroup row style={{ display: 'flex', alignItems: 'center', }}>
                <Grid style={{ paddingRight: '12px' }}>Ranking: </Grid>
                <Grid item>
                    {props.rank.map((item, index)=>(
                        <FormControlLabel key={index} control={<Checkbox name={item} onChange={() => props.onChange("rank",item)}/>} label={item} />
                    ))}
                </Grid>
            </FormGroup>
            <FormGroup row style={{ display: 'flex', alignItems: 'center', }}>
                <Grid style={{ paddingRight: '12px' }}>Status: </Grid>
                <Grid item>
                {props.status.map((item, index)=>(
                        <FormControlLabel key={index} control={<Checkbox name={item} onChange={() => props.onChange("status",item)}/>} label={item} />
                    ))}
                </Grid>
            </FormGroup>
        </Box>
    )
}

export default class Search extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <Container>
                <SearchInput onChange={this.props.onChange} />
                <SearchTags platforms={this.props.platforms} rank={this.props.rank} status={this.props.status} onChange={this.props.onChange}/>
            </Container>
        )
    }
}