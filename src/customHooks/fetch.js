const fetchData = async (url, method = 'GET', body = null) => {

    try {

        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        if (body) {
            options.body = JSON.stringify(body);
        }

        try {
            const resData = await fetch(url, options);
            const data = await resData.json();
            return data;
        } catch (error) {
            console.log(error);
            
        }


    } catch (error) {
        console.error('Error fetching data: ', error);

    }

}

export default fetchData;