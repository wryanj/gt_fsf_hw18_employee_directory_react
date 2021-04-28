/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import axios from "axios";

/* -------------------------------------------------------------------------- */
/*                              Define Constants                              */
/* -------------------------------------------------------------------------- */

    /*
        Key & number of users set directly to axios URL below

        API Key = 9CVX-4ZFR-VBQ9-RGS6
        Hardcoding to return 20 users
    */

/* -------------------------------------------------------------------------- */
/*                       Export API Call For Use As Prop                      */
/* -------------------------------------------------------------------------- */

    // Export an object with a "getUsers method" to call in directory component
    // eslint-disable-next-line
    export default {
        getUsers: function() {
            return axios.get(
                "https://randomuser.me/api/?key=9CVX-4ZFR-VBQ9-RGS6&ref=vt8vih7j&results=20"
            );
        }
    };
