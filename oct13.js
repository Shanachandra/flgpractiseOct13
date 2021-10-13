
let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi",
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin",
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C",
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia",
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
    capital: "Reykjavik",
    }]

function displayData()
{
    var div=document.createElement('div')
        div.classList.add('outerdiv')
        var container=document.createElement('div')
        container.classList.add('container')
        var row=document.createElement('div')
        row.classList.add('row')
       
       
    for(let i=0;i<countriesInfo.length;i++)
    {
     
        var column=document.createElement('div')
        column.classList.add('colstyle')
        column.classList.add('col-lg-4')
        column.classList.add('col-md-6')
        column.classList.add('col-sm-12')
        column.classList.add('col-8')
        var card=document.createElement('div')
        card.classList.add('card')
        card.classList.add('h-200')
        card.setAttribute('style','width: 18rem')
        
        var img=document.createElement('img')
        img.classList.add('card-img-top')
        img.setAttribute('src',countriesInfo[i].flag)
        img.setAttribute('style','width:100%')
        var cardbody=document.createElement('div')
        cardbody.classList.add('card-body')
        var name=document.createElement('p')
        name.innerHTML=`<b>Name</b>: ${countriesInfo[i].name}`
        var population=document.createElement('p')
        population.innerHTML=`<b>Population</b>: ${countriesInfo[i].population}`
        var region=document.createElement('p')
        region.innerHTML=`<b>Region</b>: ${countriesInfo[i].region}`
        var capital=document.createElement('p')
        capital.innerHTML=`<b>Capital</b>: ${countriesInfo[i].capital}`
        cardbody.append(name,population,region,capital)
        card.append(img,cardbody)
        column.append(card)
        
        row.append(column)       
    }
    container.append(row)
    div.append(container)
    document.body.append(div)

}
displayData()