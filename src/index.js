import configureStore from './store/configureStore';
import {bugAdded, bugRemoved, bugResolved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser} from './store/bugs';
import {projectAdded} from './store/projects';
import {userAdded} from './store/users';


const store = configureStore()

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState())
})

store.dispatch(userAdded({name: 'User 1'}))
store.dispatch(userAdded({name: 'User 2'}))
store.dispatch(projectAdded({name: 'Project 1'}))
store.dispatch(bugAdded({description: "Bug 1"}))
store.dispatch(bugAdded({description: "Bug 2"}))
store.dispatch(bugAdded({description: 'Bug 3'}))
store.dispatch(bugAssignedToUser({bugId: 1, userId: 1}))
store.dispatch(bugResolved({id: 2}))

const unresolvedBugs = getUnresolvedBugs(store.getState())
const unresolvedBugs2 = getUnresolvedBugs(store.getState())
const bugs = getBugsByUser(1)(store.getState())

console.log(bugs);
console.log(unresolvedBugs);
console.log(unresolvedBugs === unresolvedBugs2);

unsubscribe()

store.dispatch(bugRemoved({id: 1}))

console.log(store.getState());
