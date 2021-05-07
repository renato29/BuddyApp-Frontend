
 const getBreeds = async () => {
     
  const BaseUrl = 'https://api.thedogapi.com/v1/breeds';
  const res = await fetch(BaseUrl);

  if(!res.ok) { 
    const { BaseUrl, status, statusText } = res;
    throw Error(`Error en getBreeds ${status} ${statusText} ${BaseUrl}`)
  }
  const breeds = await res.json();
  return breeds;
            
}
export default getBreeds;

