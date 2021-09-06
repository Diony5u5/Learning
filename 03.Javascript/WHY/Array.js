        //扩展操作符 ... 
        let a = [1,2,3];
        let b = [0,...a,4]; //...a 将a数组的元素展开成1，2，3

        console.log(b); // [0,1,2,3,4] , length:5

        let c =1;
        let d =c;
        c++;
        console.log(c);

        //数组去重
        let arr = ["a","b","c","c","c","d","e","a"];
        let cong = [...new Set(arr)]; //["a", "b", "c", "d", "e"]
        console.log(typeof cong); //object

        let str = "asdfasdffds";
        let strAsArr = [...str]; //字符串转数组
        let strNo=[...new Set(strAsArr)]; //使用[...new Set(待去重)]

        console.log(strAsArr);//["a", "s", "d", "f", "a", "s", "d", "f", "f", "d", "s"]
        console.log(strNo);//["a", "s", "d", "f"]

//创建数组
    //一、Array()构造函数 
        let arr2 = new Array(); //创建一个空数组.[]，length为0。
        let arrlen = new Array(10); //创建一个长度为10的数组。传一个Number类型的参数，就是设置length。无法用此方法创建只有一个Number类型元素的数组。
        let arr3 = [,,]; //2个连续的逗号，代表length为2的数组。
        let arrcan = new Array(5,4,3,2,1,"testing,testing"); //传几个参数，就是几个元素。

        console.log(arr2); //[]
        console.log(arr2.length);//0
        console.log(arrlen);
        console.log(arr3);
        console.log(arrcan); //[5, 4, 3, 2, 1, "testing,testing"]

    //二、Array.of()
        let arrof = Array.of(99); 
        let arrof2 = Array.of(99,100,"hello"); 

        console.log(arrof); //[99]
        console.log(arrof2); //[99, 100, "hello"]

    //三、Array.from() 浅拷贝
        let arrsrc = [1,2,3,4,5];
        let arrCopy1 = Array.from(arrsrc); 
        let arrCopy2 = [...arrsrc]; 

        console.log(arrCopy1); //[1,2,3,4,5]
        console.log(arrCopy2); //[1,2,3,4,5]

                //字符串（类数组） 转成 数组（真数组）
        let arrlike = "hk.whygj.xyz";
        let realarr = Array.from(arrlike); 
        console.log(realarr); //["h", "k", ".", "w", "h", "y", "g", "j", ".", "x", "y", "z"]

        let nInt = [1,2,3,4,5];
        let nIntplus1 = Array.from(nInt,x => x+1); 
        let nIntplus2 = Array.from(nInt,function(x){return x+1}); 
      
        console.log(nIntplus1); //[2, 3, 4, 5, 6]
        console.log(nIntplus2); //[2, 3, 4, 5, 6]

        //数组读写
        let aa = ["a",2,3,"b"];
        aa[aa[2]] = aa[0]; 
        console.log(aa); //["a", 2, 3, "a"]

        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        var fruitsx = fruits.entries();
        console.log(fruitsx);

        //检测数组
        let arrayObject = [a,c,d,b];
        console.log(Array.isArray(arrayObject));
  
        let notArray = 322593;
        console.log(Array.isArray(notArray));


        //数组的栈方法push()、pop()


//数组排序
    //reverse() ：简单的数组反转,改变原数组

        let 字母排序 = ["a","z","g","b"];
        console.log(字母排序.reverse()); //['b', 'g', 'z', 'a']
        console.log(字母排序);
        
        let 数字排序 = [4,6,10,5,3];
        console.log(数字排序.reverse()); //[3, 5, 10, 6, 4]
        console.log(数字排序);


    //sort() ：按每个元素的字符串的值，升序排序，改变原数组
        let values = ["a","z","g","b","A"];
        console.log(values.sort()); //['A', 'a', 'b', 'g', 'z'] ，大写字母的值小
        console.log(values);

        let values2 = [4,6,10,5,3];
        console.log(values2.sort()); //[10, 3, 4, 5, 6]，10的字符串值小

        let values3 = [4,6,10,5,3];
        values3 = values3.sort((x,y)=> x>y?1 :x<y?-1:0); //数值按升序排
        console.log(values3);//[3, 4, 5, 6, 10]

        let values4 = [4,6,10,5,3];
        values4 = values4.sort((a,b)=>{
            if(a>b){
                return -1;
            }else if(a<b){
                return 1;
            }else{
                return 0;
            }
        }); //数值按降序排
        console.log(values4); //[10, 6, 5, 4, 3]

        let good = [4,6,10,5,3];

        let g1 = Array.from(good); //浅拷贝
        console.log(g1===good); //false
        console.log(g1.sort((a,b)=>a-b)); //[3, 4, 5, 6, 10] 升序   ※※※※※※※※

        let g2 = [...good]; //浅拷贝
        console.log(g2===good); //false
        console.log(g2.sort((a,b)=>b-a)); //[10, 6, 5, 4, 3] 降序   ※※※※※※※※

        let g3 = good; 
        console.log(g3===good); //true

//操作数组
    //concat()：返回向原数组末尾添加了新元素的数组，不改变原数组。
    let colors = ["red","blue","yellow"];
    let color2 = colors.concat("green",["black","white"]); //打平参数添加到末尾
    console.log(color2); //['red', 'blue', 'yellow', 'green', 'black', 'white']

    //不打平参数的concat() 要用一个变量保存要添加的元素，并设置[Symbol.isConcatSpreadable] : false
    colors = ["red","blue","yellow"];  //重置
    let newColor = ["black","white"];
    let spreadNewColor = colors.concat("green",newColor);
    console.log(spreadNewColor); //['red', 'blue', 'yellow', 'green', 'black', 'white']
    newColor[Symbol.isConcatSpreadable] = false;
    let newNewColor = colors.concat("green",newColor);
    console.log(newNewColor); //['red', 'blue', 'yellow', 'green', [['black', 'white']]

    colors = ["red","blue","yellow"];  //重置
    let moreNewColor = {
        [Symbol.isConcatSpreadable] : true, //将被强制打平
        length:2,
        0:"black",
        1:"white"
    }

    let s = colors.concat(moreNewColor);//强制打平类数组对象moreNewColor
    console.log(s); //['red', 'blue', 'yellow', 'black', 'white']