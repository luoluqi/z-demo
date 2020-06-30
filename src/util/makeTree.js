export default ({list, parentId, parentIdField, idField}) => {
    var make = (list, pid) => {
        var arr = []
        for (var item of list) {
            if (item[parentIdField] == pid) {
                item.children = make(list, item[idField])
                arr.push(item)
            }
        }
        return arr
    }
    return make(list, parentId)
}
