
import {showImage} from "./js/pixabay-api"
import {AddImage} from "./js/render-function"

// const allpicture = document.querySelector('.allPicture')
// export {allpicture}

const button = document.querySelector(".imageButton");



const input = document.querySelector(".inputs")

button.addEventListener('click',()=> {

    const reqvest = input.value;

    showImage(reqvest)
    .then(pictures => {
        console.log(pictures);
        AddImage(pictures)
    })
    .catch(error => console.log(error))
});
