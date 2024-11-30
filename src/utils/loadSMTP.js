/* const loadSMTP = (path,callback) => {
  const existingScript = document.getElementById('googleMaps');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.id = 'smtpjs';
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadSMTP; */

const loadSMTP = (path, callback) => {
  const existingScript = document.getElementById("googleMaps");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = path;
    script.id = "smtpjs";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadSMTP;
