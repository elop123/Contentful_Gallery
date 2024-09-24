import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [headerImage, setHeaderImage] = useState('');

  const client = createClient({
    space: 'cj1111y5497q',
    environment: 'master', 
    accessToken: 'TyhQAC7gfnpeaXbuel6GADvV5UE1F93M4sy91X2hKBY'
  });

  useEffect(() => {
    client.getAsset('5OarZhENYUe3cwSY9dkArb')
      .then((asset) => {
        if (asset.fields && asset.fields.file) { 
         
          const imageUrl = `https:${asset.fields.file.url}`; 

          if (asset.fields.file.details && asset.fields.file.details.image) {
            const { width, height } = asset.fields.file.details.image;
            //console.log(`Image URL: ${imageUrl}`);
          }
          // Set the image URL in state
          setHeaderImage(imageUrl);
        } else {
          console.error("Image file details are missing.");
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {headerImage ? (
        <img src={headerImage} alt="Header" style={{ width: '100%', height: 'auto' }} />
      ) : (
        <p>Loading header image...</p>
      )}
    </>
  );
};