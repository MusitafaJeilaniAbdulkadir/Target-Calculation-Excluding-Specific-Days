# Target Calculation Excluding Specific Days

## Project Description
This project implements a function to calculate the proportional distribution of an annual target across multiple months while excluding specific non-working days (Fridays by default). The function dynamically computes the number of valid working days for each month in a given date range and distributes the total target accordingly.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MusitafaJeilaniAbdulkadir/Target-Calculation-Excluding-Specific-Days
.git


## Navigate to the project directory
    cd Target-Calculation-Excluding-Specific-Days
    Ensure you have Node.js installed. If not, download and install it from [nodejs.org].
    Run the script:
    You can execute the script in a Node.js environment. Create an index.js file and place the function code inside. Then, run:
    node index.js

## Usage
To use the calculateTotalTarget function, call it with the required parameters. The function can also exclude other non-working days by passing an additional parameter.

const result = calculateTotalTarget('2022-01-01', '2023-03-31', 2390);
console.log(result);

## Output
{
  daysExcludingFridays: [
    27, 24, 27, 25, 27, 26,
    26, 27, 25, 27, 26, 26,
    27, 24, 26
  ],
  daysWorkedExcludingFridays: [
    26, 24, 27, 25, 27, 26,
    26, 27, 25, 27, 26, 26,
    27, 24, 26
  ],
  monthlyTargets: [
    25.999999999999996,                 24,
                    27,                 25,
                    27, 25.999999999999996,
    25.999999999999996,                 27,
                    25,                 27,
    25.999999999999996, 25.999999999999996,
                    27,                 24,
    25.999999999999996
  ],
  totalTarget: 389
}


## Function Explanation
calculateTotalTarget(startDate, endDate, totalAnnualTarget, excludeDays = [5])
# Parameters:
startDate (string): The start date in YYYY-MM-DD format.
endDate (string): The end date in YYYY-MM-DD format.
totalAnnualTarget (number): The total target amount to distribute.
excludeDays (array): An optional array of days to exclude (default excludes Fridays, represented by 5).
Returns: An object containing:
daysExcludingFridays: An array of working days per month excluding specified days.
daysWorkedExcludingFridays: An array of actual working days within the specified date range.
monthlyTargets: An array of monthly targets based on valid working days.
totalTarget: The total calculated target.
# Logic Overview
Date Handling: The function uses JavaScript's Date object to manage dates and determine working days.
Exclusion Logic: It includes a helper function to check if a date falls on a specified non-working day.
Monthly Calculation: For each month in the date range, it calculates:
Total working days excluding specified days.
Days worked within the given range.
Proportional targets for each month based on valid working days.
# Assumptions and Limitations
The function assumes that the input dates are valid and correctly formatted.
The implementation currently excludes only specified non-working days. Additional days can be excluded by modifying the excludeDays parameter.
Edge cases such as ranges starting or ending mid-month are handled, but users should ensure that the provided dates are logical (i.e., startDate is before endDate).

## Author
Musitafa Jeilani Abdulkadir