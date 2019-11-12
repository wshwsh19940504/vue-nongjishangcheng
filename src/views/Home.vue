<template>
    <div>
<home-nav></home-nav>
<home-swiper></home-swiper>
<home-hotgoods></home-hotgoods>
<div>我是home</div>

    </div>
</template>

<script>
import HomeNav from '../components/pages/home/HomeNav'
import HomeHotgoods from '../components/pages/home/HomeHotgoods'
import HomeSwiper from '../components/pages/home/HomeSwiper'
    export default {
        components:{
            HomeNav,
            HomeSwiper,
            HomeHotgoods
        }
    }
</script>

<style lang="scss" scoped>

</style>