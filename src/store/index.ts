import { useStore as baseUseStore, createStore, Store } from 'vuex'
import { userReports } from './UserReport'
import type { RootState } from './types'
import type { InjectionKey } from 'vue'
// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  state: {
    version: '1.0.0'
  },
  modules: {
    userReports
  }
})

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key)
}
