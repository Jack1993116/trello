export const getDataById = (datas, id) => {
    for (var i = 0; i < datas.length; i++) {
        if (datas[i].id == id) {
            return datas[i];
        }
    }
    return {};
}