const cityName = document.getElementById('cityName');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');

const temp_val = document.getElementById('temp_val');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const data_hide = document.querySelector('.middle_layer');

const getinfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Enter City Name To Get Update`;
        data_hide.classList.add('data_hide');
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d97dab67134c5c835c86aee2b48f0c50`;
            const response = await fetch(url);
            // console.log("done");
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempmood = arrData[0].weather[0].main;

            // condition sunny or rainy
            if(tempmood == "clear")
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempmood == "clouds")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempmood == "Rain")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

            data_hide.classList.remove('data_hide');

            
        }catch
        {
            city_name.innerText = `Enter Valid City Name `;
             data_hide.classList.add('data_hide');
        }
    }

}
submitbtn.addEventListener('click', getinfo);