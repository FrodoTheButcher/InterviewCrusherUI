export function CalculateTimeAgo(targetDateString) {
    //  the target date string to a Date object
    const targetDate = new Date(targetDateString);

    // Current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - targetDate;

    // Convert milliseconds to seconds, minutes, hours, days, weeks, months, and years
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const weeksAgo = Math.floor(daysAgo / 7);
    const monthsAgo = Math.floor(daysAgo / 30); // Approximation for months
    const yearsAgo = Math.floor(monthsAgo / 12); // Approximation for years

    // Determine the appropriate time unit and value
    if (yearsAgo > 0) {
        return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
    } else if (monthsAgo > 0) {
        return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
    } else if (weeksAgo > 0) {
        return `${weeksAgo} week${weeksAgo !== 1 ? 's' : ''} ago`;
    } else if (daysAgo > 0) {
        return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
    } else if (hoursAgo > 0) {
        return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
    } else if (minutesAgo > 0) {
        return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
    } else {
        return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
    }
}