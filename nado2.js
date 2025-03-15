<head><meta charset="UTF-8"></head><pre style="caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; widows: auto; word-spacing: 0px; -webkit-tap-highlight-color: rgba(26, 26, 26, 0.3); -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; text-decoration: none; overflow-wrap: break-word; white-space: pre-wrap;">  (function () {

  const second = 1000,

        minute = second * 60,

        hour = minute * 60,

        day = hour * 24;
         let today = new Date(),

      dd = String(today.getDate()).padStart(2, "0"),

      mm = String(today.getMonth() + 1).padStart(2, "0"),

      yyyy = today.getFullYear(),

      nextYear = yyyy + 1,

      dayMonth = "03/23/",  //дата окончания

      date = dayMonth + yyyy;

  

  today = mm + "/" + dd + "/" + yyyy;

  if (today &gt; date) {

    date = dayMonth + nextYear;

  }
   const countDown = new Date(date).getTime(),

      x = setInterval(function() {    

        const now = new Date().getTime(),

              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),

          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),

          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),

          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance &lt; 0) {

          document.getElementById("headline").innerText = "Акция!";

          document.getElementById("countdown").style.display = "none";

          document.getElementById("content").style.display = "block";

          clearInterval(x);

        }

        //seconds

      }, 0)

  }());
   var divToggleVis = document.getElementById('spoiler_text');

var button = document.getElementById('spoiler_button');

button.onclick = function() {

    if (divToggleVis.className === 'fadeout') {

        divToggleVis.className = 'fadein';

    } else {

        divToggleVis.className = 'fadeout';

    }

    if (button.innerHTML === 'узнать') {

        button.innerHTML = 'скрыть';

    } else {

        button.innerHTML = 'узнать';

    }

};</pre>