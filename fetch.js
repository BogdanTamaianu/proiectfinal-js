fetch('https://www.omdbapi.com/?apikey=fced3ba8&s=batman')
.then((success) => { success.json() } )
.then((movies) => { console.log(movies) } )
.catch((error)=>{ console.log(error)});
   const content = document.querySelector('#movies-list');
   // parcurgem userii returnati
   movies.forEach((elem, index) => {
     // afisam userii pe ecran
     content.innerHTML += `
       <p>Numele filmului ${index + 1} este: ${elem.name}</p>
     `
   });
