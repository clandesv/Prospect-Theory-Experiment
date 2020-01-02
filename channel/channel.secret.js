/**
 * # Channel secret file
 * Copyright(c) 2019 camille <clandesvmail.uni-mannheim.de>
 * MIT Licensed
 *
 * The file must return a secret key for signing all cookies set by server
 *
 * The secret key can be stored here directly or loaded asynchronously from
 * another source, e.g a remote service or a database.
 *
 * http://www.nodegame.org
 * ---
 */
module.exports = function(settings, done) {
    return 's 2zH3qA5boMnUQ';

    // Example: return key asynchronously

    // loadKeyFromServer(function(err, key) {
    //     done(err, key);
    // });
};
