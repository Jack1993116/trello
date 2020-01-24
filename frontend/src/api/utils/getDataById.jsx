export const getDataById = (datas, id) => {
    for (var i = 0; i < datas.length; i++) {
        if (datas[i].id == id) {
            return datas[i];
        }
    }
    return {};
}

export const getDataIdById = (datas, id) => {
	for (var i = 0; i < datas.length; i++) {
        if (datas[i].id == id) {
            return i;
        }
    }
    return i;
}