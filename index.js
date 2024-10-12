function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysExcludingFridays = [];
    const daysWorkedExcludingFridays = [];
    const monthlyTargets = [];
    let totalWorkingDays = 0;

    // Helper function to get the number of working days in a month
    function getWorkingDaysInMonth(year, month) {
        const date = new Date(year, month, 0); // Last day of the month
        const daysInMonth = date.getDate();
        let workingDays = 0;

        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = new Date(year, month - 1, day);
            if (currentDate.getDay() !== 5) { // Exclude Fridays (5)
                workingDays++;
            }
        }
        return workingDays;
    }

    // Iterate through each month in the date range
    for (let year = start.getFullYear(); year <= end.getFullYear(); year++) {
        const startMonth = year === start.getFullYear() ? start.getMonth() + 1 : 1;
        const endMonth = year === end.getFullYear() ? end.getMonth() + 1 : 12;

        for (let month = startMonth; month <= endMonth; month++) {
            const workingDaysInMonth = getWorkingDaysInMonth(year, month);
            daysExcludingFridays.push(workingDaysInMonth);

            // Calculate days worked excluding Fridays
            let daysWorked = 0;
            const firstDay = new Date(year, month - 1, 1);
            const lastDay = new Date(year, month, 0); // Last day of the month

            for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
                if (d >= start && d <= end && d.getDay() !== 5) {
                    daysWorked++;
                }
            }
            daysWorkedExcludingFridays.push(daysWorked);
            totalWorkingDays += daysWorked;

            // Calculate monthly target
            const monthlyTarget = (daysWorked / totalAnnualTarget) * totalAnnualTarget;
            monthlyTargets.push(monthlyTarget);
        }
    }

    const totalTarget = monthlyTargets.reduce((acc, curr) => acc + curr, 0);

    return {
        daysExcludingFridays,
        daysWorkedExcludingFridays,
        monthlyTargets,
        totalTarget
    };
}

// Usage
const result = calculateTotalTarget('2022-01-01', '2023-03-31', 2390);
console.log(result);