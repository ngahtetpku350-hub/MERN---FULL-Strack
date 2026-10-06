const endpoints = {
    posts:{
        list:"/list",
        create:"/create",
        detail:(id) => `/detail/${id}`,
        update:(id) => `/update/${id}`,
        delete:(id) => `/delete/${id}`
    }
}

export default endpoints;