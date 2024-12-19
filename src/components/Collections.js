import Grid from '@mui/material/Grid2';

import fantasyImg from '../assets/collections/fantasy.avif';
import historyImg from '../assets/collections/history.png';
import biographyImg from '../assets/collections/biography.png';
import scicenceImg from '../assets/collections/science.png';
import mathsImg from '../assets/collections/maths.png';
import entranceImg from '../assets/collections/entrance.avif';

import '../styles/collections.scss';

export default function Collections() {
    return (
        <div className="collections-container">
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className='title-container'>
                <span className='title'>Collections</span>
                <span className='description'>
                    Below are the collections which we sell to our beloved customers
                </span>
            </Grid>
            <Grid container spacing={5}>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className='item-container'>
                    <img src={fantasyImg} />
                    <span className='collection-title'>Fantasy</span>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className='item-container'>
                    <img src={historyImg} />
                    <span className='collection-title'>History</span>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className='item-container'>
                    <img src={biographyImg} />
                    <span className='collection-title'>Biography</span>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className='item-container'>
                    <img src={scicenceImg} />
                    <span className='collection-title'>Science</span>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className='item-container'>
                    <img src={mathsImg} />
                    <span className='collection-title'>Mathematics</span>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className='item-container'>
                    <img src={entranceImg} />
                    <span className='collection-title'>Entrance</span>
                </Grid>
            </Grid>
        </div>
    )
}