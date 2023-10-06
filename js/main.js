
	let elInp = document.querySelector('.inp')
function fn(){
fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${elInp.value}&format=json&u=f`,{

	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43a6c50441mshbac199b5aa179f0p1da1c1jsn14b18e37d994',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
})
.then((res)=> res.json())
.then((data)=> {

	document.querySelector('.wrapper').innerHTML = ''
	document.querySelector('.wrapper').innerHTML = `
	<div class="card" style="width: 18rem;">
			<img src="https://www.creativefabrica.com/wp-content/uploads/2021/03/31/weather-icon-illustration03-Graphics-10205167-1.jpg" class="card-img-top" alt="...">
			<div class="card-body">
			  <h5 class="card-title"><b>LOCATION: </b>${data.location.country}</h5>
			  <h5 class="card-title"><b>REGION: </b>${data.location.city}</h5>

			  <p class="card-text"><b>GRADUS: </b>${data.current_observation.condition.temperature}<sup>O</sup></p>
			  <p class="card-text"><b>DIRECTION:</b>: ${data.current_observation.wind.direction}</p>
			  <p class="card-text"><b>SITUTION:</b>: ${data.current_observation.condition.text}</p>
			  <p href="#" ><b>WIND: </b>${data.current_observation.wind.speed}</p>
			</div>
		  </div>
	
	`

})



	
}