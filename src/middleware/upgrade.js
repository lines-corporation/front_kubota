export default function ({ store, redirect, route }) {
  // 仮会員の時 / は ページ側でチェック
  if (
    store.$auth.loggedIn &&
    route.path !== "/upgrade" &&
    route.path !== "/inquiry"
  ) {
    const group_ids = JSON.parse(JSON.stringify(store.$auth.user.group_ids))
    // 仮登録の場合にはアップグレードに遷移する
    if(Object.keys(group_ids).length == 1 && Object.keys(group_ids)[0] == "116") {
      return redirect("/upgrade")
    }
    /*
    Object.keys(group_ids).forEach(function (key) {
      if (key == 114 || key == 111 || key == 110 || key == 113) {
        upgraded_flg = true
      }
    })
    */
  }
}
