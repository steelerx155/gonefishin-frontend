export const addDestination = (data) => {

        return (dispatch) => {
            fetch('"http://localhost:3000/api/v1/destinations/"', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then(response => response.json(dta))



        }
    }
