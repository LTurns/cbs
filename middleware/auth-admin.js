export default function ({ $auth, redirect, store }) {
  const user = $auth.user

  if (!user) {
    //   redirect('/data').catch(() => {})
    //   // console.log(user)
    //   // let the user in
    // } else {
    // store.dispatch('snackbar/setSnackbar', {
    //   color: 'error',
    //   text: 'You must be an admin to view that page.',
    // })
    // console.log($auth.data)
    // console.log(user)
    redirect('/')
    // throw new Error('there is an error', Error)
  }
}
