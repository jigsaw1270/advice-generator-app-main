let adviceCount = 0;

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        const advice = data.slip.advice;
        document.getElementById('advice-text').innerText = ` "${advice}" ` ;
        adviceCount++;
        document.getElementById('advice-count').innerText = `A d v i c e # ${adviceCount}`;
    })
    .catch(error => {
        console.error('error fetching  advice', error);
        document.getElementById('advice-text').innerText = 'failed to fetch  data'
    });
}