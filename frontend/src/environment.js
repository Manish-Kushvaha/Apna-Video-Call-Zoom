let IS_PROD = true;

const server = IS_PROD ?
    "https://backend-dun-six-45.vercel.app/" :

    "http://localhost:8000"

    
export default server;