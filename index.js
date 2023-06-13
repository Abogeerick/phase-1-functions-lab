// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
  }
  
  function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264; // Each block is 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    return distance * 264; // Each block is 264 feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      return parseFloat(fare.toFixed(2)); // Charges 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distance over 2000 feet
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }
  