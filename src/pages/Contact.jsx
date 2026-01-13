import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me via email or social media.</p>
      <ul>
        <li>Email: <a href="mailto:hello@anirudhiyer.xyz">hello@anirudhiyer.xyz</a></li>
        <li>GitHub: <a href="https://github.com/anirudhi89" target="_blank" rel="noopener noreferrer">@anirudhi89</a></li>
        {/* Add more links */}
      </ul>
    </div>
  );
};

export default Contact;
