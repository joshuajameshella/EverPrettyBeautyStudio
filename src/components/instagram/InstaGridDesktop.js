import * as React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import compose from 'recompose/compose';


export type Props = {
 media?: Array<{
   displayImage: string,
   id?: string,
   postLink?: string,
   accessibilityCaption?: string,
 }>,
 account: string,
 classes: { [$Keys<$Call<typeof styles>>]: string },
 status: 'completed' | 'loading' | 'failed',
};

const InstaGridDesktop = ({ classes, media, account, status}: Props) => {
 return (
   <Grid container spacing={32} style={{ overflow: 'hidden' }}>
     {media &&
       status === 'completed' &&
       media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
         <Grid item xs={8} sm={4} md={3} key={id || displayImage}>
           <ButtonBase href={postLink || `https://www.instagram.com/${account}/`}>
             <img style={{ width: '96%', padding: '2%' }} src={displayImage} alt={"Instagram link"} />
           </ButtonBase>
         </Grid>
       ))}
     {status === 'loading' && <p>loading...</p>}
     {status === 'failed' && <p>Check instagram here</p>}
    </Grid>
 );
};

InstaGridDesktop.defaultProps = {
 media: undefined,
};

export default compose(
 withInstagramFeed,
)(InstaGridDesktop);
