export interface IState {
  username: string
  password: string
}
const State = (): IState => ({
  username: 'UNKNOWN',
  password: 'UNKNOWN',
})

export default State
