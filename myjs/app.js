const table = document.querySelector('.tablebody')
const loadStatistics = async () => {
  let coronaDetails = ``
  await fetch('https://api.apify.com/v2/key-value-stores/Eb694wt67UxjdSGbc/records/LATEST?disableRedirect=true')
    .then(res => res.json())
    .then(data => {
      coronaDetails += `
        <tr>
          <td><b>${ numberWithCommas(data.infected)}</b></td>
          <td><b>${numberWithCommas(data.recovered)}</b></td>
          <td><b>${numberWithCommas(data.deceased)}</b></td>
        </tr>
        `
    })
  table.innerHTML = coronaDetails

}

loadStatistics()


var infected = document.querySelector('.infected')
var recovered = document.querySelector('.recovered')
var deceased = document.querySelector('.deceased')


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const loadStatistic = async () => {
  await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
    .then(res => res.json())
    .then(data => {
      
      let _infected = data.filter(o => o.infected).map(o => o.infected).reduce((a, b) => a + b)
      let _recovered = data.filter(o => o.recovered && o.recovered !== "NA").map(o => o.recovered).reduce((a, b) => a + b)
      let _deceased = data.filter(o => o.deceased && o.deceased !== "NA").map(o => o.deceased).reduce((a, b) => a + b)

      infected.innerHTML = `<b>${numberWithCommas(_infected)}</b>`
      recovered.innerHTML = `<b> ${numberWithCommas(_recovered)}</b>`
      deceased.innerHTML = `<b> ${numberWithCommas(_deceased)} </b> `

    })
}


loadStatistic();


const select_country = document.getElementById('myselect');

const loadCountries = async () => {
        var html = ``
    await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.map(_data => {
            html += `<option value=${_data.country}> ${_data.country} </option>`
            
        })
       select_country.innerHTML = html
        
     
    })
   
}

loadCountries();


select_country.addEventListener('change',  () => {
  alert(`${mydata.country}`);
  })





