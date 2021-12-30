const formatDate = (date) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date(date);
    const currentMonth = Number(date[5]+date[6])-1;
    return `${weekday[d.getUTCDay()]}, ${date[8]}${date[9]} ${month[currentMonth]}`
}

export default formatDate;