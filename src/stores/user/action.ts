import { ElMessage } from 'element-plus'
import type {
  PiniaCustomProperties,
  _StoreWithGetters,
  _StoreWithState,
} from 'pinia'
import type { UnwrapRef } from 'vue'
import type { IGetter } from './getter'
import type { IState } from './state'
import { fetchAccount } from '@/api/user'

type _Actions = IAction &
ThisType<
IAction &
UnwrapRef<IState> &
_StoreWithState<string, IState, IGetter, IAction> &
_StoreWithGetters<IGetter> &
PiniaCustomProperties
>

export interface IAction {
  getAccount(): Promise<void>
}

const actions: _Actions = {
  async getAccount() {
    const { code, data: user } = await fetchAccount()
    if (code !== 0) {
      ElMessage.error('获取当前用户信息失败!')
      return
    }
    [this.username, this.password] = [user.username, user.password]
  },
}

export default actions
