import { useEffect } from 'react';
import PropTypes from 'prop-types';

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    // Load Instagram embed.js script securely
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js'; // Use HTTPS
    document.body.appendChild(script);

    return () => {
      // Cleanup the script element when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{
      maxWidth: '100%',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink={`https://www.instagram.com/p/${url}`}
        data-instgrm-version="14"
        style={{ 
          background: '#FFF', 
          border: '0', 
          borderRadius: '3px', 
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', 
          margin: '1px', 
          maxWidth: '100%', 
          minWidth: '100%', 
          padding: '0', 
          width: '100%'
        }}>
      </blockquote>
    </div>
  );
};

InstagramEmbed.propTypes = {
  url: PropTypes.string.isRequired, // Expect a post URL as a prop
};

export default InstagramEmbed;
