export const public2 = 'http://srv.xueerqin.net/public-api'
let env = ''
if (process.env.NODE_ENV == 'production') {
    env = 'https://app.xueerqin.net'                          
} else {
    env = 'https://tapp.xueerqin.net'
}
console.log(env)
export const baseUrl = env
