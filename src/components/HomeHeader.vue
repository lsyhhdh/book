<template>
    <el-menu
        router
        mode="horizontal"
        background-color="white"
        text-color="#222"
        active-text-color="red"
        style="min-width: 1300px">
       <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
      </el-menu-item>
        <a href="#nowhere" style="color: #222;float: right;padding: 17px;">后台管理</a>
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8="" style="width: 25px"><path fill="currentColor" d="M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"></path></svg>
<!--        <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>-->
        <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">HELLO MY FRIENDS!</span>
    </el-menu>
</template>

<script>
export default {
    name: 'HomeHeader',
    data() {
        return {
            navList: [
                {name: '/index', navItem: '首页'},
                {name: '/library', navItem: '图书馆'},
                {name: '/mybook', navItem: '我的书架'}
            ]
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

span {
    pointer-events: none;
}
</style>
