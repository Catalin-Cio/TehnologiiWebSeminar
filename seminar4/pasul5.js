function increaseSalary(salaries, percent) {
    if (!Array.isArray(salaries)) {
        throw new Error('first parameter must be an array')
    }
    if (typeof percent !== 'number') {
        throw new Error('second parameter must be a number')
    }

    return salaries.map(s => s + (s * percent / 100))
}

try {
    console.log(increaseSalary([2000, 2500, 3000], 10))
    console.log(increaseSalary('notArray', 10))
} catch (err) {
    console.log(err)
}
