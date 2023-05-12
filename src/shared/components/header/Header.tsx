
import { AppBar, Box, Card, CardContent, Container, Grid, Button, Toolbar, Typography } from "@mui/material"


export const Header = () => {

    const debug = () => {
        console.log("debug")
    } 



    return (
        <>
            <AppBar position="static" >
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            HHHHHHHHHHHHHHHHH
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                            <Grid item xs={12} sm={6} md={3}>

                                <Card sx={{ width: '100%', height: '100%' }}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            Card 1
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>

                                <Card sx={{ width: '100%', height: '100%' }}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            Card 2
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>

                                <Card sx={{ width: '100%', height: '100%' }}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            Card 2
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
