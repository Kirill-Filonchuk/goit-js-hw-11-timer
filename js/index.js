class CountdownTimer {

  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.intervalId = null;
    this.timerIsActiv = false;
  }

   
    placeOfTimer() {
        const timerPlace = document.querySelector(`${this.selector}`);
    
        const daysTime = timerPlace.querySelector("[data-value='days']");
        const hoursTime = timerPlace.querySelector("[data-value='hours']");
        const minsTime = timerPlace.querySelector("[data-value='mins']");
        const secsTime = timerPlace.querySelector("[data-value='secs']");
        const alert = timerPlace.querySelector(".alert");

        return { daysTime, hoursTime, minsTime, secsTime, alert };
    }
     
  init() {

    this.intervalId=setInterval(() => {
        const startTime = Date.now();
        const deltaTime = this.targetDate - startTime;
        
      if (deltaTime <= 0) {
        return this.stop()
      }
  
        const time = this.getTimeComponent(deltaTime);
        this.updateClockFace(time);

    }, 1000);
  }
  
    stop() {
        const {alert}=this.placeOfTimer()
        clearInterval(this.intervalId);

        const time = this.getTimeComponent(0);
        this.updateClockFace(time);
        const numTimer = +(this.selector.split("sl")[0].match(/\d+/));
      
        return alert.textContent=`The timer № ${numTimer} is time out!`
  }

  getTimeComponent(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs };
  }

   pad(value) {
    return String(value).padStart(2,'0')
  }
  
    updateClockFace({ days, hours, mins, secs }) {
        const { daysTime, hoursTime, minsTime, secsTime } = this.placeOfTimer()
        
        daysTime.textContent = `${days}`;
        hoursTime.textContent = `${hours}`
        minsTime.textContent = `${mins}`
        secsTime.textContent=`${secs}`
   }

};
///////////Start timers///////////////////////////////////////////////////////////////////////////////////////////
// an instance with timer 1 settings objects
const countDownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

countDownTimer.init();


// an instance with timer 2 settings objects
const countDownTimer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Sep 17, 2019'),
});

countDownTimer2.init()
