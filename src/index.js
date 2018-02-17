import { Timer } from './js/timer';
import { Shape, Rectangle, Circle } from './js/shape';
import './css/main.scss';

$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

const rectangle = new Rectangle;
const circle = new Circle;

rectangle.draw();
circle.draw();

const t1 = new Timer(1, 2, 3);
const t2 = new Timer(4, 5, 6);
const t3 = new Timer(7, 8, 9);

console.log('t1: ', t1);
console.log('t2: ', t2);
console.log('t3: ', t3);

const stopwatch = new Timer(0, 0, 0);
const startBinded = stopwatch.start.bind(stopwatch);
const stopBinded = stopwatch.stop.bind(stopwatch);
const getTimeBinded = stopwatch.getTime.bind(stopwatch);
const timeToNYBinded = Timer.timeToNY.bind(Timer);

document.querySelector('#startBtn').addEventListener('click', startBinded);
document.querySelector('#stopBtn').addEventListener('click', stopBinded);
document.querySelector('#getTimeBtn').addEventListener('click', getTimeBinded);
document.querySelector('#toNY').addEventListener('click', timeToNYBinded);