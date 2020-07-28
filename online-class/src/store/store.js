import Vue from 'vue';
import Vuex from 'vuex';
import mixin from '../mixin';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        user:{
            id : null ,
            first_name : null,
            last_name : null,
            username : null ,
            token : null,
            isLoggedIn : false
        },

        classes : {
            asAdmin : [] ,
            asParticipant : []
        }
    },

    //Mutations
    mutations:{
        setUserData(state, payload){
            state.user.id = payload.id
            state.user.token = payload.token
            state.user.first_name = payload.user.first_name
            state.user.last_name = payload.user.last_name
            state.user.username = payload.user.username
            state.user.isLogedin = true
          },
        setUserClasses(state, payload){
            if(payload != undefined){
              state.classes = payload
            }
          },
    },


    actions :{
        login(context, payload) {
			mixin.methods.baseRequest({	// login user api call
				url: 'user/login/',
				method: 'POST',
				data: payload
			}).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token) // save token into localstorage
				context.commit('setUserData', res.data) // create related cafe classes
			}).catch(err => {
				context.state.localLoading = false // deactive loading mode
				if (err.response) {
					console.log(err.response)
					if (err.response.status == 400) {
						console.log({ message: 'اطلاعات ورودی معتبر نیست' })
					}
				}
			})
    },
    }
})