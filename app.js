const getSleepHours = (day) => { 
 	switch(day) {
    case 'monday':
      return 11;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 10;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return "Error!";
      break;
  }
};

const getActualSleepHours = () =>
  (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'));

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours*7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  let diffSleepHours = actualSleepHours - idealSleepHours;
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${diffSleepHours} more hour(s) of sleep than needed.`);
  } else {
    console.log(`You need to get ${diffSleepHours*(-1)} more hour(s) of sleep.`);
  }
};

console.log(`Total sleep hours: ${getActualSleepHours()}`);
console.log(`Ideal sleep hours: ${getIdealSleepHours()}`);
calculateSleepDebt();
