import langActionType from './lang.action.type';

export const changeLang = (lang) => {
	return {
		type: langActionType.CHANGE,
		language: lang
	}
}