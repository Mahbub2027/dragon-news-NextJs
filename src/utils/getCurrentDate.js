export function getCurrentDate() {
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[today.getDay()];
    const month = monthsOfYear[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();

    return `${dayOfWeek}, ${month} ${date}, ${year}`;

    // const currentDate = `${dayOfWeek}, ${month} ${date}, ${year}`;

    // alert(currentDate);  // or you can console.log(currentDate) or display it in an HTML element
}

// Call the function to display the current date
// displayCurrentDate();
