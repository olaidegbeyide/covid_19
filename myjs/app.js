const table = document.querySelector('.tablebody')
const loadStatistics = async () =>  {
    let coronaDetails = ``
    await fetch('https://api.apify.com/v2/key-value-stores/Eb694wt67UxjdSGbc/records/LATEST?disableRedirect=true')
    .then(res => res.json())
    .then(data => {
        coronaDetails += `
        <tr>
         
          <td><b>${data.infected}</b></td>
          <td><b>${data.recovered}</b></td>
          <td><b>${data.deceased}</b></td>
        </tr>
        `
    })
    table.innerHTML = coronaDetails

}

loadStatistics()

const world_wide = document.querySelector('.table-worldwide')
const loadStatistic = async () =>  {
    let worldDetails = ``
    await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
    .then(res => res.json())
    .then(data => {
        data.map(_data => {
        worldDetails += `
        <tr>
         
          <td>${_data.infected}</td>
          <td>${_data.recovered}</td>
          <td>${_data.deceased}</td>
        </tr>
        `
    })
    world_wide.innerHTML = worldDetails
  })
}

loadStatistic()


