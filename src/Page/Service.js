import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class Service{
	
	//constructor(){}

	getCustomers() {
        console.log("get customers");
		const url = `${API_URL}/api/sib/`;
		return axios.get(url).then(response => response.data);
	}

	getCustomersByURL(link){
		const url = `${API_URL}${link}`;
		return axios.get(url).then(response => response.data);
	}

	getCustomer(pk) {
		const url = `${API_URL}/api/sib/${pk}`;
		return axios.get(url).then(response => response.data);
	}

	deleteCustomer(customer){
		const url = `${API_URL}/api/sib/${customer.pk}`;
		return axios.delete(url);
	}

	createCustomer(customer){
		const url = `${API_URL}/api/sib/`;
		return axios.post(url,customer);
	}

	updateCustomer(customer){
		const url = `${API_URL}/api/sib/${customer.pk}`;
		return axios.put(url,customer);
	}
}