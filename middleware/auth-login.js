export default function ({ $auth, redirect, store }) {
  const user = $auth.user

  if (user) {
    redirect('/data').catch(() => {})
  }
}
