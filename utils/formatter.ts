export function formatDate(isoString: any) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-IN', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        hour12: true,
        // timeZoneName: 'short'
    }).format(date);
}