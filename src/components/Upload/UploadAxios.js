import axios from 'axios';

const UploadAxios = axios.create({
	baseURL: 'http://upload.giphy.com/v1/gifs',
	params: { api_key: 'yPBGBogo8InDUxx2SwMeUs8hxPZcbOcu' }
});

export default UploadAxios;