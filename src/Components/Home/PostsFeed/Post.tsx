import  React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Modal } from '@mui/material';


export type TypePost = {
    profImg: string,
    author: string,
    date: string,
    content?: string,
    media?: string[]
}

export default function Post({profImg, author,content,date, media}: TypePost) {

 const [open, setOpen] = useState(false);
 const [preview, setPreview] = useState('');

 const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
  };

 const handleOpen = (img: string) => {
    setPreview(img);
    setOpen(true); 
}
const handleClose = () => { 
    setPreview('');
    setOpen(false); 
}

 return (
    <Card className='mb-9 bg-black' >
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} >
            {
                preview && <img className='w-full h-full' src={preview} alt="prvimg"  />
            }
        </Box>
        </Modal>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={profImg} alt="postposterimage"  />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardContent className='flex' >
        {
            media?.map((img, k) => <img onClick={() => {handleOpen(img)}} className='w-full' src={img} key={k} alt={`post${k}`}  />)
        }
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
