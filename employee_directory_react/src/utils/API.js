/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import axios from "axios";

/* -------------------------------------------------------------------------- */
/*                              Define Constants                              */
/* -------------------------------------------------------------------------- */

    const queryURL = "https://randomuser.me/api/?key=9CVX-4ZFR-VBQ9-RGS6&ref=vt8vih7j&results=50";
    // APIKEY = "9CVX-4ZFR-VBQ9-RGS6"; 

/* -------------------------------------------------------------------------- */
/*                       Export API Call For Use As Prop                      */
/* -------------------------------------------------------------------------- */

    // Export an object with a "search" method that searches the Giphy API for the passed query
    export default {
        search: function() {
            return axios.get(queryURL);
        }
    };
