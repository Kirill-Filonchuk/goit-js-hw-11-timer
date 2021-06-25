

class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.intervalId = null;
    this.timerIsActiv = false;
  }

  placeOfTimer() {
    return document.querySelector(`${this.selector}`)
  }

  init() {

    this.intervalId=setInterval(() => {
      const startTime = Date.now();
      const deltaTime = this.targetDate - startTime;
      if (deltaTime <= 0) {
        return this.stop()
      }
      // console.log(deltaTime);
      const time = this.getTimeComponent(deltaTime);
      this.updateClockFace(time)
      // console.log(this.getTimeComponent(deltaTime));
    }, 1000);
  }
  
  stop() {
    clearInterval(this.intervalId);
        const time = this.getTimeComponent(0);
    this.updateClockFace(time);
    const numTimer= +(this.selector.split("sl")[0].match(/\d+/));
        return refs.alert.textContent=`Время таймера № ${numTimer} вышло!`
  }

  getTimeComponent(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    //  console.log(`${days}:${hours}:${mins}:${secs}`);
    return { days, hours, mins, secs };
  }

   pad(value) {
    return String(value).padStart(2,'0')
  }
  
  updateClockFace({ days, hours, mins, secs }) {
    refs.daysTime.textContent = `${days}`;
    refs.hoursTime.textContent = `${hours}`
    refs.minsTime.textContent = `${mins}`
    refs.secsTime.textContent=`${secs}`
   }

};

// экземпляр с объектами настроек
const countDownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

countDownTimer.init()

// местоположение таймера 1
const TIMER_1 = countDownTimer.placeOfTimer();
console.log(TIMER_1);

const refs = {
  daysTime: TIMER_1.querySelector("[data-value='days']"),
  hoursTime: TIMER_1.querySelector("[data-value='hours']"),
  minsTime: TIMER_1.querySelector("[data-value='mins']"),  
  secsTime: TIMER_1.querySelector("[data-value='secs']"),
  alert: document.querySelector(".alert")
}
// console.log(refs.daysTime);
// console.log(refs.hoursTime);
// console.log(refs.minsTime);
// console.log(refs.alert);

// экземпляр с объектами настроек
// const countDownTimer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Jul 17, 2022'),
// });

// countDownTimer2.init()

// местоположение таймера 1
// const TIMER_2 = countDownTimer.placeOfTimer();
// console.log(TIMER_2);

// const refs2 = {
//   daysTime: TIMER_2.querySelector("[data-value='days']"),
//   hoursTime: TIMER_2.querySelector("[data-value='hours']"),
//   minsTime: TIMER_2.querySelector("[data-value='mins']"),  
//   secsTime: TIMER_2.querySelector("[data-value='secs']"),
//   alert: document.querySelector(".alert")
// }


// Для подсчета значений используй следующие готовые формулы, где `time` - разница
// между `targetDate` и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
let time = 10
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);