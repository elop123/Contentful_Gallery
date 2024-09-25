import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import s from './Description.module.scss'

export const Description = () => { 
  const [pageDescription, setPageDescription] = useState(null);

  const client = createClient({
    space: 'cj1111y5497q',
    environment: 'master',
    accessToken: 'TyhQAC7gfnpeaXbuel6GADvV5UE1F93M4sy91X2hKBY'
  });

  useEffect(() => {
    client.getEntry('6Dj0ahErS0I8iTT5YVHRcW')
      .then((entry) => {
        if (entry.fields && entry.fields.pageDescription) {
          setPageDescription(entry.fields.pageDescription);
        } else {
          console.error("Page description is missing.");
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className={s.description}>
      {pageDescription ? (
        <div>
          {documentToReactComponents(pageDescription)}
        </div>
      ) : (
        <p>Loading page description...</p>
      )}
    </div>
  );
};
