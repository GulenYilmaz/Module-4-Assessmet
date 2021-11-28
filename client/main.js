const picturesContainer = document.querySelector('#picture-Container');

const form = document.querySelector('form');

const baseURL = `http://localhost:4000/api/movies`;

const picturesCallback = ({ data: pictures }) => displaypictures(pictures)
const errCallback = err => console.log(err.response.data);


const getAllpictures = () => axios.get(baseURL).then(picturesCallback).catch(errCallback)

const deletepictures = id => axios.delete(`${baseURL}/${id}`).then(picturesCallback).catch(errCallback)


