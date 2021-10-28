import { firestoreAction } from 'vuexfire'

export const state = () => ({
  items: []
})

export const getters = {
  all: state => {
    return state.items
  },
  byId: (state) => (taskId) => {
    const res = state.items.filter(task => task.id === taskId)
    return res.length > 0 ? res[0] : null
  },
  byNumber: (state) => (taskId) => {
    const res = state.items.filter(task => task.number === taskId)
    return res.length > 0 ? res[0] : null
  },  
}

export const actions = {
  bind: firestoreAction(function ({ bindFirestoreRef }) {
    // return the promise returned by `bindFirestoreRef`
    return bindFirestoreRef('items', this.$fire.firestore.collection('tasks'))
  }),
  add: firestoreAction(function (_, { title, users, detail, adminId, skyway, movieId, id }) {
    return this.$fire.firestore.collection('tasks').add({ title, users, detail, admin_uid: adminId, skyway, movie_uid: movieId, id })
  }),
  remove: firestoreAction(function ({ getters }, { taskId }) {
    const user = this.$fire.auth().currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const task = getters.byId(taskId);
    if (!task) {
      throw new Error('invalid task id')
    }

    if (task.admin_uid !== user.uid) {
      throw new Error('permission denied')
    }

    return this.$fire.firestore.collection('tasks').doc(taskId).delete()
  }),

  update: firestoreAction(function ({ getters }, { taskId }) {
    const task = getters.byId(taskId)
    return this.$fire.firestore.collection('tasks').doc(taskId).update({ prod_code: getters })
  }),

  join: firestoreAction(function ({ getters }, { taskId }) {
    const user = this.$fire.auth.currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const task = getters.byId(taskId)
    if (!task) {
      throw new Error('invalid task id')
    }

    return this.$fire.firestore.collection('tasks').doc(taskId).update({ users: this.$fireModule.firestore.FieldValue.arrayUnion(user.uid) })
  }),
  leave: firestoreAction(function ({ getters }, {taskId }) {
    const user = this.$fire.auth.currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const task = getters.byId(taskId)
    if (!task) {
      throw new Error('invalid task id')
    }

    return this.$fire.firestore.collection('tasks').doc(taskId).update({ users: this.$fireModule.firestore.FieldValue.arrayRemove(user.uid) })
  }),
}
