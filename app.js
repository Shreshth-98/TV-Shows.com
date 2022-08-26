const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    // console.log(form.elements.query.value); this is how you get input from form
    const userSearchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${userSearchTerm}`);
    makeImages(res.data);
    form.elements.query.value = '';
    

})

const makeImages = (shows) => {
    for( let result of shows){
        if(result.show.image){
        const img = document.createElement('IMG');
        img.src= result.show.image.medium;
        document.body.append(img);
    }}
}