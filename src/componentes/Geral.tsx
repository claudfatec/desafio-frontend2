import {
    Link as RouterLink,
} from 'react-router-dom';
import { Box, Card, CircularProgress, List, ListItem, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import api from "../services/api";
// eslint-disable-next-line flowtype/require-valid-file-annotation
// @flow 
type Props = {
    
};



export const Geral = (props: Props) => {
    const [Posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getPostsData() {
        try {
            setIsLoading(true);
            const { data } = await api.get(`/`);
            setPosts(data);
            setIsLoading(false);
        }
        catch (_e) {
            console.log("Error: ", _e);
        }
    }

    useEffect(() => {
        getPostsData();
    }, [])




    return (
        <>
            <Box>
                        { isLoading && (<CircularProgress/>)   }
                            </Box>
            <Card>
                <Paper>
                    <Box>
                        <List>
                            {
                                Posts.map((post, key) => (
                                    <ListItem>
                                        <RouterLink to={'/${post.id}'} >{'post.title'}</RouterLink>
                                    </ListItem>
                                ))
                            }

                        </List>
                    </Box>
                </Paper>
            </Card>
        </>
    )
};