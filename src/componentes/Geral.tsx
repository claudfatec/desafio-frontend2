import { Button, Grid, Link, Typography } from "@material-ui/core";
// eslint-disable-next-line flowtype/require-valid-file-annotation
// @flow 
type Props = {
    
};



export const Geral = (props: Props) => {
    return (
        <div> 
<Typography>
    
    <Button>
        <Link href="http://jsonplaceholder.typicode.com/posts?id=1">Aqui vai o link.</Link>
    </Button>

</Typography>
            <Grid container> 
            <Grid item xs={12} sm={6}>Cabeçalho</Grid>
            <Grid item xs={12} sm={6}>Corpo
            </Grid>
                Agora vai, será?...
            </Grid>
        </div>
    );
};