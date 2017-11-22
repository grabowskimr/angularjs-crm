class dataService {
    constructor($http) {
        this.$http = $http;
    }

    getClients() {
        return this.$http.get('http://localhost:3001/clients')
            .then(response => response.data);
    }
    
    getClient(id) {
        return this.$http.get(`http://localhost:3001/clients/${id}`)
            .then(response => response.data)
    }
    getHistory(id) {
        return this.$http.get(`http://localhost:3001/history/${id}`)
            .then(response => response.data.history)
    }

}

export default dataService;