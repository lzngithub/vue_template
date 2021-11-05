import { LOGIN_STATUS, SET_LANGUAGE } from '../mutations'

const login = {
	state: {
		loginStatus: false,
		setLanguage: '',
	},
	getters: {},
	mutations: {
		[LOGIN_STATUS](state, status) {
			state.loginStatus = status
		},
		[SET_LANGUAGE](state, setLanguage) {
			state.setLanguage = setLanguage
		}
	},
	actions: {
		login_status({ commit }, status) {
			commit(LOGIN_STATUS, status)
		},
		set_language({ commit, rootState }, setLanguage) {
			console.log('login', rootState)
			commit(SET_LANGUAGE, setLanguage)
		}
	}
}

export default login
