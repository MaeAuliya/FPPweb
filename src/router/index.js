import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddForum from '../views/AddForum.vue'
import Thread from '../views/Thread.vue'
import Catalog from '../views/Catalog.vue'
import Post from '../views/NewPost.vue'
import ReplyPost from '../views/ReplyPost.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
   component: Catalog
  },
  {
    path: '/AddForum',
    name: 'addForum',
    component: AddForum
  },
  {
    path: '/thread/:forumId',
    name: 'thread',
    component: Thread
  },
  {
    path: '/thread/newpost/:forumId',
    name: 'post',
    component: Post
  },
  {
    path: '/thread/replyPost/:postId',
    name: 'replypost',
    component: ReplyPost
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
