Module for sorting javascript json objects.

```javascript
let arr = [
    { id : 2 ,
      name : "test2"
    },
    { id : 89 ,
      name : "test89"
    },
    { id : 2 ,
      name : "test2"
    },
    { id : 56 ,
      name : "test56"
    },
    { id : 77 ,
      name : "test77"
    },
];


- Usecase 1
sortByNumber(dataSet, dataFieldName, sortChildObject)

let arr2 = sortByNumber(arr, "id") 

arr2 = [{id:2,name:"test2"},{id:2,name:"test2"},{id:56,name:"test56"},{id:77,name:"test77"},{id:89,name:"test89"}]


- Usecase 2
sortByText(dataSet, dataFieldName)

let arr2 = sortByText([{name:"peter"},{name:"simon"},{name:"albert"}], "name")

arr2 = [{name:"albert"},{name:"peter"},{name:"simon"}]


- Usecase 3
sortByText(dataSet, dataFieldName, sortChildObject, sortChildObject2)

let arr2 = sortByText([{obj:{name:"peter"}},{obj:{name:"simon"}},{obj:{name:"albert"}}], "name","obj")

arr2 = [{obj:{name:"albert"}},{obj:{name:"peter"}},{obj:{name:"simon"}}]

```
and so on...