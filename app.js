const name = document.querySelector(".name");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const desc = document.querySelector(".desc");
const searchBtn = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];
fetch('https://fakestoreapi.com/products').then(
		response => response.json()
).then(
		product => {
			console.log(product);
			console.log(product[0].title);
			console.log(product[19].rating.rate);
		}
)
fetch('https://fakestoreapi.com/carts').then(
		response =>response.json()
).then(	
		cart => {
			console.log(cart);
			console.log(cart[cart.length-1].date);
		}
)

searchBtn.addEventListener("click",()=>{
	let city = input.value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	data=>{
		console.log(data);
		console.log(data.name);
		console.log(data.weather[0].description);
		console.log(data.weather[0].main.temp);
		console.log(data.wind.speed);
		name.innerText = "Country:"+data.name;
		temp.innerText = "Temprature:"+data.main.temp;
		wind.innerText = "Wind speed:"+data.wind.speed;
		desc.innerText = "Description:"+data.weather[0].description;
		width="300px";
		switch(data.weather[0].main){
			case "Clouds":
				doument.getElementsByTagName('img')[0].
				src="THE.png";
				break;
		}
	}
)
});