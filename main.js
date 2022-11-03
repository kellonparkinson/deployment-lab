// var Rollbar = require('rollbar')
// var rollbar = new Rollbar({
//   accessToken: process.env.ROLLBAR_TOKEN,
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// })

const errorButton = document.querySelector('button')

const rollbarCritical = () => {
  errorButton.textContent = 'INSTALLING VIRUS, STEALING YOUR MONEY'

    axios
    .post('/test', { test: "test" })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

errorButton.addEventListener('click', rollbarCritical)