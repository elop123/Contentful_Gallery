import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import s from './Gallery.module.scss'

export const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  const client = createClient({
    space: 'cj1111y5497q',
    environment: 'master',
    accessToken: 'TyhQAC7gfnpeaXbuel6GADvV5UE1F93M4sy91X2hKBY'
  });

  useEffect(() => {
 
    client.getAssets()
      .then(response => {
        console.log("Fetched gallery assets:", response);

        const headerImageId = "5OarZhENYUe3cwSY9dkArb"; 

        const filteredAssets = response.items.filter(asset => asset.sys.id !== headerImageId);
        console.log("Filtered assets (excluding header):", filteredAssets);

        const images = filteredAssets.map(asset => ({
          url: `https:${asset.fields.file.url}`,
          title: asset.fields.title || "Gallery Image",
          description: asset.fields.description || "No description available"
        }));

        setGalleryImages(images);
        console.log("Gallery images state set:", images); 
      })
      .catch(error => console.error("Error fetching gallery assets: ", error));
  }, [client]);

  return (
    <div>
      <h1 className={s.title1Style}>Gallery</h1>
      <div className="gallery">
        {galleryImages.length > 0 ? (
          galleryImages.map((image, index) => (
            <div key={index} style={{ margin: "10px", border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              <img
                src={image.url}
                alt={image.title}
                style={{ width: "430px", height: "auto", display: "block", margin: "0 auto" }}
              />
              <h3 className={s.titleStyle}>{image.title}</h3>
              <p className={s.textStyle}>{image.description}</p>
            </div>
          ))
        ) : (
          <p>Loading gallery...</p>
        )}
      </div>
    </div>
  );
};
