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
          isLoggedIn : false,
          email : null ,
      },

      rooms : [],
      specificRoomMembers : [],
      classStatus :false ,
      successfulRoomJoining : false ,
  },

  //Mutations
  mutations:{
      setUserData(state, payload){
          this.state.user.id = payload.id
          this.state.user.token = payload.token
          this.state.user.first_name = payload.user.first_name
          this.state.user.last_name = payload.user.last_name
          this.state.user.username = payload.user.username
          this.state.user.isLogedin = true
          this.state.user.email = payload.user.email
        },
      setUserRooms(state, payload){
        state.rooms = []
          if(payload != undefined){
            state.rooms = payload
          }
        },
      userRoomsUpdate(state,payload){
        state.allRooms = payload;

      },
      indexCreatedRoom(state, payload){
        state.rooms.admin.push(payload)
      },
      indexJoinedRoom(state, payload){
        state.rooms.participated.push(payload)
      },
      setRoomExams(state, room_id, payload) {
        let room = state.rooms.admin.find(room => room.id == room_id)
        room.exams.push(payload)
        room = state.rooms.participated.find(room => room.id == room_id)
        room.exams.push(payload)
      },
      changePromotedAdminRole(state , payload){
        console.log("In Commit")
        state.specificRoomMembers.forEach(item =>{
          if ( item.data.id == payload ){
            console.log("Found it")
            console.log(item)
            item.role = "Admin" ;
          }
        })
      }
  },


  actions :{

    login(context, payload) {
      localStorage.setItem('statuscode',"")
      mixin.methods.baseRequest({	// login user api call
        url: 'user/login/',
        method: 'POST',
        data: payload
      }).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token) // save token into localstorage
        console.log(`Login Token : ${res.data.token}` )
        // localStorage.setItem('statuscode',res.status)
        context.commit('setUserData', res.data) // create related cafe classes
        if(res.status == 200){
          console.log("Status : 200")
          this.$router.push( { name: 'Home' })
        }

      }).catch(err => {

        context.state.localLoading = false // deactive loading mode
        if (err.response) {
          console.log(err.response)
          if (err.response.status == 400) {
            alert("Invalid Username or Password")
          }
        }
      })
    },

    register(context, payload) {
      mixin.methods.baseRequest({
				url: 'user/create/',
				method: 'POST',
				data: { 'user': payload }
			}).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
				context.commit('setUserData', res.data)
			}).catch(err => {
				context.state.localLoading = false // deactive loading mode
				if (err.response) {
          console.log(err.response)
          alert("Username or Email not Unique")
					if (err.response.status == 400) {
						console.log({ message: 'اطلاعات ورودی معتبر نیست' })
					}
				}
			})
    },

    getUserRooms(context) {
      let userID = context.state.user.id
      mixin.methods.request({
				url: 'rooms/'+ userID +'/',
				method: 'GET',
			}).then(res => {
        console.log("Rooms Received (Store): ")
        console.log( res.data)
        context.commit('setUserRooms', res.data)
        //context.commit('userRoomsUpdate', res.data)

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
    createRoom(context, payload) {
      mixin.methods.request({
				url: 'room/create/',
        method: 'POST',
        data: { name: payload.classTitle,
                link : payload.classHash,
                description : payload.classDescription,
                admin: [context.state.user.id]
              }
			}).then(res => {
        console.log(res)
        //context.commit('indexCreatedRoom', res.data)
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

    joinRoom(context, payload) {
      let userID = context.state.user.id+1
      mixin.methods.request({
				url: 'room/' + payload + '/user/' + userID + '/join/',
        method: 'POST',
      }).then(res => {
        console.log(res)
			}).catch(err => {
				context.state.localLoading = false // deactive loading mode
			})
    },

    createExam(context, payload) {
      mixin.methods.request({
				url: 'exam/create/',
        method: 'POST',
        data: payload
      }).then(res => {
        console.log(res)
        //context.dispatch('getRoomExam', res.data.room)
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

    getRoomExam(context, room_id) {
      mixin.methods.request({
        url: 'exams/'+ room_id +'/',
        method: 'GET',
      }).then(res => {
        console.log(res)
        context.commit('setRoomExams', room_id, res.data)
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

    getRoomsExams(context) {
      context.state.rooms.admin.forEach(room => {
        mixin.methods.request({
          url: 'exams/'+ room.id +'/',
          method: 'GET',
        }).then(res => {
          console.log(res)
          room['exams'] = res.data
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });
      context.state.rooms.participated.forEach(room => {
        mixin.methods.request({
          url: 'exams/'+ room.id +'/',
          method: 'GET',
        }).then(res => {
          console.log(res)
          room['exams'] = res.data
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });
    },

    getRoomUsers(context, item) {
      this.state.specificRoomAdmins = []
      this.state.specificRoomUsers = []
      this.state.specificRoomMembers = []
      item['admin'].forEach(user => {
        mixin.methods.request({
          url: 'user/'+ user +'/',
          method: 'GET',
        }).then(res => {
          //console.log(res)
          //this.state.specificRoomAdmins.push(res.data)
          this.state.specificRoomMembers.push({role:"Admin",data:res.data})
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });

      item['participate'].forEach(user => {
        mixin.methods.request({
          url: 'user/'+ user +'/',
          method: 'GET',
        }).then(res => {
          console.log(res)
          //this.state.specificRoomUsers.push(res.data)
          this.state.specificRoomMembers.push({role:"Participant",data:res.data})
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });

    },

    addAdmin(context, {roomID, userID}) {
      //console.log(room);
      //console.log(admin);
        userID += 1
        mixin.methods.request({
          url: 'room/' + roomID + '/user/'+ userID +'/admin/',
          method: 'POST',
        }).then(res => {
          console.log(res)
          context.commit('changePromotedAdminRole', userID-1)
          alert("User Promoted as Admin Successfully !!")
        }).catch(err => {
          context.state.localLoading = false
          alert("User Promotion Denied !")
        })
    },

  },//end of actions


  getters: {
    rooms: state => {
      let rooms = state.rooms
      let processedRooms = rooms.admin
      rooms['participated'].forEach(participated => {
        if (!processedRooms.some(room => room.id == participated.id)) {
          processedRooms.push(participated)
        }
      });
      return processedRooms
    }
  },// ende of getters
})


export default store;