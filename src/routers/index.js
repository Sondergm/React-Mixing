import { lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

// 使用lazy懒加载函数包裹路由
const LazyLoadPage = lazy(() => import('../pages/LazyLoad'))
const PubSubPage = lazy(() => import('../pages/PubSub'))


export default function Router () {
  return (
    <Suspense fallback={<h2>加载失败</h2>}>
      <Route path='/lazyload' component={LazyLoadPage} />
      <Route path='/pubsub' component={PubSubPage} />
      <Redirect from='/' to='/pubsub' />
    </Suspense>
  )
}