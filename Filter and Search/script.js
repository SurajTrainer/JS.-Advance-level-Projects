
// // companies data...

// const companies = [
//     { name: 'GOOGLE', location: 'usa', market: 'tech' },
//     { name: 'MICROSOFT', location: 'japan', market: 'tech' },
//     { name: 'RBI', location: 'india', market: 'finance' },
//     { name: 'TCS', location: 'india', market: 'IT' },
//     { name: 'PATANJALI', location: 'haridwar', market: 'medical' },
// ];

// function renderCompnies(companyArray) {
//     const userlist = document.getElementById('user-list');
//     userlist.textContent = '';


//     companyArray.forEach((company) => {
//         let userli = document.createElement('li');
//         userli.classList.add('company');
//         userli.textContent = ` ${company.name} , location : ${company.location}  ,     market : ${company.market}`
//         userlist.appendChild(userli);
//     })
// }

// renderCompnies(companies);

// const userSearch = document.getElementById('userSearch');
// userSearch.addEventListener('input', function () {
//     let searchAns = userSearch.value.toLowerCase();

//     const filterCompanies = companies.filter((company) => 
//         company.name.toLowerCase().includes(searchAns) ||
//             company.location.toLowerCase().includes(searchAns) ||
//             company.market.toLowerCase().includes(searchAns)

//     )
//     renderCompnies(filterCompanies)
// })


// Creating companies data..

const companies = [
    { name: 'GOOGLE', location: 'usa', market: 'tech' },
        { name: 'MICROSOFT', location: 'japan', market: 'tech' },
        { name: 'RBI', location: 'india', market: 'finance' },
        { name: 'TCS', location: 'india', market: 'IT' },
        { name: 'PATANJALI', location: 'haridwar', market: 'medical' },
];

function  renderCompnies(companyData) {
    let userlist = document.getElementById('user-list');
    userlist.textContent = '';

    companyData.forEach((company) => {
        let userNewlist = document.createElement('li');
        userNewlist.classList.add('company');
        userNewlist.textContent = `${company.name}   ,  location : ${company.location} ,   market : ${company.market}`

        userlist.appendChild(userNewlist);
    })
}

renderCompnies(companies)


let userSearch = document.getElementById('userSearch');

userSearch.addEventListener('input',function(){
    let userSearchAns = userSearch.value.toLowerCase();

       const filterCompanies = companies.filter(comapny => 
        comapny.name.toLowerCase().includes(userSearchAns)||
        comapny.location.toLowerCase().includes(userSearchAns)||
        comapny.market.toLowerCase().includes(userSearchAns)
        )

        renderCompnies(filterCompanies)
})