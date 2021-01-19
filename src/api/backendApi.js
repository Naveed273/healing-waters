import axios from 'axios';
export default axios.create({
	//https does not work with json server
	// baseURL: 'https://192.168.43.54:3001/'
	//baseURL: 'http://192.168.43.54:3001/',
	// baseURL: 'https://api.yelp.com/v3/businesses',
	 baseURL: 'https://healing-waters.herokuapp.com/api',
	// baseURL: 'http://localhost:3001/rooms',
	// headers: {
	// 	Authorization:
	// 		'Bearer aHF2qERzFIyIKEcy6SlhO01955Qr5jm31FgciA1waYvBBzSk_aWgKxSVgiUtAiAFp3sGwSelUTYn0DihKzOg1dgCNguSO25j7_6vivgdVXLok9LFjaJgZ5E2fsuWX3Yx',
	// },
});
