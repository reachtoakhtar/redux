import configureStore from './store/configureStore';
import {bugAdded, bugRemoved, bugResolved} from './store/bugs';


const store = configureStore()

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState())
})

store.dispatch(bugAdded({description: "Bug 1"}))
store.dispatch(bugAdded({description: "Bug 2"}))
store.dispatch(bugAdded({description: 'Bug 3'}))

store.dispatch(bugResolved({id: 1}))

unsubscribe()

store.dispatch(bugRemoved({id: 1}))

console.log(store.getState());
