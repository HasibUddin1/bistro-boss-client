/**
 * -------------------
 *  BASIC
 * -------------------
 * 1. do not show the link to them who should not see it only show to the person/types of user who should see it.
 * 2. Do not allow to visit the link by typing on the url. use AdminRoute to check if the user is admin or not. If the user is not admin then send the user to the login page or any route
 * 
 * -----------------------
 *  TO SEND DATA
 * -----------------------
 * 1. verify jwt token. If possible use axios to send jwt token to the server
 * 2. If it is an admin activity, make sure only admin user is posting data by using verifyAdmin
*/