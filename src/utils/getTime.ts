export const currentIsoDate = () => new Date().toISOString();

const addZero = (val: number) => (val < 10 ? `0${val}` : `${val}`);

const month = [
	'jan',
	'feb',
	'mar',
	'apr',
	'may',
	'jun',
	'jul',
	'aug',
	'sep',
	'oct',
	'nov',
	'dec',
];

export const getDateFromIso = (iso: string) => {
	const today = new Date(iso);
	const date =
		addZero(today.getDate()) +
		' ' +
		// addZero(today.getMonth() + 1) +
		month[today.getMonth()] +
		' ' +
		today.getFullYear();
	const time =
		addZero(today.getHours()) +
		':' +
		addZero(today.getMinutes()) +
		':' +
		addZero(today.getSeconds());
	const dateTime = time + ' - ' + date;

	return dateTime;
};

export const getTimeFromIso = (iso: string) => {
	const today = new Date(iso);
	const time = addZero(today.getHours()) + ':' + addZero(today.getMinutes());
	return time;
};
