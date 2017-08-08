import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { timeZoneMapIANA } from 'constants/TimeZones';

function TestiveDate({ removeCommas, formatOptions, time, timeZone }) {
  let displayTime = time;

  if (timeZone) {
    let options = formatOptions ? formatOptions : {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'long',
      weekday: 'long',
      timeZone: timeZoneMapIANA[timeZone] ? timeZoneMapIANA[timeZone] : 'UTC',
      timeZoneName: 'short'
    };

    let date = format(displayTime, 'x');
    date = new Date(parseInt(date));

    displayTime = date.toLocaleString('en-us', options);

    if (removeCommas) {
      displayTime = displayTime.replace(/,/g, '');
    }
  } else {
    displayTime = format(displayTime, 'ddd M/D h:mmA');
  }

  return (
    <span>
      { displayTime }
    </span>
  );
}

TestiveDate.propTypes = {
  removeCommas: PropTypes.bool,
  formatOptions: PropTypes.object,
  time: PropTypes.string.isRequired,
  timeZone: PropTypes.string
};

export default TestiveDate;
