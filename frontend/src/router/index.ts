// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/masters',
    component: () => import('@/views/Masters.vue'),
    children: [
      {
        path: "/company",
        component: () => import('@/views/masters/Company.vue')
      },
      {
        path: "/accounts",
        component: () => import('@/views/masters/Accounts.vue')
      },
      {
        path: "/documents",
        component: () => import('@/views/masters/Documents.vue')
      },
      {
        path: "/installation",
        component: () => import('@/views/masters/Installation.vue')
      },
      {
        path: "/location",
        component: () => import('@/views/masters/Location.vue')
      },
      {
        path: "/winary",
        component: () => import('@/views/masters/Winary.vue')
      },
    ]
  },
  {
    path: '/thirds',
    component: () => import('@/views/Thirds.vue'),
    children: [
      {
        path: "/thirdsManagement",
        component: () => import('@/views/thirds/ThirdsManagement.vue')
      },
      {
        path: "/clients",
        component: () => import('@/views/thirds/Clients.vue')
      },
      {
        path: "/providers",
        component: () => import('@/views/thirds/Providers.vue')
      },
      {
        path: "/officials",
        component: () => import('@/views/thirds/Officials.vue')
      }
    ]
  },
  {
    path: '/items',
    component: () => import('@/views/Items.vue'),
    children: [
      {
        path: '/itemManagement',
        component: () => import('@/views/items/ItemManagement.vue'),
      },
      {
        path: '/quote',
        component: () => import('@/views/items/Quote.vue'),
      },
      {
        path: '/salesPrices',
        component: () => import('@/views/items/SalesPrices.vue'),
      },
    ]
  },
  {
    path: '/buy',
    component: () => import('@/views/Buy.vue'),
    children: [
      {
        path: '/supplierInvoice',
        component: () => import('@/views/buy/SupplierInvoice.vue'),
      },
      {
        path: '/request',
        component: () => import('@/views/buy/Request.vue'),
      },
      {
        path: '/wish',
        component: () => import('@/views/buy/Wish.vue'),
      },
      {
        path: '/order',
        component: () => import('@/views/buy/Order.vue'),
      },
      {
        path: '/entranceWinary',
        component: () => import('@/views/buy/EntranceWinery.vue'),
      },
    ]
  },
  {
    path: '/sale',
    component: () => import('@/views/Sale.vue'),
    children: [
      {
        path: '/saleInvoice',
        component: () => import('@/views/sale/SaleInvoice.vue'),
      },
      {
        path: '/creditNote',
        component: () => import('@/views/sale/CreditNote.vue'),
      },
      {
        path: '/debiNote',
        component: () => import('@/views/sale/DebitNote.vue'),
      },
      {
        path: '/expend',
        component: () => import('@/views/sale/Expend.vue'),
      },
    ]
  },
  {
    path: '/inventary',
    component: () => import('@/views/Inventary.vue'),
    children: [
      {
        path: '/directEntry',
        component: () => import('@/views/inventary/DirectEntry.vue'),
      },
      {
        path: '/directRemove',
        component: () => import('@/views/inventary/DirectRemove.vue'),
      },
      {
        path: '/transfers',
        component: () => import('@/views/inventary/Transfers.vue'),
      }
    ]
  },
  {
    path: '/config',
    component: () => import('@/views/Config.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
