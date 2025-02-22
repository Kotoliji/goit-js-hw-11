
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

export function showImage(reqvest){
    
    if (!reqvest){
      alert("ВВЕДІТЬ ЗАПРОС")
      return;
    }
  
    return axios({
      method: 'get',
      url: "https://pixabay.com/api",
          params:{
              q: reqvest,
              key:'48904272-bbce21e261483c6f45f0aefa4',
              image_type: 'photo',
              orientation:'horizontal',
              safesearch:'true',
              
          },
      }).then(response => {if(response.data.total == 0){iziToast.show({
        title: 'Hey',
        message: "Sorry, there are no images matching your search query. Please try again!",
        color: "red",
        });
        return null;
      }
        // console.log(response.data)  
        const picture = response.data.hits
        return picture
      })
      .catch(error=>{
        console.error("error:"[error]); 
        return null
      })

  }

