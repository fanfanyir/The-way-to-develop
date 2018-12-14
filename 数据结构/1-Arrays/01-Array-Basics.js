// var arr = [100,99,66];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// arr[0] = 90;
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// 数组最大的优点：快速查询。 arr[2]
// 数组最好应用于“索引有语意”的情况

class Array {
    constructor(data){
        this.data = [];
        this.data.length = data;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    // 获取数组的容量
    getCapacity(){
        return this.data.length;
    }

    // 返回数组是否为空
    isEmpty(){
        return this.size == 0;
    }

    // 向所有元素后添加一个新元素
    addLast(e){
        this.add(this.size, e)
    }

    // 向所有元素前添加一个新元素
    addFirst(e){
        this.add(0, e)
    }

    // 在第 index 个位置插入一个新元素 e
    add(index, e){
        if(this.size == this.data.length){
            throw new Error("Addlast failed. Array is full")
        }
        console.log(this.size,index)

        if(index < 0 || index > this.size){
            throw new Error("Addlast failed. Require index >= 0 && < size")
        }

        for(let i = this.size - 1; i >= index ; i--){
            this.data[i+1] = this.data[i]
        }

        this.data[index] = e
        this.size ++
    }

}

var arrsr = new Array(10);
arrsr.addLast(1);
console.log(arrsr)
arrsr.add(0,123);
console.log(arrsr)
arrsr.getCapacity()
console.log(arrsr)
