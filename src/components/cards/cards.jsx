import { CardContent, Typography,Grid } from "@material-ui/core";
import styles from "../cards/card.module.css";
import Card from '@material-ui/core/Card';
import CountUp from 'react-countup';



export default function Cards ({data:{confirmed,recovered,deaths,lastUpdate},country}){
if(!confirmed){
  return "Loading..."
}
    return (
        <div className={styles.container}>
       <Typography gutterBottom variant="h4"  className={styles.heading} component="h2">{country ? country : "Global"}</Typography>
           <Grid container spacing={3} justify="center">
            <Grid  item>
     <Card  className={styles.infected} xs={12} md={3}  variant="outlined" >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Infected People
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
         {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Number of active casess <br />from COVID-19
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid  item > 
         <Card className={styles.recoverd} xs={12} md={3}  variant="outlined" >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Recoverd People
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
        {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Number of Recoveries from <br/> COVID-19
        </Typography>
      </CardContent>
    </Card></Grid>
    <Grid item > 
    <Card className={styles.deaths} xs={12} md={3} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Deaths
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
        {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Number of Deaths caused <br /> by COVID-19
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
          
        </div>
    )
}