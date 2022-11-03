var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const errorButton = document.querySelector('button')

const rollbarCritical = () => {
    axios
    .post('/test', { test: null })
    .then((res) => rollbar.info('User clicked the bad button'))
    .catch((err) => console.log(err))

    errorButton.innerText = 'INSTALLING VIRUS, STEALING YOUR MONEY'
}

errorButton.addEventListener('click', rollbarCritical)