import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import userImg from '../../../assets/image/User-Avatar-Profile-PNG-Photos.png'
import { NavLink } from 'react-router-dom';
export function UserCard({ user }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: '200px' }}
        image={user.photos.large ? user.photos.large : userImg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {user.name}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">Follow</Button>
        <Button component={NavLink} to={'/'} variant='contained' size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
}