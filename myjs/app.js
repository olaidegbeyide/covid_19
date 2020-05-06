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



var _infected = document.querySelector('.infected')
var _recovered = document.querySelector('.recovered')
var _deceased = document.querySelector('.deceased')
var arr = [];

const loadStatistic = async () =>  {
    await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
    .then(res => res.json())
    .then(data => {
  let infected_cases = data.filter(mydata => mydata.infected).map(mydata => mydata.infected && mydata.infected !== 'NA' ).reduce((a,b) => a + b);
  let recovered_cases = data.filter(mydata => mydata.recovered).map(mydata => mydata.recovered && mydata.recovered !== 'NA' ).reduce((a,b) => a + b);
  let deceased_cases = data.filter(mydata => mydata.deceased).map(mydata => mydata.deceased && mydata.deceased !== 'NA' ).reduce((a,b) => a + b);
  
  _infected.innerHTML = infected_cases;
  _recovered.innerHTML = recovered_cases;
  _deceased.innerHTML = deceased_cases;
})

}

loadStatistic()


