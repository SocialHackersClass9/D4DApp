export default {
    get: function (url) {
        const fullUrl = process.env.REACT_APP_API_URL + url;
        return new Promise((resolve, reject) => {
            fetch(fullUrl, {
            }).then(res => {
                return res.json();
            }).then(data => {
                resolve(data);
            });
        });
    },
    post: function (url, data) {
        const fullUrl = process.env.REACT_APP_API_URL + url;
        return new Promise((resolve, reject) => {
            fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(res => {
                return res.json();
            }).then(data => {
                resolve(data);
            });
        });

    },
    postForm: function (url, formData) {
        const fullUrl = process.env.REACT_APP_API_URL + url;
        return new Promise((resolve, reject) => {
            fetch(fullUrl, {
                method: 'POST',
                headers: {
                },
                body: formData
            }).then(res => {
                return res.json();
            }).then(data => {
                resolve(data);
            });
        });

    }
}
