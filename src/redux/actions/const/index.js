export const domain = 'https://kwitter-api.herokuapp.com/'

export const headers = {
    'Content-Type': 'application/json',
    accept: 'application/json'
}

export const Response = res => {
    if (res.ok) {
        return res.json()
    }
    return res.json().then(result => {
        throw result
    })
}