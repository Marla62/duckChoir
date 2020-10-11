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
    if(animal && typeof animal.duckSinging === 'function'){
        choir.push(animal);
        console.log('恭喜加入合唱团');
        console.log(`合唱团已有成员数量${choir.length}`);
    } else {
        console.log('加入合唱团失败');
    }
}

joinChoir(duck);
joinChoir(chicken);
joinChoir(dog);
