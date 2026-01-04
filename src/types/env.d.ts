declare global{
    namespace NodeJS{
        interface ProcessEnv{
            NODE_ENV:'development' | 'production',
            PORT:string,
            URI:string,
            JWT_SECRET:string
        }
    }
}

export {}