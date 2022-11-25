export const CONFIG = Object.freeze({
    ADMIN_BACKEND_HOST:"http://localhost:8080/",
    // ADMIN_BACKEND_HOST:"http://13.40.112.229:8080/master-service/api/",
    // CLIENT_BACKEND_HOST:"http://localhost:8081/application-service/api/",
    CLIENT_BACKEND_HOST:"http://13.42.11.43:8081/application-service/api/",
    // VERIFY_BACKEND_HOST:"http://localhost:8082/integration-service/api/",
    VERIFY_BACKEND_HOST:"http://3.8.197.170:8082/integration-service/api/",
    // WLH_BACKEND_HOST:"http://localhost:8083/",
    WLH_BACKEND_HOST:"http://18.130.229.56:8083/",
    // DEBUG_MODE:"OFF",
    DEBUG_MODE:"ON",

    baseUrl:"http://localhost:3000/",
    
    ENCRYPT_DECRYPT:{
        SECRET_KEY:"LosClientSecret"
    },
    EMAIL:{      
	    AUTH:{
            username:"velanetpark@gmail.com",
            password:"8508154348"
        },
        // FRONTEND_HOST:"http://localhost:9001/",
        FRONTEND_HOST:"http://13.42.11.43:9001/",
        // BACKEND_HOST:"http://localhost:8081/",
        BACKEND_HOST:"http://13.42.11.43:8081/",
        FRONTEND_EMAIL_VERIFY_LINK:"emailverification/",
        FRONTEND_RESET_PASSWORD_LINK:"resetpassword/",        
        VERIFIED_KEY:"verified",
        FORGOT_PWD_LINK_EXPIRY:24, // in hours
    },
    SMS:{
        HOST:"http://msg.parinhitech.com/api/sendhttp.php?",
        API:"37114AW6BnXsw604b3ac1",
        SENDERID:"NEWMSG",
        ROUTE:"6"
    },
    USER:{
        PROFILE_IMG_PATH:"D://Results"
    },
    DB:{
        // ADMIN_CONNECTION_NAME:"abhl_admin",
        // ADMIN_CONNECTION_DATABASE_TYPE:"postgres",
        // ADMIN_CONNECTION_DATABASE_HOST:"localhost",
        // ADMIN_CONNECTION_DATABASE_PORT: 5432,
        // ADMIN_CONNECTION_DATABASE:"abhl",
        // ADMIN_CONNECTION_USERNAME:"postgres",
        // ADMIN_CONNECTION_PASSWORD:"password",
        // ADMIN_CONNECTION_SCHEMA:"masters",
        // ADMIN_CONNECTION_ENTITY:["dist/admin/**/entities/*.entity.js"],
        // ADMIN_CONNECTION_ENTITY_PREFIX:"los_",
        ADMIN_CONNECTION_NAME:"abhl_admin",
        ADMIN_CONNECTION_DATABASE_TYPE:"postgres",
        ADMIN_CONNECTION_DATABASE_HOST:"karsha-devops.ckrnx54pl5hy.eu-west-2.rds.amazonaws.com",
        ADMIN_CONNECTION_DATABASE_PORT: 5432,
        ADMIN_CONNECTION_DATABASE:"abhl",
        ADMIN_CONNECTION_USERNAME:"los_master_user",
        ADMIN_CONNECTION_PASSWORD:"i0rt@90",
        ADMIN_CONNECTION_SCHEMA:"masters",
        ADMIN_CONNECTION_ENTITY:["dist/admin/**/entities/*.entity.js"],
        ADMIN_CONNECTION_ENTITY_PREFIX:"los_",
        // CLIENT_CONNECTION_NAME:"abhl_client",
        // CLIENT_CONNECTION_DATABASE_TYPE:"postgres",
        // CLIENT_CONNECTION_DATABASE_HOST:"localhost",
        // CLIENT_CONNECTION_DATABASE_PORT: 5432,
        // CLIENT_CONNECTION_DATABASE:"abhl",
        // CLIENT_CONNECTION_USERNAME:"postgres",
        // CLIENT_CONNECTION_PASSWORD:"password",
        // CLIENT_CONNECTION_SCHEMA:"clients",
        // CLIENT_CONNECTION_ENTITY:["dist/**/*.entity{.ts,.js}"],
        // CLIENT_CONNECTION_ENTITY_PREFIX:"los_",
        CLIENT_CONNECTION_NAME:"abhl_client",
        CLIENT_CONNECTION_DATABASE_TYPE:"postgres",
        CLIENT_CONNECTION_DATABASE_HOST:"karsha-devops.ckrnx54pl5hy.eu-west-2.rds.amazonaws.com",
        CLIENT_CONNECTION_DATABASE_PORT: 5432,
        CLIENT_CONNECTION_DATABASE:"abhl",
        CLIENT_CONNECTION_USERNAME:"los_master_user",
        CLIENT_CONNECTION_PASSWORD:"i0rt@90",
        CLIENT_CONNECTION_SCHEMA:"clients",
        CLIENT_CONNECTION_ENTITY:["dist/**/*.entity{.ts,.js}"],
        CLIENT_CONNECTION_ENTITY_PREFIX:"los_",
    }
});
