<template>
  <div class="navbar fixed top-0 left-0 right-0 shadow-xl backdrop-blur-md bg-secondary/40 z-50 py-3">
    <div class="navbar-start font-light">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost text-white lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="
            menu menu-compact
            dropdown-content
            mt-3
            p-2
            shadow
            bg-base-100
            rounded-box
            w-52
          ">
          <li v-for="menu in menus" :key="menu.title">

            <a v-if="menu.submenus" class="justify-between">
              {{ menu.title }}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul v-if="menu.submenus" class="p-2 bg-accent">
              <li v-for="submenu in menu.submenus" :key="submenu.title">
                <NuxtLink :to="submenu.url">{{ submenu.title }}</NuxtLink>
              </li>
            </ul>
            <NuxtLink v-else :to="menu.url">{{ menu.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl"> <img src="/assets/img/logo.png" class="h-full py-1"
          alt="Tholee">
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex font-light">
      <ul class="menu menu-horizontal p-0 text-white">
        <li v-for="menu in menus" :key="menu.title">
          <a v-if="menu.submenus" class="hover:bg-accent hover:text-secondary">
            {{ menu.title }}
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul v-if="menu.submenus" class="p-2 bg-white">
            <li v-for="submenu in menu.submenus" :key="submenu.title">
              <NuxtLink :to="submenu.url" class="text-secondary hover:bg-primary hover:text-accent">{{
                  submenu.title
              }}</NuxtLink>
            </li>
          </ul>

          <NuxtLink v-else :to="menu.url" class="hover:bg-accent hover:text-secondary">{{ menu.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-accent">Hubungi Kami</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menus: {
        beranda: {
          title: 'Beranda',
          url: '/'
        },
        projects: {
          title: 'Projects',
          url: '',
          submenus: {
            profile: {
              title: 'Company Profile',
              url: '/projects/company-profile'
            },
            documentary: {
              title: 'Creative Documentary',
              url: '/projects/creative-documentary'
            },
            movie: {
              title: 'Movie Production',
              url: '/projects/movie-production'
            },
            tvcpsa: {
              title: 'TVC/PSA',
              url: '/projects/tvc-psa'
            },
            promotional: {
              title: 'Event Promotional',
              url: '/projects/event-promotional'
            },
            videobooth: {
              title: 'Photo/Videobooth',
              url: '/projects/photo-videobooth'
            },
          }
        },
      }
    }
  }
}
</script>