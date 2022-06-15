<template>
    <div class="common-layout">
        <el-container>
            <el-header height="48px">
                <HomeHeader/>
            </el-header>
            <el-container>
                <el-main>
                  <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader"


export default {
    name: 'Home',
    components: {HomeHeader,}
}
</script>

<style scoped>

</style>
