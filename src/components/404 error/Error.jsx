import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './error.css';

const Error = () => {
    return(
        <div className="mainerror">
            <Typography style={{fontWeight: 900, fontSize: "20px"}}>
            Sorry could not find the page you are looking for 
            </Typography>
            &nbsp;
            <Link to="/" className='link'>
            <Button variant="contained" color="primary">
                Go Home
            </Button>
            </Link>
        </div>
    )
}

export default Error;