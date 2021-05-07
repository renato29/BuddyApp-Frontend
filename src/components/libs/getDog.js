
 const getDog = async (breedId) => {

  const url = !breedId || breedId === 0  ? 'https://api.thedogapi.com/v1/images/search' :
   'https://api.TheDogAPI.com/v1/images/search?breed_ids='+ breedId;

  const res = await fetch(url);

  if(!res.ok) { 
     const { url, status, statusText } = res;
     throw Error (`Error: ${status} ${statusText} ${url}`)
  }
  
  let [data] = await res.json();
  
  let { url: images , breeds: [breed] } = data;
  
  if(!breed) { 
    breed = {
      id: 0,
      name: 'Breed undefined'
    }
  }
  
  const dog = {
    images,
    breed,
  }
       
  return dog;
}

export default getDog;

