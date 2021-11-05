import axios from 'axios'
axios.defaults.timeout = 3000

// 设置 post put 默认Content-Type为application/json
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'

// http request 拦截器
axios.interceptors.request.use(
	(config) => {
		// eslint-disable-next-line max-len
		const authorization = ''
		config.headers.Authorization = authorization

		// post put方法时，将对象转换为string类型
		if (config.method === 'post' || config.method === 'put') {
			config.data = JSON.stringify(config.data)
		}
		return config // 只有return config后，才能成功发出请求
	},
	(error) => {
		// 请求错误时做的动作
		return Promise.reject(error)
	}
)

// http reponse 拦截器
axios.interceptors.response.use(undefined, (error) => {
	console.log(error)
	const res = error.response
	switch (res && res.status) {
		case 401:
			console.log('用户未登录或token过期')
			break
		case 403:
			console.log('你没有操作权限')
			break
		case 404:
			console.log('找不到资源')
			break
		case 500:
			console.log('服务器错误')
			break
		default:
			break
	}
	return Promise.reject(error.response.data)
})

export default axios
