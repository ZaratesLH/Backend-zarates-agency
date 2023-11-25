const { genSaltSync, hashSync } = require( 'bcrypt' );

const UserModel = require( '../models/User' );


const createDefaultUsers = async () => {
    const pass = ')947W*euG8^E';

    // Encriptar la contrasenia
    const salt = genSaltSync();                 

    try {
        const count = await UserModel.estimatedDocumentCount();

        if( count > 0 ) return;

        // Crea usuarios por defecto
        const users = await Promise.all([
            new UserModel({
                name: "Luis Zarate",
                username: "luiszarate@zarateagency.co",
                password: hashSync( pass, salt ),
                role: 'superadmin'
            }).save(),
            new UserModel({
                name: "Hernan Zarate",
                username: "hernan@zarateagency.co",
                password: hashSync( pass, salt ),
                role: 'admin'
            }).save(),
            new UserModel({
                name: "Maicol",
                username: "maicol@zarateagency.co",
                password: hashSync( pass, salt ),
                role: 'registered'
            }).save()
        ]);

        console.log( users );

    } 
    catch ( error ) {
        console.error( error );
    }

}

module.exports = {
    createDefaultUsers
}