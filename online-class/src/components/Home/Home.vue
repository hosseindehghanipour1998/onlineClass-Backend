<template>

    <div style="max-width:100%;height:100%;">

        <table style="width:100%;height:100%;">
            <tbody>

                <tr style="height:20%; width:100%;padding:2px;">
                    <td colspan="2">
                        <Header></Header>
                    </td>
                </tr>

                <tr style="height:80%; width:100%; background-color:pink; ">
                    <td style="width:10% ; height:100%; background-color:pink;">
                        <SideBar></SideBar>
                    </td>
                    <td style="width:90% ; height:100%;background-color:red;">
                        <div style="backgroundcolor:purple;"></div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import SideBar from '../VerticalList/SideBar.vue' ;
import Header from '../Header/Header.vue' ;
export default {
    components: {
        SideBar,
        Header
    }

}
</script>

<style scoped>

</style>