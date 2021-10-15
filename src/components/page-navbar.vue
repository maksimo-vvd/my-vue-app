<template lang="html">
  <nav class="bg-gray-700">
    <div class="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-center py-3 relative md:flex-row md:justify-start">

        <page-logo class="md:mr-3" />

        <page-navbar-mobile-btn
            class="ml-3 absolute right-0 top-2 md:hidden"
            :is-menu-showing="isBurgerBtnPressed"
            @click="toggleBurger"
        />

        <!--          navbar holder-->
        <!--
        Page Nav, show/hide based on menu state.
        For mobile >
        Menu closed: "hidden". Menu open: remove "hidden".
        For desktop >
        Menu never closed.
        -->
        <div
            class="flex self-stretch md:flex-grow md:items-center pt-4 md:pt-0"
            :class="{hidden : !isBurgerBtnPressed && isMobile}"
        >
          <!--          navbar nav-->
          <page-navbar-nav
              v-if="!isUserProfileNavShowing"
              class="flex flex-col space-x-4 flex-grow md:flex-row"
          />

          <user-profile-nav
              v-if="isUserProfileNavShowing"
              :is-user-profile-nav-showing="isUserProfileNavShowing"
              :class="{'flex-grow': isUserProfileNavShowing}"
          />

          <!--        navbar tools-->
          <!-- add flex-grow for open user dropdown menu-->
          <page-navbar-tools
              class="flex flex-col ml-3 items-end md:flex-row"
              :is-mobile="isMobile"
              @click="toggleUserProfileNav"
          />
        </div>

      </div>
    </div>
  </nav>
</template>

<script lang="js">
  import PageLogo from '@/components/page-logo.vue'
  import PageNavbarMobileBtn from '@/components/page-navbar-mobile-btn.vue'
  import PageNavbarNav from '@/components/page-navbar-nav.vue'
  import PageNavbarTools from '@/components/page-navbar-tools.vue'
  import userProfileNav from '@/components/user-profile-nav.vue'

  export default  {
    name: 'page-navbar',
    components: {
      PageLogo,
      PageNavbarMobileBtn,
      PageNavbarNav,
      PageNavbarTools,
      userProfileNav
    },
    props: [],
    beforeDestroy () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('change', this.onMQLChange, { passive: true })
      }
    },
    mounted () {
      this.onMQLChange()
      this.mediaQueryList.addEventListener('change', this.onMQLChange, { passive: true })
    },
    data () {
      return {
        isMobile: false,
        isBurgerBtnPressed: false,
        mediaQueryList: window.matchMedia('(max-width: 767.98px)'),
        isUserProfileNavShowing: false
      }
    },
    methods: {
      toggleBurger() { this.isBurgerBtnPressed = !this.isBurgerBtnPressed },
      onMQLChange () { this.isMobile = this.mediaQueryList.matches },
      toggleUserProfileNav () { this.isUserProfileNavShowing = !this.isUserProfileNavShowing}
    },
    computed: {

    }
}
</script>
