let IS_PROD = true;

const server = IS_PROD ?
    "https://apnabackend-puce.vercel.app/" :

    "http://localhost:8000"

    
export default server;