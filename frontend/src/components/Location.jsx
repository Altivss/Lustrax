import React from 'react';

const Location = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Auto Beautification Office
      </h1>
      <p className="text-white text-center w-3/4 mb-6">
        Visit our office at 3rd floor, Margimel Bldg. Manila S Rd, Calamba, 4027 Laguna
      </p>

      <div className="w-full max-w-4xl aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0604238226415!2d121.16007977488829!3d14.196480186843294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63dc7d0494ab%3A0x6bee433db31ec2ba!2sMargimel%20Building%2C%20Manila%20S%20Rd%2C%20Calamba%2C%204027%20Laguna!5e1!3m2!1sen!2sph!4v1747276322224!5m2!1sen!2sph"
          className="w-full h-full rounded-lg shadow-lg border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Auto Beautification Office"
        />
      </div>
    </div>
  );
};

export default Location;
