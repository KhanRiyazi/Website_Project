// Select the elements that represent the clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

/**
 * Update the clock hands to show the current time
 */
function updateClock() {
    const currentTime = new Date(); // Get the current time

    // Extract the current hours, minutes, and seconds
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    // Calculate the degrees for the second hand (6 degrees per second)
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    // Calculate the degrees for the minute hand (6 degrees per minute, adjusts based on seconds)
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;

    // Calculate the degrees for the hour hand (30 degrees per hour, adjusts based on minutes)
    const hoursDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30) + 90;

    // Apply the calculated degrees to the hands using CSS transforms
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

// Set up the clock to update every second
setInterval(updateClock, 1000);

// Initial call to update the clock immediately when the page loads
updateClock();
