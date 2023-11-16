export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '4e758ad8b9mshf5d93fbb3adac22p15a104jsn5378fb6c8d1f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
    {headers: headers
    });
    const result = await response.json();
    return result;
}