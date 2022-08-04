// @flow 
import { Box, Card, CardHeader, CircularProgress, Grid, List, ListItem } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {
    Link as RouterLink,
} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import api from '../services/api';
type Props = {
};
export const Titulo = (props: Props) => {
    const [Post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState (false);
    const params = useParams ();

    async function getThePostData () {
        try {
            setIsLoading(true);
            const { data } = await api.get('/${params.id}');
            setPost(data);
            setIsLoading(false);
        }
        catch(_e) {
            console.log("Error: ", _e);
        }
    }
    React.useEffect(() => {
        getThePostData();
    }, [])
    return (
        <>

            <Grid item xs={7}>
                <RouterLink to="/">
                    <CardHeader
                        title="Voltar"
                    />
                </RouterLink>

                <Box>
                    {isLoading && (<CircularProgress/>)}
                    </Box>

                <Card>
                    <List>
                        <ListItem>
                            {'Post.title'}
                        </ListItem>
                        <ListItem>
                            {'Post.body'}
                        </ListItem>
                    </List>
                </Card>
 222222222
            </Grid>
        </>
    )};

    export default  Titulo;