const UserRepository = require("../repository/userRepository");
const userRepository = new UserRepository();

/**
 * User service implementation
 */
class UserService {

    /**
     * Retrieve all users
     * 
     * @returns []
     */
    fetch() {
        return [
            {
                name: 'John',
                lastname: 'Smith'
            },
            {
                name: 'Victor',
                lastname: 'De la myinda'
            },
            {
                name: 'Stephane',
                lastname: 'Del Dosa'
            }
        ]
    }
    /**
     * Create user account
     * 
     * @param {*} user 
     * @returns user
     */
    create(user) {
        if (user.lastname == undefined || !user.lastname)
            throw new Error("Le prenom n'est peut être null");

        if (user.name == undefined || !user.name)
            throw new Error("Le nom n'est peut être null");

        if (user.email == undefined || !user.email)
            throw new Error("Votre renseigné votre adresse email");

        const user = userRepository.findByEmail(user.email);
        if (user)
            throw new Error("Un compte existant avec le même email");


        return userRepository.create(user);
    }
    login(email, password) {
        const user = userRepository.findByEmail(email);
        if (!user)
            throw new Error("le compte inexistant");

        if (password !== user.password)
            throw new Error("mot de passe incorrect");

        return user;
    }
}

module.exports = UserService;