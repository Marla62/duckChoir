// 一只鸭子对象
const duck = {
    duckSinging: function (){
        console.log('嘎嘎嘎')
    }
}
// 一只鸡对象
const chicken = {
    duckSinging: function (){
        console.log('嘎嘎嘎');
    }
}

// 一只鸡对象
const dog = {
    duckSinging: function (){
        console.log('嘎嘎嘎');
    }
}

// 加入合唱团
let choir = []; // 合唱团

let joinChoir = function (animal) {
    choir.push(animal);
    console.log('恭喜加入合唱团');
    console.log(`合唱团已有成员数量${choir.length}`);
}

joinChoir(duck);
joinChoir(chicken);
joinChoir(dog);
