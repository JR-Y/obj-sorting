import { isNumber, isBoolean } from "util";

export function sortByBoolean(dataSet, dataFieldName, sortChildObject) {
    let newDataSet = dataSet;
    if (sortChildObject === undefined) {
        newDataSet = dataSet.sort((a, b) =>
            isBoolean(a[dataFieldName]) && isBoolean(b[dataFieldName]) ? a[dataFieldName] === b[dataFieldName] ? 0 : a[dataFieldName] ? -1 : 1 : false);
    } else {
        newDataSet = dataSet.sort((a, b) =>
            a[sortChildObject] && b[sortChildObject] && isBoolean(a[sortChildObject][dataFieldName]) && isBoolean(b[sortChildObject][dataFieldName]) ?
                a[sortChildObject][dataFieldName] === b[sortChildObject][dataFieldName] ? 0 : a[sortChildObject][dataFieldName] ? -1 : 1 : false);
    }
    return newDataSet;
}

export function sortByNumber(dataSet, dataFieldName, sortChildObject) {
    let newDataSet = dataSet;
    if (sortChildObject === undefined) {
        newDataSet = dataSet.sort((a, b) =>
            isNumber(a[dataFieldName]) && isNumber(b[dataFieldName]) ? a[dataFieldName] - b[dataFieldName] : false);
    } else {
        newDataSet = dataSet.sort((a, b) =>
            a[sortChildObject] && b[sortChildObject] ? isNumber(a[sortChildObject][dataFieldName]) - isNumber(b[sortChildObject][dataFieldName]) : false)
    }
    return newDataSet;
}

export function sortByDate(dataSet, dataFieldName, sortChildObject) {
    let newDataSet = dataSet;
    if (sortChildObject === undefined) {
        newDataSet = dataSet.sort(
            (a, b) => a[dataFieldName] && b[dataFieldName] ?
                new Date(a[dataFieldName]) - new Date(b[dataFieldName]) :
                false);
    } else {
        newDataSet = dataSet.sort(
            (a, b) => a[sortChildObject] && b[sortChildObject] ?
                new Date(a[sortChildObject][dataFieldName]) - new Date(b[sortChildObject][dataFieldName]) :
                false);
    }
    return newDataSet;
}
export function sortByText(dataSet, dataFieldName, sortChildObject, sortChildObject2) {
    let newDataSet = dataSet;
    if (sortChildObject === undefined) {
        newDataSet = dataSet.sort((a, b) => {
            let valA = a[dataFieldName] ? a[dataFieldName].toUpperCase() : "~";
            let valB = b[dataFieldName] ? b[dataFieldName].toUpperCase() : "~";
            if (valA === "" || valA === null) return 1;
            if (valB === "" || valB === null) return -1;
            if (valA === valB) return 0;
            return valA < valB ? -1 : 1;
        });
    } else if (sortChildObject && sortChildObject2) {
        newDataSet = dataSet.sort((a, b) => {
            let valA = a[sortChildObject] && a[sortChildObject][sortChildObject2] && a[sortChildObject][sortChildObject2][dataFieldName] ? a[sortChildObject][sortChildObject2][dataFieldName].toUpperCase() : "";
            let valB = b[sortChildObject] && b[sortChildObject][sortChildObject2] && b[sortChildObject][sortChildObject2][dataFieldName] ? b[sortChildObject][sortChildObject2][dataFieldName].toUpperCase() : "";
            if (valA === "" || valA === null) return 1;
            if (valB === "" || valB === null) return -1;
            if (valA === valB) return 0;
            return valA < valB ? -1 : 1;
        });
    } else {
        newDataSet = dataSet.sort((a, b) => {
            let valA = a[sortChildObject] && a[sortChildObject][dataFieldName] ? a[sortChildObject][dataFieldName].toUpperCase() : "";
            let valB = b[sortChildObject] && b[sortChildObject][dataFieldName] ? b[sortChildObject][dataFieldName].toUpperCase() : "";
            if (valA === "" || valA === null) return 1;
            if (valB === "" || valB === null) return -1;
            if (valA === valB) return 0;
            return valA < valB ? -1 : 1;
        });
    }
    return newDataSet;
}