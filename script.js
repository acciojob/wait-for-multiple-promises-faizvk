//your JS code here. If required.
const output = document.getElementById("output");
const loadingRow = document.getElementById("loading");

// function to generate random time between 1 and 3 seconds
function randomTime() {
  return Math.floor(Math.random() * 2000) + 1000; // 1000 - 3000 ms
}

// create promises
function createPromise(name) {
  const time = randomTime();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time / 1000); // return time in seconds
    }, time);
  });
}

const promise1 = createPromise("Promise 1");
const promise2 = createPromise("Promise 2");
const promise3 = createPromise("Promise 3");

const start = performance.now();

Promise.all([promise1, promise2, promise3]).then((values) => {
  const end = performance.now();
  const totalTime = ((end - start) / 1000).toFixed(3);

  // clear loading row
  loadingRow.remove();

  // create rows for each promise
  values.forEach((time, index) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = `Promise ${index + 1}`;

    const td2 = document.createElement("td");
    td2.textContent = time;

    tr.appendChild(td1);
    tr.appendChild(td2);
    output.appendChild(tr);
  });

  // total row
  const trTotal = document.createElement("tr");

  const tdT1 = document.createElement("td");
  tdT1.textContent = "Total";

  const tdT2 = document.createElement("td");
  tdT2.textContent = totalTime;

  trTotal.appendChild(tdT1);
  trTotal.appendChild(tdT2);
  output.appendChild(trTotal);
});
