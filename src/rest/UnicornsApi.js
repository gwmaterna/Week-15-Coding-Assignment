// const UNICORNS_ENDPOINT = 'https://crudcrud.com/api/b0b140e9c998489a995dadd499d4cee1/unicorns';
// const UNICORNS_ENDPOINT = 'https://demo0331370.mockable.io/unicorns';
const UNICORNS_ENDPOINT = 'https://635046bb3e9fa1244e43053a.mockapi.io/unicorns_API/unicorns'


class UnicornsApi {  // Making a class to house our http requests
    get = async () => {
        try {
            const resp = await fetch(UNICORNS_ENDPOINT);
            const data = await resp.json();  // Grabbing response data, turning it into json
            return data;
        } catch (e) {
            console.log('There/s an issue with json resp', e);
        }
    }

    put = async (unicorn) => {
        try {
        const resp = await fetch(`${UNICORNS_ENDPOINT}/${unicorn.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(unicorn)
        });
        return await resp.json();
    }   catch(e) {
        console.log('There/s an issue with update unicorn', e);
        }
    } // Above are the 2 methods needed to to send GET and UPDATE requests

    delete = async (unicorn) => {
      try {
          const resp = await fetch(`${UNICORNS_ENDPOINT}/${unicorn.id}`, {
              method: 'DELETE'
          });
          return await resp.json();
      } catch (e) {
          console.log('There/s an issue with delete unicorn', e);
      }

    // delete = async (id) => {
    //     try {
    //       const response = await fetch(UNICORNS_ENDPOINT + "/" + id, {
    //         method: "DELETE",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
    //       const data = await response.json();
    //       return data;
    //     } catch (error) {
    //       console.log("There is an error in the delete method", error);
    //     }
    //   };
    };  
}

export const unicornsApi = new UnicornsApi();
