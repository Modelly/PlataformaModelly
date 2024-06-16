import { useEffect } from 'react';

const GTranslate = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.innerHTML = `window.gtranslateSettings = {"default_language":"pt","native_language_names":true,"detect_browser_language":true,"wrapper_selector":".gtranslate_wrapper","flag_style":"3d","alt_flags":{"en":"usa","pt":"brazil","es":"argentina"}}`;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslate;