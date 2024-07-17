import * as React from 'react';
import SelectRoadmaps from './SelectRoadmap';
import { Alert, Row } from 'react-bootstrap';
import { AlertTitle, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { documentation } from '../../../constants';

export default function ScheduleTimeToLearnCalendar({ setSchedule, schedule }) {
  const handleChange = (e) => {
    const year = e.$y;
    const month = e.$M;
    const day = e.$D;
    setSchedule((prev) => ({ ...prev, date: `${year}-${month}-${day}` }));
  };

  const parseMonthsStringToDate = (monthsString) => {
    if(!monthsString) return null;
    const number = parseInt(monthsString.split(" ")[0], 10);
    if (isNaN(number) || number <= 0) {
      throw new Error('Invalid number of months');
    }
    const currentDate = dayjs();
    const monthsToAdd = 3; // Replace 3 with the number of months you want to add
    const futureDate = currentDate.add(monthsToAdd, 'month');
    return futureDate;
  };

  
  return (
    <Row>
      {schedule ? (
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {
              schedule && 
              <DateTimePicker minDate={dayjs()} maxDate={parseMonthsStringToDate(schedule?.avarageTimeToFinish)} label="Select the datetime" onChange={(e) => handleChange(e)} />
            }
          </LocalizationProvider>
        </Box>
      ) : (
        <Box>
          <Alert severity="info">
            <AlertTitle>What's this?</AlertTitle>
            You need to select a roadmap you own to <br /> schedule a time to learn and earn coins! —{' '}
            <Link to={`/documentation/${documentation.SCHEDULE_TIME_TO_LEARN}`} style={{ cursor: 'pointer' }}>
              <strong>i don't understand</strong>
            </Link>
          </Alert>

          <SelectRoadmaps setSchedule={setSchedule} />
        </Box>
      )}
    </Row>
  );
}
