const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const getDateAndMonthWithName = (d) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let dt = new Date(d);
    let date = `${days[dt.getDay()]} ${dt.getUTCDate()} ${month[dt.getMonth()]}`;
    return date;
}

export default capitalize;
