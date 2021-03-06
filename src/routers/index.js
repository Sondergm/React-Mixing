import { lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

// 使用lazy懒加载函数包裹路由
const LazyLoadPage = lazy(() => import('../pages/LazyLoad'))
const PubSubPage = lazy(() => import('../pages/PubSub'))
const StatePage = lazy(() => import('../pages/State'))
const ReduxPage = lazy(() => import('../pages/Redux'))
const HooksPage = lazy(() => import('../pages/Hooks'))
const ContextPage = lazy(() => import('../pages/Context'))


export default function Router (msg) {
  console.log(msg);
  return (
    <Suspense fallback={<h2>加载失败</h2>}>
      <Route path='/lazyload' component={LazyLoadPage} />
      <Route path='/pubsub' component={PubSubPage} />
      <Route path='/state' component={StatePage} />
      <Route path='/redux' component={ReduxPage} />
      <Route path='/hooks' component={HooksPage} />
      <Route path='/context' component={ContextPage} />
      <Redirect from='/' to='/pubsub' />
    </Suspense>
  )
}