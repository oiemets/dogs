export const currentIsoDate = () => new Date().toISOString();

const addZero = (val: number) => (val < 10 ? `0${val}` : `${val}`);

export const getDateFromIso = (iso: string) => {
	const today = new Date(iso);
	const date =
		today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	const time =
		today.getHours() +
		':' +
		addZero(today.getMinutes()) +
		':' +
		addZero(today.getSeconds());
	const dateTime = date + ' ' + time;

	return dateTime;
};

export const getTimeFromIso = (iso: string) => {
	const today = new Date(iso);
	const time = addZero(today.getHours()) + ':' + addZero(today.getMinutes());
	return time;
};
