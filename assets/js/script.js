import { robots } from "./robots.js";
import { getRobotById ,
         getRobotBySeries ,
         renderCards} from "./profe.js";

console.log(getRobotById('013'));

console.log(getRobotBySeries(4));

renderCards(robots, 'robotsRow')


console.log(robots[0]);

console.log(robots[0].id);
console.log(robots[0].name);
console.log(robots[0].series);


//const {id, name, series } = robots[0];

//console.log(id);
//console.log(name);
//console.log(series);


//const getRobotById = (id = "009") => {
//    return robots.find((robot)=>{
//        return robot.id === id;
//    });
//}

//const getRobotBySeries = (Series=2) => {
//    return robots.filter((robot)=>{
//        return robot.Series === series;
//   })
//}


//console.log(getRobotById("013"));

//const { id , name , series } = getRobotById("013");

//console.log(id);
//console.log(name);
//console.log(series);
