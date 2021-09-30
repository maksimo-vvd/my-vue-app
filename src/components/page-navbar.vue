<template lang="html">

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-700 mb-20">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center justify-center py-3 relative">

      <page-logo class="sm:mr-3 mb-4 sm:mb-0" />

      <page-navbar-mobile-btn class="ml-3 absolute right-0 top-2" />

      <div class="flex self-stretch">
        <!--          navbar nav-->
        <page-navbar-nav class="flex-grow" />

        <!--        navbar tools-->
        <page-navbar-tools class="flex flex-col ml-3 items-center" />

      </div>

    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
<!--  <div class="hidden sm:hidden" id="mobile-menu">-->
<!--    <div class="px-2 pt-2 pb-3 space-y-1">-->
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
<!--      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>-->
<!--      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>-->
<!--      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>-->
<!--      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>-->
<!--    </div>-->
<!--  </div>-->
</nav>

</template>

<script lang="js">
  import PageLogo from '@/components/page-logo.vue'
  import PageNavbarMobileBtn from '@/components/page-navbar-mobile-btn.vue'
  import PageNavbarNav from '@/components/page-navbar-nav.vue'
  import PageNavbarTools from '@/components/page-navbar-tools.vue'

  export default  {
    name: 'page-navbar',
    components: {
      PageLogo,
      PageNavbarMobileBtn,
      PageNavbarNav,
      PageNavbarTools
    },
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>
