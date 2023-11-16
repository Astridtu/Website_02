const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e758ad8b9mshf5d93fbb3adac22p15a104jsn5378fb6c8d1f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
export async function fetchCars() {
    const headers = {
        
    }
    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {headers: headers
        'X-RapidAPI-Key': '4e758ad8b9mshf5d93fbb3adac22p15a104jsn5378fb6c8d1f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    });
    const result = await response.json();
    return result;
}